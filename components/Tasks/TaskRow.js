import {
    Button,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Text,
} from "@chakra-ui/react";

export const TaskRow = ({ taskItem }) => {

    // create a function the handles the expansion of a taskItem to show the task description
    const handleExpand = () => {

        return (
            <>
                <tr>
                    <td>{taskItem.completed}</td>
                    <td>{taskItem.due}</td>
                    <Button size="sm" variant="outline">Edit</Button>
                </tr>
                <td>{taskItem.description}</td>
                <td>{taskItem.taskList}</td>
            </>
        )
    }
    {/* <Accordion allowMultiple> */ }


    return (
        <tr>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            {taskItem.taskName}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Flex direction="column">
                        <Text>{taskItem.description}</Text>
                        <Text>Due: {taskItem.due}</Text>
                        <Text>Assigned to: {taskItem.assigned_to}</Text>
                        <Text>Task List: {taskItem.taskList}</Text>
                        <Button size="sm" variant="outline">Edit</Button>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>

        </tr>
    );
}