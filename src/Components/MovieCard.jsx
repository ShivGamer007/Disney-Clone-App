import React  from 'react'

const img_Base_URL="https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {

  return (
    <>
      <img 
      src={img_Base_URL+movie.poster_path}
      alt={movie.title}
      className='w-[110px] md:w-[200px] rounded-lg 
      hover:border-[2px] border-gray-400 cursor-pointer 
      hover:scale-110 transition-all duration-150 ease-in '/>
    </>
  );
}

export default MovieCard









// //  useState 
//     const [poster, setPoster] = useState("");
//     useEffect(()=>{
//         const fetchPoster = async () => {
//             try{
//                 const res = await GlobalApi.getTitleDetailsById(movie.id);
//                 if (res?.data?.poster){
//                     setPoster(res.data.poster);
//                 }
//             } catch(err) {
//                 console.error("Failed to fetch poster of", movie.id, err)
//             }
//         };
//         fetchPoster();
//     }, [movie.id]);









//   const imgRef = useRef();
//   useEffect(()=>{
//     GlobalApi.getTitleDetailsById(movie.id)
//     .then((res)=>{
//         if(res?.data?.poster && imgRef.current){
//             imgRef.current.src=res.data.poster;
//         }
//     });
//   }, [movie.id]);