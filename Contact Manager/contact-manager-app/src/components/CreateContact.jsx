import React, { useState } from "react";

const CreateContact = (props) => {
  const [item, setItem] = useState({
    name: "",
    email: "",
  });

  const EventChange = (event) => {
    const { name, value } = event.target;

    setItem((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
      
    });
    console.log(setItem)
  };
  const Add=(e)=>{
    e.preventDefault();
    if(item.name ==="" || item.email===""){
        alert("All fields are mandatory to fill")
    }
    props.addContactHandler(item)
  }

  return (
    <div>
      <h2>Create Contact</h2>

      <div className="ui main">
        <h2>Create Contact</h2>
        <form className="ui form" onSubmit={Add}>
          {/* <h2>Create Contact</h2> */}

          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={item.name}
              onChange={EventChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={item.email}
              onChange={EventChange}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
