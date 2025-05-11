import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full pt-20 md:pt -36 pt -20 px-7 md:px-o space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text -home-heading-large text-home-heading-small relative font-bold text -gray-800 max-w-3xl mx-auto'>Empower your Future with the courses designed to <span className='text-blue-600'> fit your choice.</span> <img src={assets.skecth} alt='sketch'className='md:block hidden absolute -bottom-7 right -0'/></h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, assumenda odio nisi autem minima hic eos adipisci maiores dolorum laudantium necessitatibus iure praesentium, fugit ea corrupti perferendis? Eum, quisquam explicabo.</p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci cupiditate architecto possimus? Sunt temporibus dolores aperiam! Deleniti cupiditate similique cumque, reiciendis, consequuntur, nemo id ut dolore aperiam illum provident?
      </p>
      <SearchBar />
    </div>
  )
}

export default Hero
