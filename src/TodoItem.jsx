import Icon from '@mdi/react';
import { mdiDeleteCircle } from '@mdi/js';

export function TodoItem( { completed, id, title, toggleTodo, deleteTodo } ) {
    return (
        <li>
            <label htmlFor="">
            <input type="checkbox" name="" id="" checked={completed}
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