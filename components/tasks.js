import { useState } from "react";

// completed: todoForm.completed,
// created_at: todoForm.created_at,
// updated_at: todoForm.updated_at,
// used_in_process: todoForm.used_in_process,
// step_in_process: todoForm.step_in_process,
// list_item: todoForm.list_item,

const taskList = {
    title: 'Example Title',
    description: 'Example Description',
    due_date: 'Example Due Date',

    task: [
        {
            item: 'Example Task Item',
            description: 'Example Task Item Description',
            due_date: 'Date',
            completed: false,
        },
        {
            item: 'Example Task Item 2',
            description: 'Example Task Item Description 2',
            due_date: 'Example Task Item Due Date 2',
            completed: true,
        },
    ],
}


export default function Tasks(props) {

const [completed, setCompleted] = useState(taskList.task.completed) 
{() => setCompleted(!completed)} className={completed ? 'text-md text-red-500 line-through' : 'text-md text-black-500'}


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
                                    <p onClick={completeTask}>{item.item} </p>
                                    
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