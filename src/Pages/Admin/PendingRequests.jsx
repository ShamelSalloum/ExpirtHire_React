/* eslint-disable react-hooks/exhaustive-deps */
import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Table,
    Tabs,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { myGray } from '../../colors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingRequests } from '../../Logic/slices/api_slice/apiActions';
import { useLayoutEffect } from 'react';
export default function PendingRequests() {
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        dispatch(fetchPendingRequests(token));
    }, []);
    const requests = useSelector(state => state.api.PendingRequests);

    const handleSearch = async (event) => {
    };

    return (
        <Box p="20px" minH="100vh">
            <Flex direction={"column"} gap={8}>
                <form onSubmit={handleSearch}>
                    <Flex gap={5} direction={"column"} >
                        <Heading>Pending Requests</Heading>
                        <Flex gap={2} w="full" justify="center">
                            <Input
                                name={'query'}
                                focusBorderColor={"black"}
                                placeholder={'Enter The username'}
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


                <Tabs isFitted variant='enclosed'>

                    <TabList mb='1em'>
                        <Tab>Web</Tab>
                        <Tab>Logo</Tab>
                        <Tab>Video</Tab>
                        <Tab>Building</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <RequestsTable requests={requests.web} />
                        </TabPanel>
                        <TabPanel>
                            <RequestsTable requests={requests.logo} />
                        </TabPanel>
                        <TabPanel>
                            <RequestsTable requests={requests.video} />
                        </TabPanel>
                        <TabPanel>
                            <RequestsTable requests={requests.building} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Flex>
        </Box>
    );
}

function RequestsTable({ requests }) {
    return (<Table variant="simple">
        <Thead>
            <Tr>
                <Th>Request Type</Th>
                <Th>Customer Name</Th>
                <Th>Customer Email</Th>
                <Th>Customer Phone</Th>
                <Th>Request Status</Th>
                <Th>Operation</Th>
            </Tr>
        </Thead>
        <Tbody>
            {requests && requests.length > 0 ? (
                requests.map((request, index) => (
                    <Tr key={index}>
                        <Td>
                            {request.type}
                        </Td>
                        <Td>
                            {request.first_name} {request.last_name}
                        </Td>
                        <Td>
                            {request.email}
                        </Td>
                        <Td>
                            {request.phone}
                        </Td>
                        <Td>
                            {request.status}
                        </Td>
                        <Td>
                            <Link to={`/admin/requests/${request._id}`}>
                                <Button
                                    borderRadius="8px"
                                    bgColor={'black'}
                                    color="white"
                                >
                                    view Request
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
    </Table>);
}