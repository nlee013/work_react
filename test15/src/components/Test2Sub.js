import React, { useMemo } from 'react';

const getColor = (color) => {

    console.log('getColor')

    switch(color){
        case 'pink': return '분홍'
        case 'tomato': return '토마토'
        case 'orange': return '주황'
        case 'yellow': return '노랑'
        default : return '없음'
    }
}

const getMovie = (movie) => {

    console.log('getMovie')

    switch(movie){
        case '인질': return '황정민'
        case '담보': return '성동일'
        case '도굴': return '이제훈'
        case '기적': return '박정민'
        default : return '없음'
    }
}


const Test2Sub = ({color, movie}) => {

    //가져온 data를 함수에 넣기
    //const colorInfo = getColor(color)
    //const movieInfo = getMovie(movie)

    const colorInfo = useMemo(()=>getColor(color),[color])
    const movieInfo = useMemo(()=>getMovie(movie),[movie])

    return (
        <div>
           <h4>좋아하는 색은 [{color} / {colorInfo}] 입니다.</h4>
           <h4>좋아하는 영화는 [{movie} / {movieInfo}] 입니다.</h4>
        </div>
    );
};

export default Test2Sub;