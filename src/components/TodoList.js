import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({todos , setTodos , setEditTodo}) => {

    const handleDelete = ({id}) => 
    {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleComplete = (todo) =>
    {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item , completed: !item.completed};
                }
                return item
            })
        )
    }

    const handleEdit =({id}) =>{
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };
    return (
        <div>
           {todos.map((todo) => (
               <li className="list-item"  key={todo.id}>
                   <input type="text"
                     value={todo.title}
                     className={`list ${todo.completed ? "complete" : "" }`}
                     onChange={(event)=> event.preventDefault()}
                   />
                   <div>
                       <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                          <i><DoneIcon/></i>
                       </button>
                       <button className="button-edit task-button" onClick={()=> handleEdit(todo)}>
                          <i><EditIcon/></i>
                       </button>
                       <button className="button-delete task-button"  onClick={()=> handleDelete(todo)}>
                          <i><DeleteIcon/></i>
                       </button>
                   </div>
               </li>
           ))}
        </div>
    );
}

export default TodoList;
