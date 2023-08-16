/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import RequestCard from "../Profile/Component";
import { setBanedUser, setUser } from "../../Logic/slices/api_slice/api";
import { banUser, fetchRequests, setAsAdmin } from "../../Logic/slices/api_slice/apiActions";
import { BsGenderAmbiguous } from "react-icons/bs";

export default function UserInformation({ isFromBaned }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.api.user);
  const requests = useSelector(state => state.api.requests);

  const navigate = useNavigate();

  !isFromBaned ? dispatch(setUser(id)) : dispatch(setBanedUser(id));

  useEffect(() => {
    dispatch(fetchRequests(token, id));
  }, []);



  const handleBanClick = async () => {
    await dispatch(banUser(user._id, token)).then(() => {
      navigate(-1, { replace: true })
    });
  };

  const handleSetAsAdminClick = async () => {
    await dispatch(setAsAdmin(user._id, token)).then(() => {
      navigate(-1, { replace: true })
    });
  };

  return (
    <Box p={"20px"} minH="100vh" >
      <Flex direction="column" gap={5}>
        {
          user ?
            <>
              <List color="black" spacing={3} h="full">
                <ListItem>
                  <Text fontSize={"25px"} fontWeight={"semibold"}>
                    {user.first_name} {user.last_name}
                  </Text>
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineUser} /> {user.username}
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlineMail} />
                  {user.email}
                </ListItem>
                <ListItem>
                  <ListIcon as={AiOutlinePhone} />
                  {user.phone}
                </ListItem>
                <ListItem>
                  <ListIcon as={BsGenderAmbiguous} />
                  {user.sex}
                </ListItem>
              </List>
              <Divider border={"1px"} color={"black"} />
              <Text fontSize={"25px"} fontWeight={"semibold"}>
                Requests
              </Text>
              <SimpleGrid column={4} minChildWidth="300px" gap={4}>
                {requests ? (
                  requests.length > 0 ? (
                    requests.map((request, index) => (
                      <RequestCard
                        key={index}
                        isAdmin={true}
                        request_id={request._id}
                        request_number={request.requestNumber}
                        status={request.status}
                        isLoading={false}
                        type={request.type}
                      />
                    ))
                  ) : (
                    <Center>This User Doesn't have any requests</Center>
                  )
                ) : (
                  <SimpleGrid column={4} minChildWidth="300px" gap={4}>
                    <RequestCard isLoading={true} /> <RequestCard isLoading={true} /> <RequestCard isLoading={true} />
                  </SimpleGrid>
                )}
              </SimpleGrid>

              <Divider border={"1px"} color={"black"} />
              {
                user.ban === false ? <form>
                  <Flex gap={2} width="100%">
                    {
                      user.role !== "admin" && <Button
                        borderRadius="8px"
                        bgColor={'black'}
                        color="white"
                        w={"full"}
                        onClick={handleSetAsAdminClick}
                      >
                        Set As Admin
                      </Button>
                    }
                    <Button
                      borderRadius="8px"
                      bgColor={'red.500'}
                      w={"full"}
                      onClick={handleBanClick}
                    >
                      Ban
                    </Button>
                  </Flex>
                </form> :
                  <Flex gap={2} width="100%">
                    <Button
                      borderRadius="8px"
                      bgColor={'red.500'}
                      w={"full"}
                      onClick={handleBanClick}
                    >
                      Remove The Ban
                    </Button>
                  </Flex>
              }
            </> : <Center>
              <Text>Loading User Information ...</Text>
            </Center>
        }
      </Flex>
    </Box>

  );
}
