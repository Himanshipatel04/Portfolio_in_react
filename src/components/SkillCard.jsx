import React from 'react'

function SkillCard(props) {
  return (
    <div className=' rounded-tl-3xl rounded-br-3xl w-[400px] shadow flex  flex-col justify-center items-center pt-4 '>
      <p className='text-yellow-400 font-semibold text-2xl'>{props.heading}</p>
        <div className='grid grid-rows-2 grid-cols-2 gap-14 p-8'>
            <img src={props.photo1} alt="" className='h-24'/>
            <img src={props.photo2} alt="" className='h-24'/>
            <img src={props.photo3} alt="" className='h-24'/>
            <img src={props.photo3} alt="" className='h-24'/>
        </div>
    </div>
  )
}

export default SkillCard