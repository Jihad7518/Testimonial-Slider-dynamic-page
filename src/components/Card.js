
import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;

  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img className="aspect-square rounded-full w-[170px] h-[170px] z-[25]"
             src={review.image}></img>

            <div className='w-[170px] h-[170px] bg-violet-500 rounded-full absolute
                top-[-6px] z-[-10] left-[10px]'>
            </div>
