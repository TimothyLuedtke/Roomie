import Head from 'next/head';
import TaskPage from './TaskPage';
import TopNavbar from '../components/topNavbar';
import BottomNavbar from '../components/btmNavbar';


export default function Home() {


  return (
    <>
      <Head />
      <TopNavbar />
      <TaskPage />
      <BottomNavbar />
    </>

  )
}