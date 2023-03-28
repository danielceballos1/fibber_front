import React from 'react'
import './CatCard.scss'
import { Link } from 'react-router-dom';

const CatCard = ({item}) => {
  console.log(item.cat)
  return (
    
    <Link to={`/gigs?cat=${item.cat}`}>
        <div className="catCard">
               <img src={item.img}/>
               <span className="desc">{item.desc}</span>
               <span className='title'>{item.title}</span>
        </div>
    </Link>
   
  )
}

export default CatCard