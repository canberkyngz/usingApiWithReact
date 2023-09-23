import axios from 'axios';

const searchImages=async (term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID v7o7jKtTv2EyO3h9E_oFkdNHdF5YGlKiftbhllfU-Fk'
        },
        params:{
            query:term
        },
    });
 

    return response.data.results;
}

export default searchImages;