import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const img_base_URL = 'https://image.tmdb.org/t/p/original';
const screenWidth = window.innerWidth;

function Slider() {
    const [movieList, setMovieList]=useState([]);
    const elementRef=useRef();

    useEffect(()=>{
        getTrendingMovies();
    },[]);

    const getTrendingMovies=()=>{
      GlobalApi.getTrendingVideos
      .then(resp=>{
        // console.log(resp.data.results);
        setMovieList(resp.data.results);
      })
    }

   
    const sliderRight=(element)=>{
      element.scrollLeft += screenWidth-110;
    }

    const sliderLeft=(element)=>{
      element.scrollLeft -= screenWidth-110;
    }

  return (
    <div>
    <HiChevronLeft className='hidden md:block text-white text-[30px] absolute 
    mx-8 mt-[150px] cursor-pointer' 
    onClick={()=>sliderLeft(elementRef.current)} />
    <HiChevronRight className='hidden md:block text-white text-[30px] absolute 
    mx-8 mt-[150px] cursor-pointer right-0' 
    onClick={()=>sliderRight(elementRef.current)} />
    
    <div className='flex overflow-x-auto w-full px-15 py-4 
    scrollbar-hide scroll-smooth snap-x snap-mandatory' ref={elementRef}>
      {movieList.map((item)=>(
          <img 
          key={item.id}
          src={img_base_URL+item.backdrop_path}
          alt={item.title} 
          className='flex-shrink-0 snap-center min-w-full md:h-[310px] 
           object-cover mr-5 rounded-md hover:border-[2px]
          border-gray-400 transition-all duration-100 ease-in' />
      ))}
      
    </div>
    </div>
  )
}

export default Slider;











// const getTrendingVideos = async ()=>{
//   try{
//     const resp = await GlobalApi.getTrendingVideos;
//     console.log("API Response:",resp);

//     if(resp?.data?.titles && Array.isArray(resp.data.titles)){
//       const titles = resp.data.titles.slice(0, 15); //limit to 10
      
//       const detailPromises = titles.map((item)=>
//         GlobalApi.getTitleDetailsById(item.id)
//       );

//       const detailResponses = await Promise.all(detailPromises);

//       const withPosters = detailResponses
//       .filter((res)=> res?.data?.poster)
//       .map(res=>({
//         id: res.data.id,
//         title: res.data.title,
//         poster: res.data.poster,
//         year: res.data.year,
//       }))
//       .filter((movie)=>!movie.title.toLowerCase().includes("sex"))
//       .filter((movie)=>!movie.title.toLowerCase().includes("drug"));
//       setMovieList(withPosters);
//     }  else {
//       console.log("No vilid titles data in response", resp);
//     }
//   } catch (err) {
//     console.error("Failed to fetch trending Videos:", err);
//   }
// };










//old getTrendingVideos for omdb


// const getTrendingVideos =()=>{
//   GlobalApi.getTrandingVideos
//   .then((resp)=>{
//       console.log(resp.data.Search); // results -> Search changed due to using different api than tmdb
//       setMovieList(resp.data.Search);
//   })
//   .catch((err)=>{
//     console.error("Failed to fetch trending Videos:", err);
//   });
// };