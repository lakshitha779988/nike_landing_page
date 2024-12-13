import React from 'react'
import { star } from '../assets/icons'

function ReviewCard({feedback , rating , imgURL , customerName}) {
  return (
    <div className='flex justify-center items-center flex-col gap-4 mt-10'>
        <img src={imgURL} alt="" 
        width={120}
        height={120}
        className='object-contain rounded-full'/>
         <p className='font-montserrat info-text m-auto mt-4 max-w-lg text-slate-gray text-center '>{feedback}</p>
         <div className='mt-4 flex justify-start gap-2.5'>
            <img src={star} alt="rating" 
            width={24} height={24}/>
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>({rating})</p>
        </div>
        <h3 className='font-palanquin text-center font-bold text-2xl'>{customerName}</h3>
       


    </div>
  )
}

export default ReviewCard