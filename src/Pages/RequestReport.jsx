import React from "react";
import FormLayout from "./Layouts/FormLayout";
import { Button, Flex, Spacer } from "@chakra-ui/react";
import { myGray  } from "../colors";
import { ReportCell, ReportQuestionCells } from "../Components/_Shared";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../Logic/slices/api_slice/api";

export default function RequestReport() {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(getRequest(id));
  const request = useSelector(state => state.api.request);

  const onPrint = () => {
    window.print();
  };
  
  return (
    <FormLayout imgUrl={"/img/meeting2.jpg"}>
      <Flex direction="column" gap={3} className="print">
        <ReportCell title={"N.of Request"} data={request.requestNumber} />
        <ReportCell title={"Request Type"} data={request.type} />
        <ReportCell title={"Full Name"} data={`${request.first_name} ${request.last_name}`} />
        <ReportCell title={"Email"} data={request.email} />
        <ReportCell title={"Phone"} data={request.phone} />
        <ReportCell title={"Location"} data={`${request.location.country}/${request.location.city}`} />
        <ReportCell title={"Status"} data={request.status} />
        <Spacer />
        {
          request.answers.map((answer, index) => {
            return (
              <ReportQuestionCells
                key={index}
                title={answer.title}
                data={
                  answer.answer
                }
              />
            );
          })
        }
      </Flex>
      <Button
        mt={"10px"}
        onClick={onPrint}
        bgColor={myGray}
        color={"white"}
        alignSelf={"flex-start"}
      >
        Convert to (PDF)
      </Button>
    </FormLayout>
  );
}


