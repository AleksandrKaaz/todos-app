import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { bottomNavigationChange, clearCompleted } from '../../store/reducers/TodosSlice';
import { BottomMenuButtons } from '../../enums/BottomMenuButtons';

const BottomLine = () => {
    const todos = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch();

    return (
        <Box
            width={'100%'}
            sx={{pl: '20px', pb: '10px', pt: '10px'}}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-around'}
            alignItems={'center'}
        >
            <Typography>{todos.itemsLeft} items left</Typography>
            <BottomNavigation
                showLabels
                value={todos.bottomNavValue}
                onChange={(event, newValue) => {
                    dispatch(bottomNavigationChange(newValue));
                }}
            >
                <BottomNavigationAction label="All" value={BottomMenuButtons.All} />
                <BottomNavigationAction label="Active" value={BottomMenuButtons.Active} />
                <BottomNavigationAction label="Completed" value={BottomMenuButtons.Completed} />
            </BottomNavigation>
            <Button
                variant="text"
                sx={{textTransform: 'none', color: 'black'}}
                onClick={()=>dispatch(clearCompleted())}
            >
                Clear completed
            </Button>
        </Box>
    )
}

export default BottomLine;
