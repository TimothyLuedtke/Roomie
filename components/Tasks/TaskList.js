
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

    // SET UP TOAST FROM CHAKRA UI
    const toast = useToast();


    // STATE MANAGEMENT FOR TASKS////

    const [taskList, setTaskList] = useState(TaskData);
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [due_date, setDue_date] = useState("");
    const [assigned_to, setAssigned_to] = useState("");
    const [listName, setListName] = useState("");

    

    // FUNCTION TO HANDLE CHECKBOX AND ALTER TASKLIST FOR COMPLETED TASK////

    const handleComplete = (id) => {
        const newTaskList = taskList.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        setTaskList(newTaskList);
    };

    // FUNCTION TO HANDLE ADDING A NEW TASK TO TASKLIST////

    const { isOpen: isOpenAddTask, onOpen: onOpenAddTask, onClose: onCloseAddTask } = useDisclosure();

    const handleAdd = (newtask) => {
        const newTaskList = [...taskList, newtask];
        setTaskList(newTaskList);
    };

    // HAND SUMBIT BUTTON FOR ADDING A NEW TASK////
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
        handleAdd(newTask);
        onCloseAddTask();
        toast({
            title: "Task added.",
            description: "We've added your task to the list.",
            status: "success",
            duration: 9000,
            isClosable: true,
        });

        resetForm();
    };

    // FUNCTION TO RESET FORM VALUES////
    const resetForm = () => {
        setTaskName("");
        setDescription("");
        setDue_date("");
        setAssigned_to("");
        setListName("");
    };

    // FUNCTION TO SET FORM VALUES TO STATE////

    const presetForm = (e) => {
        setTaskName(e.taskName);
        setDescription(e.description);
        setDue_date(e.due_date);
        setAssigned_to(e.assigned_to);
        setListName(e.listName);
    };

    // FUNCTION TO HANDLE DELETING A TASK FROM TASKLIST////
    const handleDelete = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
    };




    // HANDLE EDITING A TASK FROM TASKLIST////

    const { isOpen: isOpenEditTask, onOpen: onOpenEditTask, onClose: onCloseEditTask } = useDisclosure();

    const [editTask, setEditTask] = useState(null);

    const handleEdit = (task) => {
        setEditTask(task);
        presetForm(task);
        onOpenEditTask();
    };
    
    const handleEditSubmit = (e) => {
        e.preventDefault();
        const newTaskList = taskList.map((task) => {
            if (task.id === editTask.id) {
                return { ...task, taskName, description, due_date, assigned_to, listName };
            }
            return task;
        });
        setTaskList(newTaskList);
        onCloseEditTask();
        toast({
            title: "Task updated.",
            description: "We've updated your task.",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
        resetForm();
    };



                




    return (
        <>
            <Container>
                <Flex>

                    <Text fontSize="4xl" fontWeight="bold">
                        Tasks
                    </Text>
                    <Spacer />
                    <Box>
                        <Button colorScheme="teal" onClick={onOpenAddTask}>
                            Add Task
                        </Button>
                    </Box>
                </Flex>
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
                                        <Spacer />
                                        <Button
                                            variant="outline"
                                            onClick={() => handleEdit(task)}
                                        >
                                            Edit
                                        </Button>

                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>

                        ))}
                    </Accordion>
                    <>
                        <Modal isOpen={isOpenAddTask} onClose={onCloseAddTask}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader></ModalHeader>
                                <ModalBody>
                                    <Stack spacing={3}>
                                        <Input
                                            placeholder={taskName !== "" ? taskName : "Task Name"}
                                            onChange={(e) => setTaskName(e.target.value)}
                                        />
                                        <Input
                                            placeholder={description !== "" ? description : "Description"}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <Input
                                            placeholder={due_date !== "" ? due_date : "Due Date"}
                                            onChange={(e) => setDue_date(e.target.value)}
                                        />
                                        <Input
                                            placeholder={assigned_to !== "" ? assigned_to : "Assigned To"}
                                            onChange={(e) => setAssigned_to(e.target.value)}
                                        />
                                        <Input
                                            placeholder={listName !== "" ? listName : "List Name"}
                                            onChange={(e) => setListName(e.target.value)}
                                        />
                                    </Stack>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                                        Add Task
                                    </Button>
                                    <Button onClick={onCloseAddTask}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                    <>
                        <Modal isOpen={isOpenEditTask} onClose={onCloseEditTask}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader></ModalHeader>
                                <ModalBody>
                                    <Stack spacing={3}>
                                        <Input
                                            placeholder={taskName !== "" ? taskName : "Task Name"}
                                            onChange={(e) => setTaskName(e.target.value)}
                                        />
                                        <Input
                                            placeholder={description !== "" ? description : "Description"}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                        <Input
                                            placeholder={due_date !== "" ? due_date : "Due Date"}
                                            onChange={(e) => setDue_date(e.target.value)}
                                        />
                                        <Input
                                            placeholder={assigned_to !== "" ? assigned_to : "Assigned To"}
                                            onChange={(e) => setAssigned_to(e.target.value)}
                                        />
                                        <Input
                                            placeholder={listName !== "" ? listName : "List Name"}
                                            onChange={(e) => setListName(e.target.value)}
                                        />
                                    </Stack>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme="blue" mr={3} onClick={handleEditSubmit}>
                                        Edit Task
                                    </Button>
                                    <Button onClick={onCloseEditTask}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>

                </Flex>
            </Container>
        </>
    );
};





