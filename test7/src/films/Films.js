import React, { useState } from 'react';
import FilmsList from './FilmsList';
import './style.css'
import FilmsData from '../assets/api/FilmsData'

const Films = () => {

    const [data, setData] = useState(FilmsData)

    const onRemove = (no) => {
        //alert('삭제 만드는중')
        //alert(no)
        setData(data.filter(item=>item.no!==no))
    }

    return (
        <div className='wrap'>
            <h2>2021년도 개봉작</h2>
            <FilmsList data={data} onRemove={onRemove}/>   
        </div>
    );
};

export default Films;