import { useState, useEffect } from 'react';



// custom hook to filterCompletedTasks tasks by completed status

export const useCompleted = (taskList) => {

    const [filterCompletedTasks, setCompletedTasksFilter] = useState('All');

    const [completedTasksFiltered, setFilteredCompletedTasks] = useState(taskList);

    useEffect(() => {

        if (filterCompletedTasks === 'ShowAll') {

            setFilteredCompletedTasks(taskList);

        } else if (filterCompletedTasks === 'ShowCompleted') {

            setFilteredCompletedTasks(taskList.filter((task) => task.completed === true));

        } else if (filterCompletedTasks === 'ShowIncomplete') {

            setFilteredCompletedTasks(taskList.filter((task) => task.completed === false));

        }

    }, [filterCompletedTasks, taskList]);

    const handleCompletedTasksFilterer = (e) => {

        setCompletedTasksFilter(e.target.value);

    };

    return [completedTasksFiltered, handleCompletedTasksFilterer];

}
