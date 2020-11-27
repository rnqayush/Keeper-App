import React from "react"
import TodoNote from "./TodoNote"
import Notes from "./Notes"
import Header from "./Header"
import Footer from "./Footer"
function App(){



const[notes,setNotes]=React.useState([])
    function addon(note){
        setNotes(e=>{
            return([...e,note])
        })
    }



    return (
    <div>
            <div>
            <Header />
            </div>
            <div className="body">
            <TodoNote add={addon}/>
                <div className="NotesDiv">
                <Notes title="Title" content="Content" />
                {notes.map(noteItem=>{return(<Notes title={noteItem.title}
                content={noteItem.content}
                 />)})}
                 
                </div>
            </div>
            
         
    </div>
    )
    
    
}
export default App