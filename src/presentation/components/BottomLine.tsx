import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';
import { todosStore } from '../stores/TodosStore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { BottomMenuButtons } from '../../enums/BottomMenuButtons';

const BottomLine = () => {
    const {
        itemsLeft,
        bottomNavValue,
        changeNavPage,
        clearCompleted,
        changeShowedItems
    } = todosStore;
    
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
                    changeShowedItems(newValue);
                    changeNavPage(newValue);
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

export default observer(BottomLine);
