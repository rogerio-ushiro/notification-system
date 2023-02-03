import './App.css';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

export default function App() {

  let [onlineNumber, setOnlineNumber] = useState(0);
  let [users, setUsers] = useState([
    { name: "Angular Dev" }
  ]);

  useEffect(() => {
    document.title = `We have ${onlineNumber} users online`;
  }, []);

  function Items() {
    return (<ol>
      {users.map((user, index) => <li key={user.name + index}>{`${user.name} `}</li>)}
    </ol>)
  }


  function addItem(index) {
    const newUsers = users.map(user => { return user })
    newUsers.push({ name: "Z" })
    setUsers(newUsers)
  }


  return (
    <div>
      <Items />
      <button onClick={() => { addItem() }}>add button</button>
    </div>
  );

}