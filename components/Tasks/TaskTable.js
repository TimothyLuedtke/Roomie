
import { Box, Container, Text, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td } from "@chakra-ui/react";
import { TaskRow } from "./Tasks/TaskRow";

export function TaskTable() {

    <Table>
    <Thead>
        <Tr>
            <Th></Th>
            <Th>Task</Th>
            <Th>Description</Th>
            <Th>
                <DropdownReorderButton
                    label="Due Date"

                />
            </Th>
            <Th>Task List</Th>

        </Tr>
    </Thead>
    <Tbody>

        {useSort(tasks).map(task => (

            <Tr key={task.id}>
                <Td>
                    <Checkbox isChecked={task.completed} />
                </Td>
                <Td>
                    <Text fontWeight="bold">{task.taskName}</Text>
                </Td>
                <Td>
                    <Text fontSize="sm" color="gray.300">{task.description}</Text>

                </Td>
                <Td>{task.due_date}</Td>
                <Td>{task.taskList}</Td>
            </Tr>

        ))}

    </Tbody>
    <Tr>
        <Td>

        </Td>
        <Td>
            {/* <AddTaskModal /> */}
        </Td>
        <Td>
            <Button variant='outline'>
                Edit List
            </Button>
        </Td>
        <Td>
            <Button variant='outline'>
                Delete List
            </Button>
        </Td>
    </Tr>
    <Tr>
        <Td>
            <Box>
                <Text fontSize="sm" color="gray.300">Showing {tasks.length} of {tasks.length} tasks</Text>
            </Box>
        </Td>
    </Tr>


</Table>

}