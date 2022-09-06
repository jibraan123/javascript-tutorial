import axios from "axios";
function fetchAPI()
    {
        let keys ={
            auth: {
                username: "aliqasim54321",
                password: "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"
            }


        }
        axios.get("https://api.github.com/users", keys)
        // username: "aliqasim54321"
        // password: "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"
    .then((res)=>{
        // console.log(res.data);
//         let data = res.data;
//         let image_array = data.map((asd) =>
// {
//     return asd.avatar_url
// }        
//         )       
//         console.log(images_array)  
        let data = res.data;
        let username = data.map((ele) => ele.login)
        console.log(username);
        username.forEach(element => {
            axios.get(`https://api.github.com/users/${element}`,keys)
            .then((res)=> {
                let data =res.data;
                console.log({
                    username: data.login,
                    fullname: data.name,
                    followers: data.followers,
                    following: data.following,
                    profile_pic: data.avatar_url
                })
            }
            )
            .catch((err) => {
                console.error(err);
            }) 
        });


})
    .catch((err)=>{
        console.log("err.response.status");
        console.log("err.response.data");
    }
    )  }  


fetchAPI();
