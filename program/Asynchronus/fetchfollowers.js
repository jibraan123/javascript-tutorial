import axios from "axios";

function fetchAPI(){
    let keys = {
        auth: {
            username: "aliqasim54321",
            password: "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"
        }
    }
    axios.get("https://api.github.com/users", keys)




}