import React, { useState } from 'react';
import './Melon.css';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import music from '../assets/api/music'

const Melon = () => {

    const [musics,setMusics] = useState(music)

    const getDate = () => {

        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const date = now.getDate()

        const msg =`${year}.${month}.${date}`

        return msg
    }

    const onLike = (id) => {
        //alert('좋아요~~')
        setMusics(musics.map(music=>music.id === id?
            {
                ...music,
                done: !music.done,
                like:music.done ? music.like + 1 :  music.like - 1
            } : music))
    }

    const onSearch = (text) => {
        //alert(text)
        // setMusics(music.filter(music=>music.title.toLocaleLowerCase().indexOf
        // (text.toLocaleLowerCase()) !== -1))

        setMusics(music.filter(item=>{

            const result = new RegExp(text, 'ig')
            return item.title.match(result)
        }))
    }

    return (
        <div className='Melon'>
            <h2>멜론순위 {getDate} 인기차트</h2>
            <MelonForm onSearch={onSearch}/>
            <MelonList musics={musics} onLike={onLike}/>
        </div>
    );
};

export default Melon;