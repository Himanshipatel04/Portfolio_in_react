import React from 'react'
import photo1 from "../assets/cdgi.jpg"
import photo2 from "../assets/best student.jpg"
import photo3 from "../assets/sih.jpg"

const AcCard = (props) => {
    return <div className='h-[500px] rounded-xl shadow-md shadow-yellow-400 w-[350px] p-5 text-center'>
       <img src={props.photo} alt="" className='h-[300px] w-full object-cover mb-4  rounded-lg'/>
       <p>{props.text}</p>
    </div>
}


const Achievements = () => {
  return (
    <div className='flex items-center justify-center gap-16 flex-col pt-28 bg-black min-h-screen text-yellow-400 text-lg'>
        <p className='text-yellow-400 text-3xl uppercase tracking-widest'>Achievements</p>
        <div className='flex items-center justify-center gap-20'>
            <AcCard text="Honored to be recognized as the top academic achiever in university, receiving the prestigious award for achieving the highest marks across all subjects." photo= {photo1} />
            <AcCard text="Successfully propelled to the pinnacle of the Smart India Hackathon 2023, hosted at Manipal University Jaipur, alongside the team 'Code Connect', with myself as the team lead." photo= {photo3} />
            <AcCard text="Proudly secured the runner-up position in the esteemed 'Web Granth' web development hackathon, hosted at Chameli Devi Group of Institutions, Indore." photo= {photo2} />
        </div>
    </div>
  )
}

export default Achievements