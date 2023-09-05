import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { todosStore } from '../stores/TodosStore';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react-lite';

const AddTodo = () => {
    const {
        addTodo,
        inputTodoChange,
        inputTodoValue
    } = todosStore;
  return (
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
  )
}

export default observer(AddTodo);