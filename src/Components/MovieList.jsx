import React, { useEffect, useState, useRef }from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrzMovieCard from './HrzMovieCard';


function MovieList({genreId, index_}) {
    const [movieList, setMovieList]=useState([])
    const elementRef=useRef(null);

    useEffect(()=>{
        getMovieByGenreId();
    }, [])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId)
        .then(resp=>{
            setMovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft += 500;
    }

    const slideLeft=(element)=>{
        element.scrollLeft -= 500;
    }
    
  return (

    <div className='relative'>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
           className={`text-[50px] text-white
           p-2 z-10 cursor-pointer hidden md:block absolute
           ${index_%3==0?'mt-[80px]':'mt-[150px]'}`} />

        <div ref={elementRef} className='flex overflow-x-auto gap-7 
        scrollbar-hide scroll-smooth pt-4 px-2 pb-4 '>
        {movieList.map((item, index)=>(
            <React.Fragment key={item.id || index}>
            {index_%3==0? <HrzMovieCard movie={item}/> : 
                <MovieCard movie={item} />}
            </React.Fragment>
        ))}
        </div>

        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} 
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0 absolute right-0
           ${index_%3==0?'mt-[80px]':'mt-[150px]'}`} />

    </div>

  );
}

export default MovieList












// useEffect(()=>{
//     GlobalApi.getMovieByGenreId(genreId)
//     .then(async(resp)=>{
//         const basicList = resp.data.titles || [];
        
//         const detailedList = await Promise.all(
//             basicList.map(async(movie)=>{
//                 const res = await GlobalApi.getTitleDetailsById(movie.id);
//                 return {
//                     ...movie,
//                     poster: res?.data?.poster || '',
//                 };
//             })
//         );
//         const validMovies = detailedList.filter((m)=> m.poster);
//         setMovieList(validMovies);
//     });
// })
















// useEffect(()=>{
//     getMovieByGenreId();
// }, [])

// const getMovieByGenreId=()=>{
//     GlobalApi.getMovieByGenreId(genreId)
//     .then(resp=>{
//         // console.log(resp.data.titles)
//         const titles = resp.data.titles.slice(0, 15);
//         setMovieList(titles)
//     })
// }
