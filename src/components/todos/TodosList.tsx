import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { switchComplete } from '../../store/reducers/TodosSlice';

const TodosList = () => {
    const todos = useAppSelector(state => state.todos.todos)
    const dispatch = useAppDispatch();

    return (
        <List sx={{width: '100%', borderTop: '1px dotted'}}>
            {todos.map(todo => todo.show &&
                <ListItem sx={{borderBottom: '1px solid'}} key={todo.id} disablePadding>
                    <ListItemButton
                        onClick={()=> dispatch(switchComplete(todo.name))}
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

export default TodosList;