import Head from 'next/head';
import TopNavbar from "../components/topNavbar"
import BottomNavbar from "../components/btmNavbar"


export default function AccountPage() {

    // redirect to SignupPage if a user is not signed in

    if (!sessionStorage.getItem('user')) {
        window.location.href = '/signup'
    }


    return (
        <>
            <Head />
            <TopNavbar />            
            <BottomNavbar />
        </>
    )
}