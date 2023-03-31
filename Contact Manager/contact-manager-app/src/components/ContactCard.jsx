import React from 'react'

const ContactCard = (props) => {
  return (
    <div>
      <div className="ui segment">
          <div className="ui relaxed divided list">
            <div className="item">
              <div className="content">
                <div className="header">{props.contact.name}</div>
                <div className="description">{props.contact.email}</div>
              </div>
              <button className="ui red button right floated">
                <i className="trash alternate outline icon"></i>Delete
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactCard
