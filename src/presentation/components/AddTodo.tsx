import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
// import { todosStore } from '../stores/TodosStore';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';
import { Dispatch } from 'redux';
import { TodoAction, TodoActionTypes } from '../../types/todo';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const AddTodo = () => {
    const dispatch: Dispatch<TodoAction> = useDispatch();
    const { inputTodoValue } = useTypedSelector(state => state.todo);

    const inputTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: TodoActionTypes.INPUT_TODO_CHANGE, payload: event.target.value });
    }

    const addTodo = () => {
        dispatch({ type: TodoActionTypes.ADD_TODO });
    }
    
  return (
    <>
        <Box
            width={'100%'}
            display={'flex'}
            alignItems={'center'}
            alignContent={'flex-start'}
        >
            <TextField
                placeholder="type todo name"
                value={inputTodoValue}
                onChange={inputTodoChange}
                sx={{ p: '10px'}}
                size='small'
            />
            <Button
                variant="outlined"
                size='small'
                sx={{height: '30px'}}
                onClick={addTodo}
            >
                Добавить
            </Button>
        </Box>
        <Box
            width={'100%'}
            display={'flex'}
            flexDirection={'row'}
            alignItems={'flex-start'}
            margin={'5px'}
        >
            {/* <Typography marginLeft={'10px'} color={'red'}>{addTodoError}</Typography> */}
        </Box>
    </>
  )
}

export default observer(AddTodo);