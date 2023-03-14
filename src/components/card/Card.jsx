import React from "react";
import { useEffect, useState } from "react";
import "./card.css";

export default function Card() {
  const [array, setArray] = useState([]);
  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => res.json())
      .then((json) => {
        console.log("printing the json", json);
        setArray(json);
      });
  }, []);
  // const CreateContent = () => {
    
  // };
  return (
    <div className="card-style">
      {array.map((temp) => {
      return (
        <div className="list-items">
          <img
          className="profile-pic"
          src="https://www.filmibeat.com/img/popcorn/profile_photos/shahrukh-khan-20190625140849-86.jpg"
          alt=""
        /> 
          <div className="details">
            <h2 className="profile-name">{temp.name}</h2>
            <h5 className="email">{temp.email}</h5>
            <p className="gender">{temp.gender.toUpperCase()}</p>
            <div className="desc">Mountain</div> 
          </div>
        </div>
      )
    })}
    </div>
  );
}
