import { Box, List, ListIcon, ListItem, } from "@chakra-ui/react";
import { myGray } from "../colors";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineDashboard, AiOutlineLogout, AiOutlineQuestionCircle, AiOutlineUser, } from "react-icons/ai";
import { FiFolder } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { user_logout } from "../Logic/slices/auth_slice/auth_actions";
export default function AdminSideBar() {
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = async () => {
        await dispatch(user_logout(token)).then(() => {
            navigate("/login", { replace: true });
        });
    }
    return (
        <List color="white" spacing={3} bgColor={myGray} minH="full" p="20px">
            <Link to={'/admin'}>
                <ListItem fontSize={"24px"}>
                    <ListIcon as={AiOutlineDashboard} /> Dashboard
                </ListItem>
            </Link>
            <Box px="30px">
                <ListItem fontSize={"24px"}>
                    <ListIcon as={AiOutlineUser} /> Users
                    <List color="white" spacing={3} bgColor={myGray} p="10px" px="30px" fontSize={"18px"}>
                        <Link to={'/admin'}>
                            <ListItem>
                                <ListIcon as={AiOutlineCheckCircle} /> All
                            </ListItem>
                        </Link>
                        <Link to={"banedUsers"}>
                            <ListItem>
                                <ListIcon as={AiOutlineCloseCircle} /> Banned
                            </ListItem>
                        </Link>
                    </List>
                </ListItem>
                <ListItem fontSize={"24px"} color={'white'}>
                    <ListIcon as={FiFolder} /> Requests
                    <List color="white" spacing={3} bgColor={myGray} p="10px" px="30px" fontSize={"18px"}>
                        <Link to={'pending'}>
                            <ListItem>
                                <ListIcon as={AiOutlineQuestionCircle} /> Pending
                            </ListItem>
                        </Link>

                        <Link to="accepted">
                            <ListItem>
                                <ListIcon as={AiOutlineCheckCircle} /> Accepted
                            </ListItem>
                        </Link>
                        <Link to="rejected">

                            <ListItem >
                                <ListIcon as={AiOutlineCloseCircle} /> Rejected
                            </ListItem>
                        </Link>
                    </List>
                </ListItem>

            </Box>
            <ListItem fontSize={"24px"} onClick={handleLogout}>
                <ListIcon as={AiOutlineLogout} /> Logout
            </ListItem>
        </List>
    );
}
