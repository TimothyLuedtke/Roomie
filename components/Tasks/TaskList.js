
import {
    Accordion,
    Box,
    Button,
    Container,
    Flex,
    Text,
} from "@chakra-ui/react";

import { MapTasks } from "./MapTasks";




export const TaskList = () => {


    return (
        <Container >

            <Flex direction="column">
                <Flex direction="row" justifyContent="space-between">
                    <Text>Tasks</Text>

                </Flex>
                <Accordion allowMultiple>
                    <MapTasks
                    />
                </Accordion>
            </Flex>
        </Container>

    );
}

