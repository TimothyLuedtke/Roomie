//////////////////////////////

// EDIT TASK   VIA MODAL  ////

//////////////////////////////

import { useDisclosure, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Stack, ModalFooter, Button, Input } from "@chakra-ui/react";


export function EditTask(...props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [due_date, setDue_date] = useState("");
    const [assigned_to, setAssigned_to] = useState("");
    const [listName, setListName] = useState("");
    const toast = useToast();

    const handleEdit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/api/tasks/${props.task._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                taskName,
                description,
                due_date,
                assigned_to,
                listName,
            }),
        });
        const data = await res.json();
        if (data.error) {
            toast({
                title: "Error",
                description: data.error,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: "Task updated",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            onClose();
        }
    };

    return (
        <>
            <Button onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Task</ModalHeader>
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
                                placeholder="Due Date"
                                value={due_date}
                                onChange={(e) => setDue_date(e.target.value)}
                            />
                            <Input
                                placeholder="Assigned To"
                                value={assigned_to}
                                onChange={(e) => setAssigned_to(e.target.value)}
                            />
                            <Input
                                placeholder="List Name"
                                value={listName}
                                onChange={(e) => setListName(e.target.value)}
                            />
                        </Stack>
                    </ModalBody>
                    <ModalFooter>  
                        <Button colorScheme="blue" mr={3} onClick={handleEdit}>
                            Edit
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}


    // const handleEdit = (task) => {
    //     setEditTask(task);
    //     PresetForm(task);
    //     onOpenEditTask();
    // };

    // const handleEditSubmit = (e) => {
    //     e.preventDefault();
    //     const newTaskList = taskList.map((task) => {
    //         if (task.id === editTask.id) {
    //             return { ...task, taskName, description, due_date, assigned_to, listName };
    //         }
    //         return task;
    //     });
    //     setTaskList(newTaskList);
    //     resetForm();
    //     onCloseEditTask();
    //     toast({
    //         title: "Task updated.",
    //         description: "We've updated your task.",
    //         status: "success",
    //         duration: 9000,
    //         isClosable: true,
    //     });
    // };

//     return { isOpenEditTask, onCloseEditTask, handleEdit, handleEditSubmit };
// }

// export const EditTaskModal = (props) => {
//     const { isOpenEditTask, onCloseEditTask, handleEditSubmit } = EditTask();
//     return (

//         <Modal isOpen={isOpenEditTask} onClose={onCloseEditTask} >
//             <ModalOverlay />
//             <ModalContent>
//                 <ModalHeader></ModalHeader>
//                 <ModalBody>
//                     <Stack spacing={3}>
//                         <Input
//                             placeholder={props.taskName !== "" ? props.taskName : "Task Name"}
//                             onChange={(e) => setTaskName(e.target.value)}
//                         />
//                         <Input
//                             placeholder={props.description !== "" ? props.description : "Description"}
//                             onChange={(e) => setDescription(e.target.value)}
//                         />
//                         <Input
//                             placeholder={props.due_date !== "" ? props.due_date : "Due Date"}
//                             onChange={(e) => setDue_date(e.target.value)}
//                         />
//                         <Input
//                             placeholder={props.assigned_to !== "" ? props.assigned_to : "Assigned To"}
//                             onChange={(e) => setAssigned_to(e.target.value)}
//                         />
//                         <Input
//                             placeholder={props.listName !== "" ? props.listName : "List Name"}
//                             onChange={(e) => setListName(e.target.value)}
//                         />
//                     </Stack>
//                 </ModalBody>

//                 <ModalFooter>
//                     <Button colorScheme="blue" variant="outline" mr={3} onClick={handleEditSubmit}>
//                         Edit Task
//                     </Button>
//                     <Button variant="outline" onClick={onCloseEditTask}>Cancel</Button>
//                 </ModalFooter>
//             </ModalContent>
//         </Modal>
//     );
// };
