import axios from "axios";

const API_KEY = '09b3f8ee3b08b8a56ec5056701027925';
// url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+API_KEY);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseUrl+'&with_genres='+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
};















// const movieBaseUrl = "https://api.watchmode.com/v1/";
// const API_KEY = 'FjpC7SvsKOzFVM6xBgIg1oxYZxK7Trz0owrxqMPk';
// // const URL = movieBaseUrl+'list-titles/?apiKey='+API_KEY+'&type=movie'

// const getTrendingVideos = axios.get(
//     `${movieBaseUrl}list-titles/?apiKey=${API_KEY}&type=movie&min_imdb_rating=7.5&limit=20`
// );

// const searchTitleByName = (name)=>
//     axios.get(`${movieBaseUrl}search/?apikey=${API_KEY}&search_field=name&search_value=${name}&limit=20`);

// const getTitleDetailsById = (id) => 
//     axios.get(`${movieBaseUrl}title/${id}/details/?apiKey=${API_KEY}&limit=20`);

// const getMovieByGenreId = (id) => 
//     axios.get(`${movieBaseUrl}list-titles/?apiKey=${API_KEY}&type=movie&genres=${id}&min_imdb_rating=7.5&limit=20`);


// export default{
//     getTrendingVideos,
//     searchTitleByName,
//     getTitleDetailsById,
//     getMovieByGenreId
// };









// // const movieBaseUrl = "https://www.omdbapi.com/?";
// // const API_KEY = '7be65532';

// //http://www.omdbapi.com/?apikey=[yourkey]&
// // https://www.omdbapi.com/?i=tt3896198&apikey=7be65532&s=iron
// // const getTrandingVideos = axios.get(movieBaseUrl+"batman/?apikey="+API_KEY)





// //watchmode api
// // apikey = WwLL2XLvq6lAC2DIbsXdEJ27hicd9wZffDAZsh1g
// //https://api.watchmode.com/v1/list/popular/?apiKey=YOUR_API_KEY


// // const getTrandingVideos = async ()=> {
// //     try{
// //         const response = await axios.get('http://www.omdbapi.com/',{
// //         params:{
// //             apikey: API_KEY,
// //             s: 'marvel',
// //             type: 'movie',
// //     },
// // });
// //     return response.data.Search || [];
// //     } catch(error){
// //         console.error('API Error', error);
// //         throw error;
// //     }
// // };

















// // get top movies with good rating and popular

// // const getTrendingVideos = axios.get(
// //     `${movieBaseUrl}list-titles/?apiKey=${API_KEY}&type=movie&min_imdb_rating=7.5&release_date_gte=2010-01-01&genres=all&sort_by=popularity_desc&limit=20&page=1`
// //   );
  
