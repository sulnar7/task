import axios from "axios"

export let PostLogin=(email,password)=>{
    axios
    .post("http://bookbuzz.cronhex.com/api/v1/account/login", JSON.stringify({ "email":email, "password":password }),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
       " Content-Type"
: 
"application/json",
"Accept"
: 
"*"
    }
    }
    )
    .then(response => {
      console.log(response)
      // Handle response
    })

   
}