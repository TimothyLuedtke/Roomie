//CREATE USETASKLIST HOOK   
import { useState } from 'react';

export const AddTask = (taskList, newTask) => {
    const [addedTask, setAddedTask] = useState([]);

    setAddedTask([taskList, newTask]), [newTask];

};

export const useDeleteTask = (taskList, id) => {
    const [deletedTask, setDeletedTask] = useState([]);

    setDeletedTask(taskList.filter((task) => task.id !== id)), [taskList, id];

};


export const useToggleCompleted = (taskList, id) => {
    const [completedTask, setCompletedTask] = useState([]);

    setCompletedTask(
        taskList.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    ), [taskList, id];

};

export const useEditTask = (taskList, id, newTask) => {
    const [editedTask, setEditedTask] = useState([]);

    setEditedTask(
        taskList.map((task) =>
            task.id === id ? { ...task, newTask } : task
        )
    ), [taskList, id, newTask];

};

// export const useFilterTasks = (taskList, {index}, filter) => {
//     const [filteredTasks, setFilteredTasks] = useState([]);

//     setFilteredTasks(
        
//         taskList.filter((task, index) =>
//         index =
//             if(index === filter) {
//                 return task;
//             }
//         )
//     );

//     return filteredTasks;
// }