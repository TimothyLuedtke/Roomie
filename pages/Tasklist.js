export let TaskAPI = [
    {
        id: 1,
        taskName: 'Task Item',
        description: 'Task Item Description',
        due_date: 'Due Date',
        taskList: 'Purchase',
        assigned_to: 'Bob Buyer',
        completed: false,
    },
    {
        id: 2,
        taskName: 'Task Item 2',
        description: 'Task Item Description 2',
        due_date: 'Due Date 2',
        taskList: 'Pre-sale',
        assigned_to: 'Ally Agent',
        completed: true,
    },
    {
        id: 3,
        taskName: 'Task Item 3',
        description: 'Task Item Description 3',
        due_date: 'Due Date 3',
        taskList: 'Pre-sale',
        assigned_to: 'Bob Buyer',
        completed: false,
    },
]

// export a function that will map through the TaskAPI and order the objects by due_date in descending order
export function MapDescendingDueDate() {
    return TaskAPI.sort((a, b) => (a.due_date > b.due_date) ? 1 : -1)
}

// export a function that will map through the TaskAPI and order the objects by due_date in ascending order
export function MapAscendingDueDate() {
    return TaskAPI.sort((a, b) => (a.due_date < b.due_date) ? 1 : -1)
}
