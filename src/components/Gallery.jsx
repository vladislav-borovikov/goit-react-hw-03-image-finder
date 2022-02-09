import React from 'react';
import Searchbar from './Searshbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryList from './ImageGalleryItem/ImageGalleryList';
import {LoadMoreButton} from './Gallery.styled';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader.jsx';





class ImageFinder extends React.Component {
    state={
        images: [],
        filter: '',
        page: 1,
        perPage: 12,
        total: 0,
        showModal: false,
        imgUrl: '',
        load: false
    }

   
    changFilter = (data) => {
        this.setState({filter: data})

    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})/////
    }


    getImgUrl = (url) => {
        this.setState({imgUrl: url})
        this.toggleModal()

    }


    fetchImages = () => {
        this.setState({load: true})
        const { images, filter, page, perPage,} = this.state
        const API_KEY = '24504393-335e93f8f8ae51e578d8e0bea'
        fetch(`https://pixabay.com//api/?q=${filter}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
        .then(res => res.json())
        .then(obj => this.setState({images: [...images, ...obj.hits], total: obj.totalHits }))
        .catch("error")
        .finally(this.setState({load: false})) 
        
    }


    componentDidUpdate(prevPropes, prevState) {
        if (prevState.filter !== this.state.filter || prevState.page !== this.state.page) {
        this.fetchImages()
        }
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