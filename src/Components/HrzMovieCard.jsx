import React from 'react'
const img_Base_URL = 'https://image.tmdb.org/t/p/original';

function HrzMovieCard({ movie }) {
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>

        <img src={img_Base_URL+movie.backdrop_path}
        className='W-[110px] md:w-[260px] rounded-lg
        hover:border-[2px] border-gray-400 cursor-pointer' />
        <h2 key={movie.id} className='w-[110px] md:w-[260px] text-white'>
            
            {movie.title}
        </h2>

    </section>
  )
}

export default HrzMovieCard
