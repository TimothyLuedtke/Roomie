import { Button } from "@chakra-ui/react";

export const TaskRow = ({ taskItem }) => {
    
// create a function the handles the expansion of a taskItem to show the task description
    const handleExpand = () => {
        
        return (
            <>
                <tr>
                <td>{taskItem.completed}</td>
                    <td>{taskItem.due}</td>
                <Button size="sm" variant="outline">Edit</Button>
                </tr>
                <td>{taskItem.description}</td>
                <td>{taskItem.taskList}</td>
            </>
        )
    }         


    return (
        <tr>
        <td>{taskItem.taskName}</td>
        </tr>
    );
    }