import axios  from "axios";

function fetchData() {
axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
{ 
    let data = res.data;
    console.log(res.data);
    }).catch((error) => {
        console.error(error.response.data);
        console.error("I am Handling Errors")

    })
    

}
fetchData();