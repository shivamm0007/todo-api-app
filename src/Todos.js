import React , {useEffect , useState} from 'react'
import axios from 'axios'
import {CircularProgress} from '@material-ui/core'
import TodoCard from './TodoCard';

const Todos = () => {
    const [todos, setTodos] = useState();
useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => 
   {
        const reponceTodoData = res.data
        setTodos(reponceTodoData)
   })
}, []);
console.log(todos)
 return (
     <>
     {todos ? (
         <div style = {{display : 'flex' , flexWrap : 'wrap'}}>
             {todos.slice(0,50).map((todo)=> (<TodoCard todo = {todo}/>))}
         </div>
     ) : <CircularProgress/>}
     </>
 )   
}
export default Todos