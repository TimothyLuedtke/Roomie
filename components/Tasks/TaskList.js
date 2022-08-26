
import {
    Accordion,
    Box,
    Button,
    Container,
    Flex,
    Text,
} from "@chakra-ui/react";

import { MapTasks } from "./MapTasks";

import { AddTask } from "./AddTask";



export const TaskList = () => {


    return (
        <Container >

            <Flex direction="column">
                <Flex direction="row" justifyContent="space-between">
                    <Text>Tasks</Text>
                    <Button onClick={AddTask} variant="outline">Add Task</Button>
                    
                </Flex>
        <Accordion allowMultiple>
            <MapTasks
            />
        </Accordion>
            </Flex>
        </Container>

    );
}

