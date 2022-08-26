//CREATE USETASKLIST HOOK   
import { useState } from 'react';

export const AddTask = (taskList, newTask) => {
    const [addedTask, setAddedTask] = useState([]);

    setAddedTask([...taskList, newTask]);

    return addedTask;
};

export const useDeleteTask = (taskList, id) => {
    const [deletedTask, setDeletedTask] = useState([]);

    setDeletedTask(taskList.filter((task) => task.id !== id));

    return deletedTask;
};


export const useToggleCompleted = (taskList, id) => {
    const [completedTask, setCompletedTask] = useState([]);

    setCompletedTask(
        taskList.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    );

    return completedTask;
};

export const useEditTask = (taskList, id, newTask) => {
    const [editedTask, setEditedTask] = useState([]);

    setEditedTask(
        taskList.map((task) =>
            task.id === id ? { ...task, newTask } : task
        )
    );

    return editedTask;
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