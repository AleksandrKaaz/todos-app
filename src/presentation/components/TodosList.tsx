import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { observer } from 'mobx-react-lite';
import { todosStore } from '../stores/TodosStore';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListItemIcon from '@mui/material/ListItemIcon';

const TodosList = () => {
    const {
        todoItems,
        switchComplete,
    } = todosStore;
    
    return (
        <List sx={{width: '100%', borderTop: '1px dotted'}}>
            {todoItems.map(todo => todo.show &&
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
