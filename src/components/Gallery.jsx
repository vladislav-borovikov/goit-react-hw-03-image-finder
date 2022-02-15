import React from 'react';
import Searchbar from './Searshbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryList from './ImageGalleryItem/ImageGalleryList';
import {LoadMoreButton} from './Gallery.styled';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader.jsx';

import { Api } from '../services/Api'



class ImageFinder extends React.Component {
    state={
        images: [],
        filter: '',
        page: 1,
        perPage: 12,
        total: 0,
        showModal: false,
        imgUrl: '',
        load: false,
        totalHits: 0
    }

   
    changFilter = (data) => {
        this.setState({filter: data})

    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    }


    getImgUrl = (url) => {
        this.setState({imgUrl: url})
        this.toggleModal()

    }


    fetchImages = async () => {
        
        const { filter, page} = this.state

        try{
            this.setState({load: true})
            const {hits, total, totalHits} = await Api(filter, page)

             if (hits.length === 0) {
                return Promise.reject(
                    new Error(alert(`Invalid request - ${filter}. Try again`)))
                  }
       
            //     return this.setState({ images: [images, ...hits], totalHits: totalHits }) 
            // } alert( `Invalid request - ${filter}. Try again`)
            this.setState(prevState => {
                return {
                    images: [...prevState.images, ...hits],
                    totalHits,
                    total,
               };
              }
             );
    

        }catch (error) {
            alert(error)
        } finally {
            this.setState({ load: false })
        }

        
    }


    componentDidUpdate(prevPropes, prevState) {
        if (prevState.filter !== this.state.filter) {
            this.setState({ page: 1, images: [] })
        }
        if ((prevState.filter !== this.state.filter  && this.state.page === 1) || prevState.page !== this.state.page) {
            this.fetchImages()
            }
        
        // if (prevPropes.filter !== this.props.filter) {
        //     this.setState({ page: 1, images: [] })
        // } if ((prevPropes.filter !== this.props.filter && this.state.page === 1) || prevState.page !== this.state.page){
        //     this.setState({load: true});
        //     this.fetchImages()
        // }     
        }
    
    


    render() {
        const {images, page, filter, total, imgUrl, showModal, load} = this.state
        return (
            <>
           
            <Searchbar value={filter} onSubmit={this.changFilter}/>
            <ImageGallery>
                {images.length > 0 && <ImageGalleryList data={images} onModal={this.getImgUrl}/>}
            </ImageGallery>
            {images.length !==  total && <LoadMoreButton type='button' onClick={() => this.setState({ page: page + 1 })}>Load more</LoadMoreButton>}
            {showModal && <Modal image={imgUrl} alt='' onClose={this.toggleModal}/>}
            {load && <Loader/>}
            </>
            
            
            

        )
    }

}

export default ImageFinder;