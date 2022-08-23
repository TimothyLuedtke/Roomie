import Head from 'next/head';
import Navbar from '../components/Navbar';
import Tasks from '../components/Tasks';
import TaskPage from './TaskPage';


export default function Home() {


  return (
    <>
      <Head />
      {/* <Navbar /> */}
      {/* <Tasks /> */}
      <TaskPage />
    </>

  )
}