import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Button,
    Checkbox,
    Flex,
    Text,
    Spacer,
} from "@chakra-ui/react";

import { TaskData } from "../../pages/api/TaskData";
import { useState } from "react";
import { useDeleteTask, useEditTask, useToggleCompleted } from "../hooks/useTaskEdit";



export const MapTasks = () => {

    const [taskList, setTaskList] = useState(TaskData);
    

    const HandleDeleteTask = () => { 
        setTaskList(useDeleteTask(taskList, id));
    };

    const HandleToggleCompleted = () => {
        setTaskList(useToggleCompleted(taskList, id));
    };

    const HandleEditTask = () => {
        setTaskList(useEditTask(taskList, id, newTask));
    };


    return (
        <>
            {taskList.map((task) => (
                <AccordionItem key={task.id}>
                    <h2>
                        <AccordionButton>
                            <Checkbox
                            padding={2}
                                isChecked={task.completed}
                                onChange={HandleToggleCompleted}
                            />
                            <Box flex="1" textAlign="left" marginLeft={10}>
                                <Text>{task.taskName}</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Flex direction="column">
                            <Text>Description: {task.description}</Text>
                            <Text>Due: {task.due_date}</Text>
                            <Text>Assigned to: {task.assigned_to}</Text>
                            <Text>List: {task.listName}</Text>
                        </Flex>
                        <Flex direction="row" justifyContent="right">
                            <Button 
                            marginX={1}
                            variant='none'
                                onClick={HandleDeleteTask}
                            >
                                Edit
                            </Button>
                            <Button 
                            marginX={.5}
                            variant='none'
                                onClick={HandleDeleteTask}
                            >
                                Delete
                            </Button>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </>
    );
};