import React from "react";
import Card from "../../components/card/Card";
import Header from "../../components/navbar/Navbar";
import "./userList.css";

export default function UserList() {
  return (
    <>
      <h1>Users</h1>
      <Header/>
      <div className="card-boundary">
        <Card />
        </div>
    </>
  );
}
