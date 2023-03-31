import React from 'react'

const TodoList = (props) => {
  return (
    <div className='SingleItem'>
        
      <li><button onClick={() => props.onselect(props.id)}>Delete</button>{props.todo}</li>
    </div>
  )
}

export default TodoList;
