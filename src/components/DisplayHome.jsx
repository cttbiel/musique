import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItems from './AlbumItems'

const DisplayHome = () => {
  return (
    <>
    <Navbar />
    <div className='mb-4'>
        {albumsData.map((item,index)=>(<AlbumItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/> ))}
    </div>
    </>
  )
}

export default DisplayHome