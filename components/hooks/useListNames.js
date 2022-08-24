import { useEffect, useState } from 'react';

// custom hook to filter multiple selected listNames from taskList

export const useListNames = (taskList) => {

    const [filterListNames , setListNamesFilter] = useState('All');

    const [listNamesFiltered, setFilteredListNames] = useState(taskList);

    useEffect(() => {

        if (filterListNames === 'ShowAllLists') {

            setFilteredListNames(taskList);

        } else {
            
            setFilteredListNames(taskList.filter((task) => task.listName.includes === filterListNames));

        }

    }, [filterListNames, taskList]);

    const handleListNamesFilterer = (e) => {

        setListNamesFilter(e.target.value);

    };

    return [listNamesFiltered, handleListNamesFilterer];

}