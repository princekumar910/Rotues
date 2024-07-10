import React, { useEffect, useState } from 'react'


function Github() {
    let [api_data , setdata]= useState([]);
    useEffect(()=>{
      fetch('https://api.github.com/users/princekumar910').then(response=>response.json()).then((data)=>{
        setdata(data);
        console.log(data);
})
    } , [])

    
  return (
    <>
    <h1>Name : {api_data.login}</h1>
    <h2>Followers : {api_data.followers}</h2>
    <img src="{api_data.avatar_url}" alt="LOgo" />

    </>
  )
}

export default Github