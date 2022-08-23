import { Tr, Td, Checkbox, Text } from "@chakra-ui/react";
import { useState } from "react";
import { TaskAPI } from "../../pages/Tasklist";

export default function TaskRow({ ...sortedData }) {
    const [isCompleted, setIsCompleted] = useState(sortedData.completed);

    // const [isEditing, setIsEditing] = useState(false);

    return (

        <Tr key={sortedData.id}>
            <Td>
                <Checkbox 
                isChecked={sortedData.completed} 
                onChange={() => setIsCompleted(!isCompleted)}                
                 />
            </Td>
            <Td>
                <Text fontWeight="bold">{sortedData.taskName}</Text>
            </Td>
            <Td>
                <Text fontSize="sm" color="gray.300">{sortedData.description}</Text>

            </Td>
            <Td>{sortedData.due_date}</Td>
            <Td>{sortedData.taskList}</Td>
        </Tr>

    );
}