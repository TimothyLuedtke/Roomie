import { TaskList } from "../components/Tasks/TaskList"
import { AddTask } from "../components/hooks/useTaskEdit"
export default function TaskPage() {



    return (
        <>
            <AddTask />
            <TaskList />

        </>
    )
}