import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col">
      <h2 className="text-base font-bold mb-2">{props.title}</h2>
      <p className="text-gray-700 text-sm flex-1">{props.content}</p>
      <button className="bg-red-500 text-white p-1 rounded-full shadow-md hover:shadow-lg flex items-center justify-center w-6 h-6">
        <DeleteOutlineIcon fontSize="small" />
      </button>
    </div>
  );
};

export default Note;
