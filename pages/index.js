import Head from 'next/head';
import TaskPage from './TaskPage';
import TopNavbar from '../components/topNavbar';


export default function Home() {


  return (
    <>
      <Head />
      <TopNavbar />
      <TaskPage />
    </>

  )
}