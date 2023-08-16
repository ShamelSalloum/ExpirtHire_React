/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, SimpleGrid, Text, useMediaQuery } from "@chakra-ui/react";
import Sidebar from "../../Components/Sidebar";
import NavBar from "../../Components/Navbar";
import { myGray } from "../../colors";
import RequestCard from "./Component";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequests } from "../../Logic/slices/api_slice/apiActions";
import { useEffect } from "react";

export default function Profile() {
  const dispatch = useDispatch();
  const requests = useSelector(state => state.api.requests);
  const { first_name, last_name, email, sex, phone, username, token } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchRequests(token));
  }, [token]);

  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Box bgColor={myGray} minH="100vh">
      <NavBar />
      <Flex direction={isMobile ? "column" : "row"} p="20px">

        <Sidebar first_name={first_name} last_name={last_name} phone={phone} email={email} username={username} sex={sex} />

        <Box flex={1} p="20px">
          {requests ? (
            requests.length > 0 ? (
              <SimpleGrid columns={isMobile ? 1 : 4} spacing="10px" minChildWidth="300px">
                {requests.map((request, index) => (
                  <RequestCard
                    key={index}
                    isLoading={false}
                    isAdmin={false}
                    status={request.status}
                    type={request.type}
                    request_id={request._id}
                    request_number={request.requestNumber}
                  />
                ))}
              </SimpleGrid>
            ) : (
              <Text color="white" textAlign="center">
                Create Your Own Request
              </Text>
            )
          ) : (
            <SimpleGrid columns={isMobile ? 1 : 4} spacing="10px" minChildWidth="300px">
              <RequestCard isLoading={true} />
              <RequestCard isLoading={true} />
              <RequestCard isLoading={true} />
            </SimpleGrid>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
