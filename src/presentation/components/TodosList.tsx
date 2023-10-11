import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { observer } from 'mobx-react-lite';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { TodoAction, TodoActionTypes } from '../../types/todo';
import { Dispatch } from 'redux';

const TodosList = () => {
    const dispatch: Dispatch<TodoAction> = useDispatch();
    const { todos } = useTypedSelector(state => state.todo);

    const switchComplete = (name: string) => {
        dispatch({ type: TodoActionTypes.SWITCH_COMPLETE, payload: name });
    }

    return (
        <List sx={{width: '100%', borderTop: '1px dotted'}}>
            {todos.map(todo => todo.show &&
                <ListItem sx={{borderBottom: '1px solid'}} key={todo.name} disablePadding>
                    <ListItemButton
                        onClick={()=> switchComplete(todo.name)}
                    >
                        <ListItemIcon>
                            {
                                todo.isCompleted
                                ? <CheckCircleIcon sx={{color: 'green'}} />
                                : <RadioButtonUncheckedIcon />
                            }
                        </ListItemIcon>
                        <ListItemText sx={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}} primary={todo.name} />
                    </ListItemButton>
                </ListItem>
            )}
        </List>
    )
}

export default observer(TodosList);
