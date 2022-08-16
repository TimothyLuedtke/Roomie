import { useState } from "react";
import useToggle from "./hooks/useToggle";

// completed: todoForm.completed,
// created_at: todoForm.created_at,
// updated_at: todoForm.updated_at,
// used_in_process: todoForm.used_in_process,
// step_in_process: todoForm.step_in_process,
// list_item: todoForm.list_item,


////////////////////////
// TaskForm component
////////////////////////

export default function TaskList() {
    const [tasks, setTasks] = useState(
    [
        {
            taskName: 'Task Item',
            description: 'Task Item Description',
            due_date: 'Due Date',
            completed: false,
        },
        {
            taskName: 'Task Item 2',
            description: 'Task Item Description 2',
            due_date: 'Due Date 2',
            completed: true,
        },
    ]);

    
        return (
            <div>
                <div className="flex justify-center">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <h1 className="text-md font-medium">{taskList.title}</h1>
                        <p>{taskList.description}</p>
                        <p>{taskList.due_date}</p>
                        
                        <ul className="divide-y divide-gray-200">

                            {taskList.task.map((item) => (
                                <li key={item.item} className="py-4 flex">
                                    <div className="ml-3">
                                        <p className="text-sm font-medium">{item.item}</p>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                        <p className="text-sm text-gray-500">{item.due_date}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div >
        )
}