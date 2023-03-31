import React, {useState}from "react";
import "./App.css";
import Header from "./Header";
import CreateContact from './CreateContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts]= useState([]);


const addContactHandler =(contact)=>{
  setContacts([...contacts, contact])
}

  
  return (
    <div className="ui container">
      <Header/>
      <CreateContact addContactHandler={addContactHandler}/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;
