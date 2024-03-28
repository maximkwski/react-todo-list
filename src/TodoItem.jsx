import Icon from '@mdi/react';
import { mdiDeleteCircle } from '@mdi/js';

export function TodoItem( { completed, id, title, toggleTodo, deleteTodo } ) {
    return (
        <li key={id} className={ completed ? 'completed' : undefined}>
             
            <label>
            
            <input type="checkbox" name="todo-item"  checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)} 
            /> 
            {title}
            </label>
            
            <Icon path={mdiDeleteCircle} size={1} 
             onClick={() => deleteTodo(id)}
             className="btn btn-danger"/>
        </li>
    )
}