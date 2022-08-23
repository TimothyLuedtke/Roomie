import {
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
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
            <ButtonGroup size="sm" isAttached variant="outline" >
              <Button value = 'ShowIncomplete'>Incomplete</Button>
              <Button value = 'ShowCompleted'>Completed</Button>
              <Button value = 'ShowAll'>All</Button>
            </ButtonGroup>

          </ModalBody>

          <ModalFooter>
            <Button variant="outline"  mr={3}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose} >Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};