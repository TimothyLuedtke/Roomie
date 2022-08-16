import Head from 'next/head';
import Navbar from '../components/navbar';
import Tasks from '../components/tasks';
import Playground from '../components/playground';


export default function Home() {

  return (
    <>
      <Head>

      </Head>
      <Navbar />
      {/* <Tasks /> */}
      <Playground />
    </>
  )
}