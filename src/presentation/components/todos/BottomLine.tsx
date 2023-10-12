import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { BottomMenuButtons } from '../../../enums/BottomMenuButtons';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const BottomLine = () => {
    const { bottomNavigationChange, clearCompleted } = useActions();
    const { bottomNavValue, itemsLeft } = useTypedSelector(state => state.todo);

    return (
        <Box
            width={'100%'}
            sx={{pl: '20px', pb: '10px', pt: '10px'}}
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-around'}
            alignItems={'center'}
        >
            <Typography>{itemsLeft} items left</Typography>
            <BottomNavigation
                showLabels
                value={bottomNavValue}
                onChange={(event, newValue) => {
                    bottomNavigationChange(newValue);
                }}
            >
                <BottomNavigationAction label="All" value={BottomMenuButtons.All} />
                <BottomNavigationAction label="Active" value={BottomMenuButtons.Active} />
                <BottomNavigationAction label="Completed" value={BottomMenuButtons.Completed} />
            </BottomNavigation>
            <Button
                variant="text"
                sx={{textTransform: 'none', color: 'black'}}
                onClick={clearCompleted}
            >
                Clear completed
            </Button>
        </Box>
    )
}

export default BottomLine;
