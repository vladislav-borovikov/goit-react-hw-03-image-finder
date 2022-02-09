import React from 'react';
import {ImageGalleryItemEl, ImageGaleryList, ImageGalleryItemImage } from './ImageGalleryList.styled'

const ImageGalleryList = ({data, onModal}) => {

    return(
        <ImageGaleryList>
            {data.map(({webformatURL, tags, largeImageURL, id}) => <ImageGalleryItemEl key={id}>
                <ImageGalleryItemImage src={webformatURL} alt={tags} onClick={() => onModal(largeImageURL)}/>
            </ImageGalleryItemEl>)}
        </ImageGaleryList>

    )

}

export default ImageGalleryList;

