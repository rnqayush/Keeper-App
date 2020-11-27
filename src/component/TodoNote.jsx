import React from "react"
function TodoNote(props)
{
    const[name,setName]=React.useState({
        title:"",
        content:""
    })

    function addNote(event){
        const{name,value}=event.target
        setName(e=>{
            return{...e,
            [name]:value}
        })

    }
    function submitNote(event){
        props.add(name)
        setName({
            title: "",
            content: ""
          });
    }


    return(<div className="toDo">
        <h1>Write Note Here</h1>
        <input class="form" name="title"  value={name.title} onChange={addNote} placeholder="enter title"  />
        <br />
        <textarea class="form" name="content" value={name.content} onChange={addNote} placeholder="enter content.."  />
        <button
        onClick={submitNote} 
        type="submit">Add</button>    
    </div>)
}
export default TodoNote