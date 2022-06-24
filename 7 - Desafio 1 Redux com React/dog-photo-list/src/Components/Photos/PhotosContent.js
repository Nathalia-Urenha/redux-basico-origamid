import React from 'react';
import { useSelector } from 'react-redux';
import { ListPhotos, ItemPhoto, Image, Title, Acessos } from './style'

function PhotosContent() {

    const { list } = useSelector(state => state.photos);

    return (
        <ListPhotos>{list.map((photo) => (
            <ItemPhoto key={photo.id}>
                <Image src={photo.src} alt={photo.title} />
                <Title>{photo.title}</Title>
                <Acessos>{photo.acessos}</Acessos>
            </ItemPhoto>
        ))}</ListPhotos>
    )
}

export default PhotosContent