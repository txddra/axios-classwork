// Using axios
// Create a function (up to you what you name it)
// Use this as your url 'https://api.publicapis.org/entries'
//  g rst with promises then with async await
// after you get your data, limit the data to the first 20 choices
// if Cors is 'yes' log Description
// if Cors is 'unknown' log Link (edited) 


const axios = require('axios');

const url ='https://api.publicapis.org/entries';

function useAxios(url){
    
axios.get(url)
.then((entries)=> console.log(entries.data))
.catch((err)=>console.log(err))
}
useAxios(url)


// async function useAsyncAxios(){
//     try{
//         const
//     }
// }

// http methods that we can use
// Create = PUT with a new URI
//          POST to a base URI returning a newly created URI
// Read   = GET
// Update = PUT with an existing URI
// Delete = DELETE
