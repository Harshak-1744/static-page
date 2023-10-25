import React from 'react';
import logo from './logo192.png'; 


function Header(){
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="React Logo" width="92" height="92" />
      <h1 style={{ marginLeft: "20px" }}>Fun facts about React</h1>
    </div>
  )
}
function MainContent(){
  return (
    <ul style={{ textAlign: "left" }}>
      <li>Was first released in 2013</li>
      <li>Was originally created by JORDAN WALKE</li>
      <li>Has well over 100k stars on Github</li>
      <li>is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  )
}


const data = (
  <div>
      <Header />
      <MainContent />
  </div>
);


export default data;
