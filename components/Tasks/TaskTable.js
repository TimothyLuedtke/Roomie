import { TaskAPI } from '../../pages/Tasklist';
import { Box, Container, Text, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td, ButtonGroup } from "@chakra-ui/react";
import { TaskRow } from "./TaskRow";
import { useCompleted } from "../hooks/useCompleted";
import { FilterModal } from './filterModal';
import { Accordion } from '@chakra-ui/react';




export const TaskTable = () => {


    const [completedTasksFiltered, handleCompletedTasksFilterer] = useCompleted(TaskAPI);



    const MapTasks = () => {
        return completedTasksFiltered.map((taskItem) => {

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
                            <Tr>
                        
                                <Td>
                                    < FilterModal
                                        handleCompletedTasksFilterer={handleCompletedTasksFilterer}
                                    />
                                </Td>
                            </Tr>
                            <Accordion allowMultiple>
                            <MapTasks 
                             />
                             </Accordion>
                        </Tbody>
                    </Table>
                </Box>
            </Container>
        );
    }
