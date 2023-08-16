import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { myGray } from "../colors";
import {
  CountryCityDropdown,
  FormCell,
  PhoneNumberCell,
} from "../Pages/Forms/Components";
import FormLayout from "./FormLayout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function RequestLayout({
  imgUrl,
  children,
  onSubmit,
  form_name,
}) {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <FormLayout imgUrl={imgUrl}>
      <form onSubmit={onSubmit}>
        <Flex direction={"column"} gap={5}>
          <Heading>{form_name}</Heading>
          <Flex gap={5}>
            <FormCell
              title={"First Name"}
              input_name={"first_name"}
              isRequired={true}
              placeholder={"Your First Name"}
              type={"text"}
            />
            <FormCell
              title={"Last Name"}
              input_name={"last_name"}
              isRequired={true}
              placeholder={"Your Last Name"}
              type={"text"}
            />
          </Flex>
          <FormCell
            title={"Email"}
            input_name={"email"}
            isRequired={true}
            placeholder={"Your Work Email"}
            type={"email"}
          />
          <PhoneNumberCell />
          <Text fontSize={16}>Your Location</Text>
          <CountryCityDropdown />
          {children}
          <FormCell
            title={"What is your budget for this project"}
            input_name={'budget'}
            isRequired={true}
            type={'number'}
            placeholder={'in (USD)'} />
          {isAuth ?
            <Button
              type="submit"
              borderRadius={"12px"}
              bgColor={myGray}
              color={"white"}
              alignSelf={"flex-start"}
            >
              Submit
            </Button>
            :
            <Link to="/login">
              <Button
                type="submit"
                borderRadius={"12px"}
                bgColor={myGray}
                color={"white"}
                alignSelf={"flex-start"}
              >
                login First
              </Button>
            </Link>
          }
        </Flex>
      </form>
    </FormLayout>
  );
}
