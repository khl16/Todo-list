import React , {useState} from 'react'; 
import './App.css';

function Todo ({todo, onCheckBoxChange, onDelete}){
  if (todo.isDone){
    return(
        <>
            {todo.isDone ? <s>{todo.name}</s> : todo.name} <input type="checkbox" onChange={onCheckBoxChange} checked={todo.isDone}/>
            <button onClick={onDelete}>Delete</button>
        </>
    )
  }
  else{
    return(
      <>
          {todo.isDone ? <s>{todo.name}</s> : todo.name} <input type="checkbox" onChange={onCheckBoxChange} checked={todo.isDone}/>
          <button onClick={onDelete}>Delete</button>
      </>
    )
  }
}

function App() {
  const[list, setList] = useState([])
  const[text, settext] = useState('')
  
function addToList(){
    const newTodo = {
    name:text,
    isDone:false
  }

  setList([...list, newTodo])
  settext('')
}
  const handlDelete = (todo) => {
    setList(list.filter(t =>t.name != todo.name))
  }

  const handleCheckBoxChange = (todo)=> {
    setList(list.map(t => t.name == todo.name ? { ...t, isDone: !todo.isDone} : t))
  }



  return (
    <div className="App">
      <div>
        <input value = {text} onChange={(e)=> settext(e.target.value)}/><br />
        <button onClick={addToList} style={{border:"none",background:"black",borderRadius:"50px",padding:"10px 25px",margin:"3px",color:"white"}}>add</button>
      </div>
      <div>
          <ul>
              {list.map((todo,i) => {
               return ( <li key={i}><Todo todo={todo} onCheckBoxChange={ () => handleCheckBoxChange(todo)} onDelete={()=>handlDelete(todo)} /> </li> )
             }
             )
             }
         </ul>
      </div>
    </div>
  );
}

export default App;
