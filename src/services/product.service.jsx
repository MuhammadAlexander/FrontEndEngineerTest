import axios from "axios";

export const getProducts = async (callback) => {
    try{
        const res = await axios.get('https://fakestoreapi.com/products');
        callback(res.data)
    }catch(err){
        console.error(err)
    }
    
}