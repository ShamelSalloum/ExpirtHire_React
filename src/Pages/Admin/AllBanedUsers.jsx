/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Input,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { myGray } from '../../colors';
import { fetchBanedUsers, searchUsers } from '../../Logic/slices/api_slice/apiActions';

export default function AllBanedUsers() {

    const token = useSelector(state => state.auth.token);
    const users = useSelector(state => state.api.banedUsers);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBanedUsers(token));
    }, []);


    const handleSearch = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const formData = Object.fromEntries(data.entries());
        dispatch(searchUsers(token, formData.query, false));
    };

    return (
        <Box p="20px" minH="100vh">
            <Flex direction={"column"} gap={8}>
                <form onSubmit={handleSearch}>
                    <Flex gap={5} direction={"column"} >
                        <Heading>Baned Users</Heading>
                        <Flex gap={2} w="full" justify="center">
                            <Input
                                name={'query'}
                                focusBorderColor={"black"}
                                placeholder={'username / last name / first name / email'}
                                borderRadius="8px"
                                border={"1px"}
                                borderColor={myGray}
                                type={"text"}
                                required={true}
                            />
                            <Button
                                borderRadius="8px"
                                bgColor={'black'}
                                color="white"
                                type="submit"
                            >
                                Search
                            </Button>
                        </Flex>
                    </Flex>
                </form>
                <Divider border={"1px"} color={'black'} />
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Full Name</Th>
                            <Th>Email</Th>
                            <Th>Phone Number</Th>
                            <Th>Ban</Th>
                            <Th>Operation</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users && users.length > 0 ? (
                            users.map((user) => (
                                <Tr key={user._id}>
                                    <Td>
                                        {user.first_name} {user.last_name}
                                    </Td>
                                    <Td>
                                        {user.email}
                                    </Td>
                                    <Td>
                                        {user.phone}
                                    </Td>
                                    <Td>{user.ban.toString()}</Td>
                                    <Td>
                                        <Link to={user._id}>
                                            <Button
                                                borderRadius="8px"
                                                bgColor={'black'}
                                                color="white"
                                            >
                                                View Profile
                                            </Button>
                                        </Link>
                                    </Td>
                                </Tr>
                            ))
                        ) : (
                            <Tr>
                                <Td>
                                    <Text>No users found.</Text>
                                </Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </Flex>
        </Box>
    );
}
