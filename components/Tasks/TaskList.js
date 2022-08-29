
import {
    Accordion,
    Box,
    Button,
    Container,
    Flex,
    Text,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Checkbox,
    Spacer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Stack,
    Input,
    useDisclosure,
    useToast
} from "@chakra-ui/react";

import { TaskData } from "../../pages/api/taskData";

import { useState } from "react";

import { nanoid } from "nanoid";


export const TaskList = () => {
    
    const [taskList, setTaskList] = useState(TaskData);
    ;

    const handleDelete = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
    };

    const handleComplete = (id) => {
        const newTaskList = taskList.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        setTaskList(newTaskList);
    };




    const AddTask = () => {

        const { isOpen, onOpen, onClose } = useDisclosure();
        const [taskName, setTaskName] = useState("");
        const [description, setDescription] = useState("");
        const [due_date, setDue_date] = useState("");
        const [assigned_to, setAssigned_to] = useState("");
        const [listName, setListName] = useState("");
        const toast = useToast();
    
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const newTask = {
                id: nanoid(),
                taskName,
                description,
                due_date,
                assigned_to,
                listName,
                completed: false,
            };
    
            const newTaskList = [{ ...taskList }, newTask];
            setTaskList(newTaskList);
            toast({
                title: "Task Added",
                description: "We've added your task to the list.",
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            onClose();
        };
    
        return (
            <>
                <Button onClick={onOpen}>Add Task</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add Task</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Stack spacing={3}>
                                <Input
                                    placeholder="Task Name"
                                    onChange={(e) => setTaskName(e.target.value)}
                                />
                                <Input
                                    placeholder="Description"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <Input
                                    placeholder="Due Date"
                                    onChange={(e) => setDue_date(e.target.value)}
                                />
                                <Input
                                    placeholder="Assigned To"
                                    onChange={(e) => setAssigned_to(e.target.value)}
                                />
                                <Input
                                    placeholder="List Name"
                                    onChange={(e) => setListName(e.target.value)}
                                />
                            </Stack>
                        </ModalBody>
    
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={ handleSubmit }>
                                Add Task
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    };





    return (
        <>
        <Container>
            <Flex direction="column">
                <Accordion allowMultiple>

            {taskList.map((task) => (
                <AccordionItem key={task.id}>
                    <h2>
                        <AccordionButton>
                            <Checkbox
                                padding={2}
                                isChecked={task.completed}
                                onChange={() => handleComplete(task.id)}
                                id={task.id}


                            />
                            <Box flex="1" textAlign="left" marginLeft={10}>
                                <Text>{task.taskName}</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Flex direction="column">
                            <Text>Description: {task.description}</Text>
                            <Text>Due: {task.due_date}</Text>
                            <Text>Assigned to: {task.assigned_to}</Text>
                            <Text>List: {task.listName}</Text>
                        </Flex>
                        <Flex direction="row" justifyContent="right">
                            <Button
                                variant="outline"
                                onClick={() => handleDelete(task.id)}
                            >
                                Delete
                            </Button>

                        </Flex>
                    </AccordionPanel>
                </AccordionItem>

            ))}
            </Accordion>
            <AddTask />
            </Flex>
        </Container>
        </>
    );
};





