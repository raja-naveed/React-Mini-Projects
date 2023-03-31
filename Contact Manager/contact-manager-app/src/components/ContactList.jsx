import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {



  const ContactListLoop = () => {
    return props.contacts.map((contact) => {
      return (
        <ContactCard contact={contact}/>
      );
    });
  };

  return <div className="ui celled list">{ContactListLoop()}</div>;
};

export default ContactList;
