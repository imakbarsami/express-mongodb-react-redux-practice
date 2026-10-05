import {} from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/action/todoAction'
import { useEffect } from 'react'

const Todo = () => {

    const todos=useSelector(state=>state.todo)
    const isLoading=useSelector(state=>state.isLoading)
    const error=useSelector(state=>state.error)
    // console.log(todo);
    

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllTodos())
    },[])
    
    return (
        <div>
            {isLoading && <h3 className="loading">Loading...</h3>}

            {error && <h3 className="error">{error}</h3>}

            <div className="todo-container">
                {todos && todos.map((item) => {
                    return (
                        <div className="todo-card" key={item.id}>
                            <div className="todo-header">
                                <span className="todo-id">#{item.id}</span>

                                <span className={`status ${item.completed ? "completed" : "pending"}`}>
                                    {item.completed ? "Completed" : "Pending"}
                                </span>
                            </div>

                            <h3>{item.title}</h3>

                            <div className="todo-info">
                                <p>
                                    <strong>User ID:</strong> {item.userId}
                                </p>

                                <p>
                                    <strong>Todo ID:</strong> {item.id}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Todo