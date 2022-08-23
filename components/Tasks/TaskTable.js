import { TaskAPI } from '../../pages/Tasklist';
import { Box, Container, Text, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td } from "@chakra-ui/react";
import { TaskRow } from "./TaskRow";
import { useState, useEffect } from "react";


export const TaskTable = () => {
    const [taskList, setTaskList] = useState(TaskAPI);

  // filter the task list by completed status
    const [filter, setFilter] = useState('all');

    const handleFilter = (e) => {
        setFilter(e.target.value);
    }

    useEffect(() => {
        if (filter === 'all') {
            setTaskList(TaskAPI);
        } else if (filter === 'completed') {
            setTaskList(TaskAPI.filter((task) => task.completed === true));
        } else if (filter === 'incomplete') {
            setTaskList(TaskAPI.filter((task) => task.completed === false));
        }
    }, [filter]);


    const MapTasks = () => {
        return taskList.map((taskItem) => {

            return <TaskRow
                key={taskItem.id}
                taskItem={taskItem} />;
        })
    }
    

        return (
            <Container>
                <Box>
                    <Text>Task List</Text>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Due</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {/* filter buttons */}
                            <Tr>
                                <Td>
                                    <Button onClick={handleFilter} value='all'>All</Button>
                                    <Button onClick={handleFilter} value='completed'>Completed</Button>
                                    <Button onClick={handleFilter} value='incomplete'>Incomplete</Button>
                                </Td>
                            </Tr>
                            <MapTasks 
                             />
                        </Tbody>
                    </Table>
                </Box>
            </Container>
        );
    }