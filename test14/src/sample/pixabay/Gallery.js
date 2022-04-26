import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalStyle from '../styled/Global';
import GalleryList from './GalleryList';
import GallerySearch from './GallerySearch';
import {Container} from '../styled/pixabaycss';

const Gallery = () => {

    const [data, setData] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [text, setText] = useState('')

    useEffect(()=>{

        const API_KEY = '26990438-a242afeaa338e459041812118'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`

        axios.get(url)
        .then(res=>{
            setData(res.data.hits)
            setIsLoading(false)
            setError('')

        }).catch(error=>{
            setData([])
            setIsLoading(true)
            setError('주소를 찾을 수 없습니다.')
        })
    }, [text])

    const searchText = (text) =>{

        setText(text)
    }

    return (
        <>
        <GlobalStyle/>
        <Container>
            <GallerySearch searchText={searchText}/>
            {
                isLoading && data.length === 0 && (<h1> NO IMAGES FOUND</h1>)
            }
            {
                data  && !isLoading && <GalleryList data={data}/>

            }
        <p>
            {error ? error : null}
        </p>
        </Container>
        </>
    );
};

export default Gallery;