import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

export default function ListTodosComponent() {

    // const today = new Date();

    const authContext = useAuth()

    

    const username = authContext.username

    const navigate = useNavigate()

    useEffect (() => refreshTodos(), [])

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

  
    function refreshTodos() {

        retrieveAllTodosForUsernameApi(username)
        .then(response =>{
            
            setTodos(response.data)
        }
        )
        .catch(error => console.log(error))

    }

    function updateTodo(id){

        console.log("updateTodo " + id);
        navigate(`/todo/${id}`);
        

    }

    function addNewTodo(){
        navigate(`/todo/-1`);
    }


    function deleteTodo(id){
        console.log("deleteTodoCalled " + id);

        deleteTodoApi(username, id)
        .then(
            () => {
            
                setMessage(`Delete of todo with id = ${id} is successfull`);
                refreshTodos();
            
        }
        )
        .catch(error => console.log(error))
    }
    
    return (
        <div className="conainer">
           <h1>Things you want to do</h1> 
           {message && <div className="alert alert-warning">{message}</div>}
           <div>
               <table className='table'>
                   <thead>
                       <tr>
                           {/* <td>Id</td> */}
                           <th>Description</th>
                           <th>Is Done?</th>
                           <th>Target Date</th>
                           <th>Delete</th>
                           <th>Update</th>
                       </tr>
                   </thead>
                   <tbody>
                      {
                          todos.map(
                              todo => (
                                  <tr key = {todo.id}>
                                      {/* <td>{todo.id}</td> */}
                                      <td>{todo.description}</td>
                                      <td>{todo.done.toString()}</td>
                                      {/* <td>{todo.targetDate.toDateString()}</td> */}
                                      <td>{todo.targetDate.toString()}</td>
                                      <td><button className="btn btn-warning"
                                         onClick={() => deleteTodo(todo.id)}>Delete</button>
                                      </td>
                                      <td><button className="btn btn-success"
                                         onClick={() => updateTodo(todo.id)}>Update</button>
                                      </td>

                                  </tr>
                              )
                          )
                      }
                   </tbody>
               </table>
           </div>
           <div className="btn btn-danger m-3" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}