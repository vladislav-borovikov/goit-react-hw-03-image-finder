import React from 'react';
import {ImageGallerySection} from './ImageGallary.styled'

const ImageGallery = ({children}) => {

    return(
        <ImageGallerySection>
        {children}
        </ImageGallerySection>
    )
}

export default ImageGallery;
