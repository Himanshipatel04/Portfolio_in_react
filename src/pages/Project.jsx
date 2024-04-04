import React from 'react'
import Card from '../components/Card'
import photo1 from "../assets/projectphoto.jpeg"

const Project = () => {
  return (
    <div className='bg-black h-screen w-full flex flex-col items-center gap-10  text-white text-4xl pt-24'>
      <p data-aos = "fade-up"  data-aos-delay="100" className="text-yellow-400 text-4xl uppercase tracking-widest">Projects</p>
      <div className='flex items-center justify-between gap-16'  data-aos = "fade-up"  data-aos-delay="200"><Card photo={photo1} heading="House Price Prediction" text="Pandas Numpy Matplotlib Scikit-learn Seaborn"/>
      <Card photo={photo1} heading="House Price Prediction" text="Pandas Numpy Matplotlib Scikit-learn Seaborn"/>
      <Card photo={photo1} heading="House Price Prediction" text="Pandas Numpy Matplotlib Scikit-learn Seaborn"/></div>
     
      <div className='flex items-center justify-between gap-16' data-aos = "fade-up"  data-aos-delay="300"><Card photo={photo1} heading="House Price Prediction" text="Pandas Numpy Matplotlib Scikit-learn Seaborn"/>
      <Card photo={photo1} heading="House Price Prediction" text="Pandas Numpy Matplotlib Scikit-learn Seaborn"/>
      <Card photo={photo1} heading="House Price Prediction" text="Pandas Numpy Matplotlib Scikit-learn Seaborn"/></div>
     
      
     
    </div>
  )
}

export default Project