import React, { useState } from 'react';
import styled from 'styled-components';

//검색창
const ImageForm = styled.form`

text-align:center;
padding:40px 0;
    input{
        width:400px;
        height:45px;
        padding: 0 15px;
        box-sizing:border-box;
        border;1px solid #999;
        vertical-align:top;
    }
    button{
        width:100px;
        height:45px;
        background:#000;
        color:#fff;
        border:none;
        margin-left:5px;
    }
`

const GallerySearch = ({searchText}) => {

    const [text, setText] = useState('')

    const onSubmit = (evt) =>{

        evt.preventDefault()
        searchText(text)
    }
    return (
        <ImageForm onSubmit={onSubmit}>
            <input type='text' placeholder='검색어를 입력하세요'
            value={text} onChange={evt=>setText(evt.target.value)}/>

            <button type='submit'>검색</button>
            
        </ImageForm>
    );
};

export default GallerySearch;