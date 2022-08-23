import { TaskTable } from "../components/Tasks/TaskTable"
import { TaskAPI } from "./Tasklist"
import { Box, Container } from "@chakra-ui/react";

export default function TaskPage() {


return (
    <Box>
        <Container>
                < TaskTable dataSet={TaskAPI} />
                
        </Container>
    </Box>

)
}