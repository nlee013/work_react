import React from 'react';
import FilmsItem from './FilmsItem';

const FilmsList = ({data, onRemove}) => {
    return (
        <div className='movie'>
            {
                data.map(item=> <FilmsItem key={item.no} item={item} onRemove={onRemove}/>)
            }
        </div>
    );
};

export default FilmsList;