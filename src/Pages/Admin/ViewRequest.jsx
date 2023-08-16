import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    List,
    ListIcon,
    ListItem,
} from "@chakra-ui/react";

import { ReportQuestionCells } from "../../Components/_Shared";

import {
    AiOutlineMail,
    AiOutlineNumber,
    AiOutlinePhone,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    acceptRequest,
    fetchRequest,
    rejectRequest,
} from "../../Logic/slices/api_slice/apiActions";
import { useEffect } from "react";

export default function RequestInformation() {
    const { id } = useParams();
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchRequest(token, id));
    }, [dispatch, id, token]);

    const request = useSelector((state) => state.api.request);

    const handleAcceptRequest = async () => {
        await dispatch(acceptRequest(token, id)).then(() => {
            navigate(-1, { replace: true });
        });
    };
    const handleRejectRequest = async () => {
        await dispatch(rejectRequest(token, id)).then(() => {
            navigate(-1, { replace: true });
        });
    };

    return (
        <Box minH="100vh" bgColor={"white"} p="20px">
            {
                request._id === id && <Flex direction="column" gap={3} className="print">
                    {request && request.first_name && (
                        <Heading fontWeight={"semibold"}>
                            {request.first_name} {request.last_name}
                        </Heading>
                    )}
                    {request && request.requestNumber && (
                        <List color="black" spacing={3} h="full">
                            <ListItem>
                                <ListIcon as={AiOutlineNumber} /> {request.requestNumber}
                            </ListItem>
                        </List>
                    )}
                    {request && request.email && (
                        <List color="black" spacing={3} h="full">
                            <ListItem>
                                <ListIcon as={AiOutlineMail} /> {request.email}
                            </ListItem>
                        </List>
                    )}
                    {request && request.phone && (
                        <List color="black" spacing={3} h="full">
                            <ListItem>
                                <ListIcon as={AiOutlinePhone} /> +{request.phone}
                            </ListItem>
                        </List>
                    )}
                    {request &&
                        request.location &&
                        request.location.country &&
                        request.location.city && (
                            <List color="black" spacing={3} h="full">
                                <ListItem>
                                    <ListIcon as={IoLocationOutline} />{" "}
                                    {request.location.country}/{request.location.city}
                                </ListItem>
                            </List>
                        )}
                    <Divider border={"1px"} color={"black"} />
                    {request &&
                        request.answers &&
                        request.answers.map((answer, index) => {
                            return (
                                <ReportQuestionCells
                                    key={index}
                                    title={answer.title}
                                    data={answer.answer}
                                />
                            );
                        })}
                    {request && request.budget && <ReportQuestionCells
                        key={request.budget}
                        title={"What is your budget for this project ? "}
                        data={`${request.budget} USD`} 
                    />}
                    {request &&
                        (request.status !== "Accepted" && request.status !== "Rejected") && (
                            <>
                                <Divider border={"1px"} color={"black"} />
                                <form>
                                    <Flex gap={2} width="100%">
                                        <Button
                                            borderRadius="8px"
                                            bgColor={"black"}
                                            onClick={handleAcceptRequest}
                                            color="white"
                                            w={"full"}
                                        >
                                            Accept
                                        </Button>
                                        <Button
                                            borderRadius="8px"
                                            bgColor={"red.500"}
                                            w={"full"}
                                            onClick={handleRejectRequest}
                                        >
                                            Reject
                                        </Button>
                                    </Flex>
                                </form>
                            </>
                        )}
                </Flex>
            }
        </Box>
    );
}
