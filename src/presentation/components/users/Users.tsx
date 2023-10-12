import Box from "@mui/material/Box"
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { useEffect } from "react";

export const Users = () => {
    const { isLoading, error, users } = useTypedSelector(state => state.users);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, [])

    if (isLoading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <Box
            display={'flex'}
            flexDirection={"column"}
        >
            {users.map(user =>
                <div style={{padding: "10px"}} key={user.id}>{`name: ${user.name}, email: ${user.email}`}</div>
            )}
        </Box>
    )
}
