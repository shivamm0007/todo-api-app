import React from 'react'
import {useHistory} from 'react-router-dom'

const TodoCard = (props) => {
            const {todo} = props
            let history = useHistory()
            const {id , title , completed} = todo
                 return (
                     <div style = {{
                        backgroundColor : 'gray',
                        margin : '10px',
                        padding : '15px',
                        width : '150px'
                    }}
                    onClick = {() => history.push(`/todo/${id}`)}>
                         <h4>{title}</h4>
                         <h6>{`Completed : ${completed}`}</h6>
                    </div>
                 )
      
}
export default TodoCard