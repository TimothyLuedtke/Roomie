import { useState } from "react";
//for Tasks function
import { Box, Container, Flex, Heading, Text, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Tfoot, useBreakpointValue } from "@chakra-ui/react";
// for tab function
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function TaskTabs() {
    return (
        <Tabs variant="soft-rounded" size="lg" align="center" >
            <TabList mb="1em">
                <Tab>Active</Tab>
                <Tab>Completed</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p></p>
                </TabPanel>
                <TabPanel>
                    <p></p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}


export default function Tasks() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            taskName: 'Task Item',
            description: 'Task Item Description',
            due_date: 'Due Date',
            assigned_to: 'Bob Buyer',
            completed: false,
        },
        {
            id: 2,
            taskName: 'Task Item 2',
            description: 'Task Item Description 2',
            due_date: 'Due Date 2',
            assigned_to: 'Ally Agent',
            completed: true,
        },
        {
            id: 3,
            taskName: 'Task Item 3',
            description: 'Task Item Description 3',
            due_date: 'Due Date 3',
            assigned_to: 'Bob Buyer',
            completed: false,
        },
    ]);

    // const isWideVersion = useBreakpointValue({
    //     base: false,
    //     lg: true,
    // })

    return (

        <Box>

            <Container>
                < TaskTabs />
                <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>

                        </Tr>
                    </Thead>
                    <Tbody>
                        {tasks.map(task => (

                            <Tr key={task.id}>
                                <Td>
                                    <Checkbox isChecked={task.completed}/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">{task.taskName}</Text>
                                        <Text fontSize="sm" color="gray.300">{task.description}</Text>
                                    </Box>
                                </Td>
                                <Td>{task.due_date}</Td>
                            </Tr>

                        ))}
                    </Tbody>

                    <Tfoot>
                        <Button
                            as="a"
                            size="lg"
                            fontSize="lg"
                            align="right"
                        >
                            New Task
                        </Button>
                    </Tfoot>
                </Table>
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
