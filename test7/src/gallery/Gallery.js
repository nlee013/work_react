import React, { useState } from 'react';
import '../assets/css/reset.css';
import GalleryList from './GalleryList';
import GalleryView from './GalleryView';
import './style.css';
import data from '../assets/api/image';

//public안에 p_images 이미지 출력하기
const Gallery = () => {

    const [gallery,setGallery] = useState(data)
    const [img, setImg] = useState(gallery[0])

    const onView = (id) => {
        setImg(gallery.find(item=>item.id===id))
    }

    return (
        <div className='con-box'>

            <GalleryList gallery={gallery} img={img} onView={onView}/>

            <GalleryView img={img}/>  

        </div>
    );
};

export default Gallery;