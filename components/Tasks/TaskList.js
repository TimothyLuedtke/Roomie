
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
    useToast,
    IconButton
} from "@chakra-ui/react";

import { TaskData } from "../../pages/api/taskData";

import { useState } from "react";

import { nanoid } from "nanoid";

import TaskBar from "./taskBar";

import { InfoOutlineIcon } from "@chakra-ui/icons";


const TaskList = () => {

    // SET UP TOAST FROM CHAKRA UI
    const toast = useToast();

    ///////////////////////////////////

    // STATE MANAGEMENT FOR TASKLIST////

    ///////////////////////////////////

    const [taskList, setTaskList] = useState(TaskData);
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [due_date, setDue_date] = useState("");
    const [assigned_to, setAssigned_to] = useState("");
    const [listName, setListName] = useState("");


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

    ////////////////////////////////////////////

    //   DELETING TASK    VIA MODAL   ///

    ////////////////////////////////////////////

    // SET UP VALUE FOR DELETE MODAL

    const { isOpen: isOpenDeleteTask, onOpen: onOpenDeleteTask, onClose: onCloseDeleteTask } = useDisclosure();

    const [deleteTask, setDeleteTask] = useState({});

    const handleOpenDeleteTask = (e) => {
        setDeleteTask(e);
        onOpenDeleteTask();
    };

    // DELETE TASK

    const handleDelete = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
    };

    // SUBMIT FOR DELETING TASK

    const handleDeleteSubmit = (e) => {
        e.preventDefault();
        handleDelete(deleteTask.id);
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
        <Container maxW="container.md" padding='0'>

            <TaskBar handleOpenAddTask={handleOpenAddTask} />

            <Flex direction="column">


                {taskList.map((task) => (
                        <Flex key={task.id} direction="row" padding='0' margin='0'> 
                            
                            <Flex direction="row" padding='0' margin='0' width='100%'>
                                
                                <Box>
                                    <Text padding='0' margin='0'>
                                        {task.taskName}
                                    </Text>
                                </Box>
                                <Box>
                                    <Text padding='0' margin='0'>
                                        {task.due_date}
                                    </Text>
                                </Box>
                            </Flex>

                            <IconButton 
                                aria-label="Open Task Details"
                                icon={<InfoOutlineIcon />}
                                variant="ghost"
                            onClick={() => openTaskDetailsModal(task.id)}
                            />
                        </Flex>
                ))}


                <>
                    <Modal isOpen={isOpenDeleteTask} onClose={onCloseDeleteTask} isCentered>
                        <ModalOverlay />
                        <ModalContent width="fit-content">
                            <ModalFooter>
                                <Button colorScheme="red" variant="outline" margin="1rem" onClick={handleDeleteSubmit}>
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
    );
};

export default TaskList;





