
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


    // STATE MANAGEMENT FOR TASKLIST////

    const [taskList, setTaskList] = useState(TaskData);
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [due_date, setDue_date] = useState("");
    const [assigned_to, setAssigned_to] = useState("");
    const [listName, setListName] = useState("");


    ////////////////////////////////

    //  CHECK COMPLETED CHECKBOX ///

    ////////////////////////////////

    const handleComplete = (id) => {
        const newTaskList = taskList.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        setTaskList(newTaskList);
    };

    /////////////////////////////////////

    //   ADD NEW TASK   VIA MODAL   ////

    /////////////////////////////////////

    const { isOpen: isOpenAddTask, onOpen: onOpenAddTask, onClose: onCloseAddTask } = useDisclosure();

    const handleOpenAddTask = () => {
        resetForm();
        onOpenAddTask();
    };

    const handleAdd = (newtask) => {
        const newTaskList = [...taskList, newtask];
        setTaskList(newTaskList);
    };

    // SUMBIT FOR ADDING NEW TASK

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

    ////////////////////////////////////////

    //        RESET FORM VALUES         ////

    ////////////////////////////////////////

    const resetForm = () => {
        setTaskName("");
        setDescription("");
        setDue_date("");
        setAssigned_to("");
        setListName("");
    };

    ////////////////////////////////////////

    //          SET FORM VALUES        ////

    ///////////////////////////////////////

    const presetForm = (e) => {
        setTaskName(e.taskName);
        setDescription(e.description);
        setDue_date(e.due_date);
        setAssigned_to(e.assigned_to);
        setListName(e.listName);
    };

    //////////////////////////////////////////

    //   DELETING TASK      VIA  MODAL    ////

    //////////////////////////////////////////

    const { isOpen: isOpenDeleteTask, onOpen: onOpenDeleteTask, onClose: onCloseDeleteTask } = useDisclosure();

    const handleDelete = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
    };

    const handleDeleteTask = (e) => {
        handleDelete(e.id);
        onCloseDeleteTask();
        toast({
            title: "Task deleted.",
            description: "We've deleted your task from the list.",
            status: "error",
            duration: 9000,
            isClosable: true,
        });
    };






    //////////////////////////////

    // EDIT TASK   VIA MODAL  ////

    //////////////////////////////

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
        resetForm();
        onCloseEditTask();
        toast({
            title: "Task updated.",
            description: "We've updated your task.",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
    };






    return (
        <>
            <Container>
                <Flex>
                    <Text fontSize="4xl" fontWeight="bold">
                        Tasks
                    </Text>
                    <Spacer />
                    <Button colorScheme="teal" variant="outline" onClick={handleOpenAddTask}>
                        Add
                    </Button>
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
                                            <Text fontSize="xl">{task.taskName}</Text>
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
                                            onClick={() => onOpenDeleteTask(task.id)}
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
                        <Modal isOpen={isOpenDeleteTask} onClose={onCloseDeleteTask} isCentered>
                            <ModalOverlay />
                            <ModalContent width="fit-content">
                                <ModalFooter>
                                    <Button colorScheme="red" variant="outline" margin="1rem" onClick={() => handleDeleteTask(task)}>
                                        Delete
                                    </Button>
                                    <Button variant="outline" margin="1rem" onClick={onCloseDeleteTask}>
                                        Cancel
                                    </Button>
                                </ModalFooter>

                            </ModalContent>
                        </Modal>
                    </>

                    <>
                        <Modal isOpen={isOpenAddTask} onClose={onCloseAddTask}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader></ModalHeader>
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
                                    <Button colorScheme="blue" variant="outline" mr={3} onClick={handleSubmit}>
                                        Add Task
                                    </Button>
                                    <Button variant="outline" onClick={onCloseAddTask}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                    <>
                        <Modal isOpen={isOpenEditTask} onClose={onCloseEditTask} >
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
                                    <Button colorScheme="blue" variant="outline" mr={3} onClick={handleEditSubmit}>
                                        Edit Task
                                    </Button>
                                    <Button variant="outline" onClick={onCloseEditTask}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>

                </Flex>
            </Container>
        </>
    );
};





