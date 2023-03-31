import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';

function App() {
  const[list, setList]= useState('');
  const [items, setItems] = useState([]);


  const ItemList = (item) => {
    setList(item.target.value);
  }

  const TodoItems = () => {
    setItems((olditems)=>{
      return[...olditems, list]

    })
    setList('')

  }
 const deleteItem = (id) => {
    setItems((olditems)=>{
      return olditems.filter((arrElem, index)=>{
        return index !== id;
      })
    })
  }


  return (
    <div className="App">
      <div className="todolistcontainer">
        <h1>Todo List</h1>
        <input type="text" value={list} onChange={ItemList}/>
        <button onClick={TodoItems}>Add</button>
        {items.map((item, index)=>{
          return <TodoList todo={item}  id={index} key={index} onselect={deleteItem}/>
        })}
      </div>
    </div>
  )
}

export default App;
