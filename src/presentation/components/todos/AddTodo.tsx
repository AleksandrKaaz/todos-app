import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const AddTodo = () => {
    const { addTodo, inputTodoChange } = useActions();
    const { inputTodoValue } = useTypedSelector(state => state.todo);

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

export default AddTodo;