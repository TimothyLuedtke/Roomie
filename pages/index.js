import Head from 'next/head';
import Navbar from '../components/Navbar';
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