import Box from "@mui/material/Box"
import { ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchUsers } from "../../store/reducers/UsersSlice";

export const Users = () => {
    const { status, error, users } = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }   
    }, [status, dispatch])

    let content: ReactNode = null;

    if (status === 'loading') {
        content = <h1>Идет загрузка...</h1>
    } else if (status === 'succeeded') {
        content = users.map(user =>
            <div style={{padding: "10px"}} key={user.id}>{`name: ${user.name}, email: ${user.email}`}</div>
        );
    } else if (status === 'failed') {
        content = <h1>{error}</h1>
    }

    return (
        <Box
            display={'flex'}
            flexDirection={"column"}
        >
            {content}
        </Box>
    )
}
