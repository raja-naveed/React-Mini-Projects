import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import { useState } from "react";

function App() {
  const [item, setItem] = useState([]);

  const adddNote = (note) => {
    // error occuring here
    // alert("Hello")
    setItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };
  return (
    <>
      <Header />
      <CreateNote passNote={adddNote} />
      {item.map((val, index) => {
        return <Note 
                  id={index}
                  key={index}
                  title={val.title}
                  content={val.content} />;
      })}
      <Note />
      <Footer />
    </>
  );
}

export default App;
