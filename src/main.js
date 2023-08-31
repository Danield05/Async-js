const axios = require('axios');

/* //Hacer un get usando axios
const getApiDataWhithAxios = async (url) => {

    return axios.get(url)
        .then((response) => {
         console.log(response.data);
      }).catch((error) => {
            console.log(error);
        })
}

//getApiDataWhithAxios("https://api.api-onepiece.com/fruits")

//Hacer un get usando fetch
const getApiDataWhithFetch = async (url) => {
    return fetch(url)
    .then((response) => {
        return response.json(); 
    }).then((data) => {
        console.log(data);

    }).catch((error) => {
        console.log(error);
    })

}

//getApiDataWhithFetch("https://api.api-onepiece.com/fruits"); */ 

/* const getApiDataWhithAxios = async (url) => {

    try {
        const response= await axios.get(url)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
    
   

};

getApiDataWhithAxios("https://api.api-onepiece.com/fruits"); */


const getApiDataWhithFetch = async (url) => {

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }


};
getApiDataWhithFetch("https://api.api-onepiece.com/fruits");