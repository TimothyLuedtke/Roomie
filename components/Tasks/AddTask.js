import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Stack,
    Input,
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";

export const NewTask = ({ addTask }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [due, setDue] = useState(Date);
    const [assigned_to, setAssigned_to] = useState('');
    const [taskList, setTaskList] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleAddTask = (e) => {
        e.preventDefault();

        if (taskName === '' || description === '' || due === Date || assigned_to === '' || taskList === '') {
            toast({
                title: "Please fill out all fields.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
        } else {
            const newTask = {
                id: nanoid(),
                taskName: taskName,
                description: description,
                due: due,
                assigned_to: assigned_to,
                taskList: taskList,
                completed: completed,
            };
            addTask(newTask);
            setTaskName('');
            setDescription('');
            setDue(Date);
            setAssigned_to('');
            setTaskList('');
            setCompleted(false);
        }
    };

    return (
        <>
            <Button onClick={onOpen}>Add Task</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <form onSubmit={handleAddTask}>
                    <ModalContent>
                        <ModalBody>
                            <Stack spacing={3}>
                                <Input
                                    placeholder="Task Name"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                />
                                <Input
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <Input
                                    placeholder="Due"
                                    value={due}
                                    onChange={(e) => setDue(e.target.value)}
                                />
                                <Input
                                    placeholder="Assigned To"
                                    value={assigned_to}
                                    onChange={(e) => setAssigned_to(e.target.value)}
                                />
                                <Input
                                    placeholder="Task List"
                                    value={taskList}
                                    onChange={(e) => setTaskList(e.target.value)}
                                />
                            </Stack>

                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={handleAddTask}>Save</Button>
                            <Button onClick={!isOpen}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    );
}