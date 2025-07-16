import React from "react";
import { useState } from "react";

const Mytodo = () => {
  const [todos, setTodos] = useState([]);
  const [TodoTitle, setTitle] = useState("");
  const [TodoDescription, setDescription] = useState("");
function handleAddTodo(){
    if(TodoTitle.trim() && TodoDescription.trim()){
        setTodos(
            [...todos ,{
                    id:Date.now(),
                    title:TodoTitle.trim(),
                    Description:TodoDescription.trim(),
                    done:false
            },]
        )
        setDescription("")
        setTitle("")
        
    }
    else {
        alert("type description and title");
    }

}




  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
      onClick={handleAddTodo}
      >add todo</button>

      <div>
        {todos.length()===0 ? (
            <h1>No todo currently</h1>
        ):(
            todos.map(()=>{

            })
        )}
      </div>
    </div>
  );
};

export default Mytodo;
