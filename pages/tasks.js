import Head from 'next/head';
import TaskList from "../components/tasks/TaskList"
import TopNavbar from "../components/topNavbar"
import BottomNavbar from "../components/btmNavbar"


export default function TaskPage() {



    return (
        <>
            <Head />
            <TopNavbar />            
            <TaskList />
            <BottomNavbar />
        </>
    )
}