import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { todosStore } from '../stores/TodosStore';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';

const AddTodo = () => {
    const {
        addTodo,
        inputTodoChange,
        inputTodoValue,
        addTodoError,
    } = todosStore;
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
            <Typography marginLeft={'10px'} color={'red'}>{addTodoError}</Typography>
        </Box>
    </>
  )
}

export default observer(AddTodo);