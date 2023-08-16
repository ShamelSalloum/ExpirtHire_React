import { Divider, Flex, Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import FormLayout from "../../Layouts/FormLayout";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../../Logic/slices/api_slice/api";
import { useParams } from "react-router-dom";
import { ReportQuestionCells } from "../../Components/_Shared";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlineNumber, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

export default function RequestReport() {
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(getRequest(id));
  const request = useSelector(state => state.api.request);
  console.log("Hello I'm Here Shamel", request);
  return (
    <FormLayout imgUrl={"/img/meeting3.jpg"} >
      {
        request._id === id && <Flex direction="column" gap={3} className="print">
          {request && request.type && (
            <Heading fontWeight={"semibold"}>
              {request.type}
            </Heading>
          )}
          {request && request.requestNumber && (
            <List color="black" spacing={3} h="full">
              <ListItem>
                <ListIcon as={AiOutlineNumber} /> {request.requestNumber}
              </ListItem>
            </List>
          )}
          {
            request && request.first_name && request.last_name &&
            <List>
              <ListItem>
                <ListIcon as={AiOutlineUser} />  {request.first_name} {request.last_name}
              </ListItem>
            </List>
          }
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

        </Flex>
      }

    </FormLayout>
  )
}
