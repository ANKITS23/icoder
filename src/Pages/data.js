import React  from "react";
import { useEffect } from "react";




export default function Data(props) {

   <div>
    <Fetch1/>
   </div>

}
  const Fetch1 = () => {
  
    const getUsers = async () => {
      const response =  await fetch('https://api.github.com/users');
  
      const  data = await response.json();
      console.log(data);
    
      
  }
      useEffect(() =>{
        getUsers();
      });
    
    return (
      <div className="main-container">
        <div className="wrapper ">
          <div className=" data-container dark:bg-black">

   <h1>Proccess data</h1>
            </div>
            </div>
            </div>
    )
}