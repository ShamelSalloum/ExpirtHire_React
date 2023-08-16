import { Button, Flex, Input, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { myGray, white } from "../colors";
import { AiOutlineMail, AiOutlinePhone, AiOutlineSetting, AiOutlineUser, } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInformation } from "../Logic/slices/api_slice/apiActions";

export default function Sidebar({
  first_name: initialFirstName,
  last_name: initialLastName,
  email: initialEmail,
  phone: initialPhone,
  username,
  sex,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhone);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    console.log(firstName);
    dispatch(updateInformation(token, firstName, lastName, email, phone));
    setIsOpen(false);
  };

  return (
    <>
      <List color="white" spacing={3} bgColor={myGray} h="full" p="20px">
        <ListItem>
          <Text fontSize={"25px"} fontWeight={"semibold"}>
            {initialFirstName} {initialLastName}
          </Text>
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineUser} /> {username}
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlineMail} />
          {initialEmail}
        </ListItem>
        <ListItem>
          <ListIcon as={AiOutlinePhone} />
          +{initialPhone}
        </ListItem>
        {/* <ListItem>
        <ListIcon as={BsGenderAmbiguous} />
        {sex}
      </ListItem> */}
        <ListItem onClick={toggleModal} cursor="pointer">
          <ListIcon as={AiOutlineSetting} />
          Update Information
        </ListItem>
      </List>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody gap={5}>

            <Flex direction={'column'} gap={3}>
              <Flex direction={'column'} gap={1}>
                <Text>First Name</Text>
                <Input
                  name="first_name"
                  placeholder="First Name"
                  value={firstName}
                  focusBorderColor={"black"}
                  borderRadius="12px"
                  border={"1px"}
                  borderColor={myGray}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Flex>
              <Flex direction={'column'} gap={1}>
                <Text>last Name</Text>
                <Input
                  name="last_name"
                  placeholder="Last Name"
                  value={lastName}
                  focusBorderColor={"black"}
                  borderRadius="12px"
                  border={"1px"}
                  borderColor={myGray}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Flex>
              <Flex direction={'column'} gap={1}>
                <Text>email</Text>
                <Input
                  name="email"
                  placeholder="Email"
                  value={email}
                  focusBorderColor={"black"}
                  borderRadius="12px"
                  border={"1px"}
                  borderColor={myGray}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Flex>
              <Flex direction={'column'} gap={1}>
                <Text>Phone</Text>
                <Input
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  focusBorderColor={"black"}
                  borderRadius="12px"
                  border={"1px"}
                  borderColor={myGray}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Flex>
            </Flex>

          </ModalBody>
          <ModalFooter>
            <Button bgColor={myGray} color={white} mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={toggleModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
