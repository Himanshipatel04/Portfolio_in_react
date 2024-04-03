import React from 'react'
import photo from "../assets/photo.jpg"

function Achievements() {
  return (
    <div className="bg-[#212121] h-screen w-full flex justify-center flex-col items-center gap-8 outline text-white">
     <h1 className='text-3xl text-yellow-400 underline'>Achievements</h1>
      <div className='flex justify-center items-center gap-28'>
        <div className='w-96 ch outline rounded-lg outline-1 shadow-card outline-yellow-400 flex items-center justify-center gap-4 flex-col p-4'>
          <img className='h-80 w-80 object-cover rounded-lg' src={photo} alt="" />
          <p className=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore iure officia dignissimos? Possimus, velit architecto. Eaque quae id, illum totam esse enim nulla eos voluptatibus nesciunt consequatur iusto modi dicta non nam perspiciatis fugit, inventore dignissimos dolorum? Quidem molestiae molestias voluptatem nihil officia! Iusto error molestias sit ea tempora?</p>
        </div>
        <div className='w-96 ch outline rounded-lg outline-1 shadow-card outline-yellow-400 flex items-center justify-center gap-4 flex-col p-4'>
          <img className='h-80 w-80 object-cover rounded-lg' src={photo} alt="" />
          <p className=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore iure officia dignissimos? Possimus, velit architecto. Eaque quae id, illum totam esse enim nulla eos voluptatibus nesciunt consequatur iusto modi dicta non nam perspiciatis fugit, inventore dignissimos dolorum? Quidem molestiae molestias voluptatem nihil officia! Iusto error molestias sit ea tempora?</p>
        </div>
        <div className='w-96 ch outline rounded-lg outline-1 shadow-card outline-yellow-400 flex items-center justify-center gap-4 flex-col p-4'>
          <img className='h-80 w-80 object-cover rounded-lg' src={photo} alt="" />
          <p className=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore iure officia dignissimos? Possimus, velit architecto. Eaque quae id, illum totam esse enim nulla eos voluptatibus nesciunt consequatur iusto modi dicta non nam perspiciatis fugit, inventore dignissimos dolorum? Quidem molestiae molestias voluptatem nihil officia! Iusto error molestias sit ea tempora?</p>
        </div>
        </div>
    </div>
  )
}

export default Achievements