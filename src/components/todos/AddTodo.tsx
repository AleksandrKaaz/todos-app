import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addTodo, inputTodoChange } from '../../store/reducers/TodosSlice';


const AddTodo = () => {
    const todos = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch();

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
                value={todos.inputTodoValue}
                onChange={(event) => {
                    dispatch(inputTodoChange(event.target.value));
                }}
                sx={{ p: '10px'}}
                size='small'
            />
            <Button
                variant="outlined"
                size='small'
                sx={{height: '30px'}}
                onClick={()=>dispatch(addTodo())}
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

export default AddTodo;