import React, {useState} from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CreateNote = (props) => {
  const [expand, setExpand]= useState(false);
  const [note, setNote]=useState({
    title:'',
    content:'',
  });
  const InputEvent = (event)=>{
    // const value = event.target.value;
    // const name = event.target.name;
    const {name , value }= event.target;

    setNote((prevDta)=>{
      return {
        ...prevDta ,
        [name]:value,
      }
    });
    console.log(setNote)
  }
  const addEvent= () => {

    props.passNote(note)
    console.log("Jooo");
  }


  return (
    <div className="p-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-6">Create a new note</h2>
        <div className="flex flex-col" onDoubleClick={()=>{setExpand(false)}}>
          {expand? 
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            id="title"
            placeholder="Title"
            autoComplete="false"
            className="bg-gray-100 p-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
           />
           : null}
          <textarea
            name="content"
            id="note"
            placeholder="Note"
            value={note.content}
            onChange={InputEvent}
            onClick={()=>{setExpand(true)}}
            className="bg-gray-100 p-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          ></textarea>
          {expand?
          <button
            onClick={addEvent}
            className="bg-yellow-500 text-white py-2 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center w-12 h-12"
          >
            <AddCircleOutlineIcon />
          </button>
          : null}
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
