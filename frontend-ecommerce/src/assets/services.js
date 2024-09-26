import axios from "axios";

export const getProducts = async (callback) => {
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        callback(res.data)
        // console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

// const getProducts = async () => {
//    let data = await fetch("http://localhost:8000/api/products");
//    data = await data.json();
// //    console.log(data)
// }

export default getProducts