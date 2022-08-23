import { TaskAPI } from '../../pages/Tasklist';
import { Box, Container, Text, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td } from "@chakra-ui/react";
import { TaskRow } from "./TaskRow";
import { useState, useEffect } from "react";


export const TaskTable = () => {
    const [taskList, setTaskList] = useState(TaskAPI);

    const filteredTasks = (taskList) => {
        return taskList.filter((task) => task.completed === false);
    };


    const MapTasks = ({filteredTasks}) => {
        return {listProps}.map((taskItem) => {

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
                            <Button onClick={filteredTasks}>Completed</Button>
                            <MapTasks 
                            listProps = {taskList} />
                        </Tbody>
                    </Table>
                </Box>
            </Container>
        );
    }