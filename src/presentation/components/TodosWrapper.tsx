import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import AddTodo from './AddTodo';
import TodosList from './TodosList';
import BottomLine from './BottomLine';

const Todos = () => {
  return (
    <Box
        width={'800px'}
        display='flex'
        flexDirection={'column'}
        alignItems={'center'}
        sx={{ bgcolor: 'ivory', outline: 'solid 1px black' }}
    >
        <Typography variant='h2'>Todos</Typography>
        <AddTodo />
        <TodosList />
        <BottomLine />
    </Box>
  )
}

export default observer(Todos);
