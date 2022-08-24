import {
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Checkbox,
  CheckboxGroup,
  Flex,
  Text,
  Box,

} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react';


export const FilterModal = ({ handleCompletedTasksFilterer, taskList }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()




  return (

    <>
      <Button onClick={onOpen} size="xs" variant="outline">Filter</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter</ModalHeader>


          <ModalBody>
            <Flex direction="column">
              <Text>Completed Tasks</Text>

              <ButtonGroup size="sm" isAttached variant="outline">
                <Button value='ShowIncomplete'>Incomplete</Button>
                <Button value='ShowCompleted'>Complete</Button>
                <Button value='ShowAll'>All</Button>
              </ButtonGroup>

              <Text>Lists</Text>

              <CheckboxGroup defaultValue={["ShowAllLists"]}>
                <Box>
                  <Checkbox value="ShowAllLists">All</Checkbox>
                  <Checkbox value="ShowPurchaseList">Purchase</Checkbox>
                </Box>
                <Box>
                  <Checkbox value="ShowPreSaleList">Pre-sale</Checkbox>
                  <Checkbox value="ShowPostSaleList">Post-sale</Checkbox>
                </Box>
              </CheckboxGroup>
            </Flex>
          </ModalBody>


          <ModalFooter>
            <Button variant="outline" mr={3}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose} >Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};