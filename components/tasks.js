import { useState } from "react";
//import Chakra Icons
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
//for Tasks function
import { IconButton, Box, Container, Text, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Tfoot, Flex, Spacer, ButtonGroup } from "@chakra-ui/react";
// for tab function
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// for Form function
import { Form, useDisclosure, FormControl, FormLabel, Input, FormHelperText, Textarea } from "@chakra-ui/react";
// for Modal function
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
// for Menu Button
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";




export default function Tasks() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            taskName: 'Task Item',
            description: 'Task Item Description',
            due_date: 'Due Date',
            taskList: 'Purchase',
            assigned_to: 'Bob Buyer',
            completed: false,
        },
        {
            id: 2,
            taskName: 'Task Item 2',
            description: 'Task Item Description 2',
            due_date: 'Due Date 2',
            taskList: 'Pre-sale',
            assigned_to: 'Ally Agent',
            completed: true,
        },
        {
            id: 3,
            taskName: 'Task Item 3',
            description: 'Task Item Description 3',
            due_date: 'Due Date 3',
            taskList: 'Pre-sale',
            assigned_to: 'Bob Buyer',
            completed: false,
        },
    ]);

    //DROPDOWN MENU BUTTON

    /// creating a function to map through menuItems based on total number if menuItem given through their dropText
    function MenuDropdownButton({ text, menuItems[]}) {

        const menuItem = (dropText) => {
            return (
                <MenuItem onClick={onOpen}>{dropText}</MenuItem>
            )
        }
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
            <>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} onClick={onOpen}>
                        {text}
                    </MenuButton>
                    <MenuList>
                        {menuItem(')}
                    </MenuList>
                </Menu>
            </>
        )
    }


    ///////////////////
    // CRUD FUNCTIONS//
    ///////////////////

    // CREATE TASK

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    // READ TASK

    const getTasks = () => {
        return tasks;
    };

    // FILTER TASKS

    function CompletedTasks() {
        // return completed tasks;
        return getTasks().filter((task) => task.completed === true);
    }

    function ActiveTasks() {
        // return active tasks;
        return getTasks().filter((task) => task.completed === false);
    }

    // UPDATE TASK

    const updateTask = (id, updatedTask) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, ...updatedTask } : task
            )
        );
    };

    // DELETE TASK

    function DeleteTask(id) {
        // delete task
        setTasks(tasks.filter((task) => task.id !== id));
    }

    /////////////////
    ///  MODALS  ////
    /////////////////

    function AddTaskModal() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
            <Button onClick={onOpen}>Add Task</Button>
      
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddTaskForm />
                    </ModalBody>
                    
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            </>
        )
    }



    ///////////
    // FORMS///
    ///////////

    // ADD TASK FORM

    function AddTaskForm() {
        const [taskName, setTaskName] = useState('');
        const [description, setDescription] = useState('');
        const [due_date, setDue_date] = useState(Date);
        const [taskList, setTaskList] = useState('');
        const [assigned_to, setAssigned_to] = useState('');
        const [completed, setCompleted] = useState(false);  // default to false

        const onSubmit = (e) => {
            e.preventDefault();

            addTask({ taskName, description, due_date, taskList, assigned_to, completed });

            setTaskName('');
            setDescription('');
            setDue_date('');
            setTaskList('');
            setAssigned_to('');
            setCompleted(false);
        };
        // add task form
        return (
            <Box>
                <FormControl onSubmit={onSubmit}>
                    <FormControl>

                        <Input
                            type="text"
                            placeholder="Add Task"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>

                        <Input
                            type="text"
                            placeholder="Add Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormControl>
                    <FormControl >

                        <Input
                            type="date"
                            placeholder="Due Date"
                            value={due_date}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Add Task List"
                            value={taskList}
                            onChange={(e) => setTaskList(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Assigned To"
                            value={assigned_to}
                            onChange={(e) => setAssignedTo(e.target.value)}
                        />
                    </FormControl>
                    <Button
                        variant='outline'
                        type='submit'
                        value={addTask}
                    >
                        Save
                    </Button>

                </FormControl>
            </Box>
        );
    }



    // EDIT TASK FORM




    function TaskTab() {
        return (
            <Tabs variant="enclosed" size="lg" align="center" >
                <TabList mb="1em">
                    <Tab>Active</Tab>
                    <Tab>Completed</Tab>

                </TabList>

                <TabPanels>
                    <TabPanel>
                        <TaskTable tasks={ActiveTasks()} />
                    </TabPanel>
                    <TabPanel>
                        <TaskTable tasks={CompletedTasks()} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        );
    }

    function TaskTable({ tasks }) {
        return (
            <Table>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Task</Th>
                        <Th>Description</Th>
                        <Th>Due</Th>
                        <Th>Task List</Th>

                    </Tr>
                </Thead>
                <Tbody>

                    {tasks.map(task => (

                        <Tr key={task.id}>
                            <Td>
                                <Checkbox isChecked={task.completed} />
                            </Td>
                            <Td>
                                <Text fontWeight="bold">{task.taskName}</Text>
                            </Td>
                            <Td>
                                <Text fontSize="sm" color="gray.300">{task.description}</Text>

                            </Td>
                            <Td>{task.due_date}</Td>
                            <Td>{task.taskList}</Td>
                        </Tr>

                    ))}

                </Tbody>
                <Tr>
                    <Td>

                    </Td>
                    <Td>
                        <AddTaskModal />
                    </Td>
                    <Td>
                        <Button variant='outline'>
                            Edit List
                        </Button>
                    </Td>
                    <Td>
                        <Button variant='outline'>
                            Delete List
                        </Button>
                    </Td>
                </Tr>
                <Tr>
                    <Td>
                        <Box>
                            <Text fontSize="sm" color="gray.300">Showing {tasks.length} of {tasks.length} tasks</Text>
                        </Box>
                    </Td>
                </Tr>


            </Table>
        );
    }


    return (
        <Box>
            <Container>
                < TaskTab>
                    < TaskTable />

                </TaskTab>

            </Container>


        </Box>

    )
}




// completed: todoForm.completed,
// created_at: todoForm.created_at,
// updated_at: todoForm.updated_at,
// used_in_process: todoForm.used_in_process,
// step_in_process: todoForm.step_in_process,
// list_item: todoForm.list_item,
