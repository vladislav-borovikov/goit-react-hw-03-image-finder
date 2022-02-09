import { Component } from "react";
import { createPortal } from "react-dom";
import {ModalWindow, ModalOverlay} from "./Modal.stuled"


const modalRoot = document.querySelector('#root-modal')

class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown)
    }
    handleKeyDown = event => {
        if (event.code === 'Escape') {
        this.props.onClose()
        }
    }
    backdropClick = event => {
        if (event.target === event.currentTarget) {
           this.props.onClose() 
        }
    }
    
    

    render() {
        const {image, alt} = this.props;
        return createPortal(
        <ModalOverlay className="overlay" onClick={this.backdropClick}>
            <ModalWindow className="modal"> 
            <img src={image} alt={alt} />
            </ModalWindow>
        </ModalOverlay>, modalRoot)
    }
}

export default Modal;



// export const ImageGalleryItem = ({imageUrl, tags, onClick}) => {
//     return (<GalleryItem className="gallery-item">
//       <img src={imageUrl} alt={tags} onClick={() => onClick() }/>
// </GalleryItem>)
// }