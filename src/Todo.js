import React , {useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {CircularProgress} from '@material-ui/core'

const Todo = () => {
    const [todoDetails, setTodoDetails] = useState();
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => 
        {
             const reponceTodoData = res.data
             setTodoDetails(reponceTodoData)
        })
     }, []);
     const {id:todoId , userId , title , completed} = todoDetails || {}
 return (
     <div>
          {todoDetails ? (<div>
              <h1>Todo Id : {todoId}</h1> 
              <h1>Todo UserId : {userId}</h1> 
              <h1>Todo Title : {title}</h1> 
              <h1>Todo Complete Status : {completed}</h1> 
              </div>) : <CircularProgress/>}
         
     </div>
 )   
}
export default Todo