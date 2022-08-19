import { useState } from "react";
//for Tasks function
import { Box, Container, Text, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Tfoot } from "@chakra-ui/react";
// for tab function
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";




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

            <Button variant='outline'>
                Edit List
            </Button>


        </Box>

    )
}




// completed: todoForm.completed,
// created_at: todoForm.created_at,
// updated_at: todoForm.updated_at,
// used_in_process: todoForm.used_in_process,
// step_in_process: todoForm.step_in_process,
// list_item: todoForm.list_item,
