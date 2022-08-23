import { useState } from "react";
//for Tasks function
import { Box, Container, Text, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td } from "@chakra-ui/react";
// for tab function
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// for Form function
import { Form, useDisclosure, FormControl, Input, } from "@chakra-ui/react";
// for Modal function
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";

import  { DropdownReorderButton } from "./DropdownButton";

import { TaskAPI } from "../pages/Tasklist";

import { useSort } from "./hooks/useSort";


export default function Tasks() {
    const [tasks, setTasks] = useState(TaskAPI);


    ///////////////////
    // CRUD FUNCTIONS//
    ///////////////////

    // CREATE TASK

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    // READ TASK

    const getTasks = () => {
        return tasks;
    };
   ///////////////////
    // FILTER TASKS//
    /////////////////

    // RETURN COMPLETE TASKS

    function CompletedTasks() {  
        return getTasks().filter((task) => task.completed === true);
    }

    // RETURN INCOMPLETE TASKS
    function ActiveTasks() {
        return getTasks().filter((task) => task.completed === false);
    }

    // RETURN ALL TASKS
    function AllTasks() {
        return getTasks();
    }

    // RETURN TASKS BY TASKLIST
    function TaskListTasks(listName) {
        return getTasks().filter((task) => task.taskList === listName);
    }

    // RETURN TASKS BY ASSIGNED TO
    function AssignedToTasks(assignedTo) {
        return getTasks().filter((task) => task.assigned_to === assignedTo);
    }

    // RETURN TASKS BY DUE DATE
    function DueDateTasks(dueDate) {
        return getTasks().filter((task) => task.due_date === dueDate);
    }

    // SORT TASKS BY DUE DATE IN DESCENDING ORDER
    function MapDescendingDueDate() {
        return getTasks().sort((a, b) => (a.due_date > b.due_date) ? 1 : -1)
    }

    // SORT TASKS BY DUE DATE IN ASCENDING ORDER
    function MapAscendingDueDate() {
        return getTasks().sort((a, b) => (a.due_date < b.due_date) ? 1 : -1)
    }



    // UPDATE TASK

    const updateTask = (id, updatedTask) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, ...updatedTask } : task
            )
        );
    };

    // DELETE TASK

    function DeleteTask(id) {
        // delete task
        setTasks(tasks.filter((task) => task.id !== id));
    }

    /////////////////
    ///  MODALS  ////
    /////////////////

    function AddTaskModal() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
            <>
                <Button onClick={onOpen} background= 'transparent' variant='outline'>Add Task</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add Task</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <AddTaskForm />
                        </ModalBody>

                        <ModalFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button variant="ghost">Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }



    ////////////
    // FORMS ///
    ////////////

    // ADD TASK FORM

    function AddTaskForm() {
        const [taskName, setTaskName] = useState('');
        const [description, setDescription] = useState('');
        const [due_date, setDue_date] = useState(Date);
        const [taskList, setTaskList] = useState('');
        const [assigned_to, setAssigned_to] = useState('');
        const [completed, setCompleted] = useState(false);  // default to false

        const onSubmit = (e) => {
            e.preventDefault();

            addTask({ taskName, description, due_date, taskList, assigned_to, completed });

            setTaskName('');
            setDescription('');
            setDue_date(Date);
            setTaskList('');
            setAssigned_to('');
            setCompleted(false);
        };
        // add task form
        return (
            <Box>
                <FormControl onSubmit={onSubmit}>
                
                    <FormControl>

                        <Input
                            type="text"
                            placeholder="Add Task"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>

                        <Input
                            type="text"
                            placeholder="Add Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormControl>
                    <FormControl >

                        <Input
                            type="date"
                            placeholder="Add Due Date"
                            value={due_date}
                            onChange={(e) => setDue_date(e.target.value)}

                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Add Task List"
                            value={taskList}
                            onChange={(e) => setTaskList(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Assigned To"
                            value={assigned_to}
                            onChange={(e) => setAssigned_to(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type="checkbox" 
                            placeholder="Completed"
                            value={completed}
                            onChange={(e) => setCompleted(e.currentTarget.checked)}
                        />
                    </FormControl>
                    <Button type="submit" onClick={onSubmit} variant="solid" >Add Task</Button>
                </FormControl>


            </Box>
        );
    }



    // EDIT TASK FORM

    function EditTaskForm({ task }) {
        const [taskName, setTaskName] = useState(task.taskName);    
        const [description, setDescription] = useState(task.description);
        const [due_date, setDue_date] = useState(task.due_date);
        const [taskList, setTaskList] = useState(task.taskList);
        const [assigned_to, setAssigned_to] = useState(task.assigned_to);
        const [completed, setCompleted] = useState(task.completed);
        
        const onSubmit = (e) => {
            e.preventDefault();

            updateTask(task.id, { taskName, description, due_date, taskList, assigned_to, completed });

            setTaskName('');
            setDescription('');
            setDue_date('');
            setTaskList('');
            setAssigned_to('');
            setCompleted(false);
        };
        // edit task form
        return (
            <Box>
                <FormControl onSubmit={onSubmit}>
                    <FormControl>

                        <Input
                            type="text"
                            placeholder="Add Task"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        
                        <Input
                            type="text"
                            placeholder="Add Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormControl>
                    <FormControl >

                        <Input
                            type="date"
                            placeholder="Due Date"
                            value={due_date}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Add Task List"
                            value={taskList}
                            onChange={(e) => setTaskList(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type="text"
                            placeholder="Assigned To"
                            value={assigned_to}
                            onChange={(e) => setAssigned_To(e.target.value)}
                        />
                    </FormControl>
                    <Button
                        variant='outline'
                        justifyContent='end'
                        type='submit'
                        value={addTask}
                    >
                        Save
                    </Button>

                </FormControl>
            </Box>
        );
    }






////////////////////
// TASK COMPONENT//
///////////////////

    function TaskTab() {
        return (
            <Tabs variant="enclosed" size="lg" align="center" >
                <TabList mb="1em">
                    <Tab>Active</Tab>
                    <Tab>Completed</Tab>

                </TabList>

                <TabPanels>
                    <TabPanel>
                        <TaskTable tasks={ActiveTasks()} />
                    </TabPanel>

                    <TabPanel>
                        <TaskTable tasks={CompletedTasks()} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        );
    }

}




// completed: todoForm.completed,
// created_at: todoForm.created_at,
// updated_at: todoForm.updated_at,
// used_in_process: todoForm.used_in_process,
// step_in_process: todoForm.step_in_process,
// list_item: todoForm.list_item,
