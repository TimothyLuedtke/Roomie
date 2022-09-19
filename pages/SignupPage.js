import Head from 'next/head';
import TopNavbar from "../components/topNavbar"
import BottomNavbar from "../components/btmNavbar"


export default function Signup() {

    const AddUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/user/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
            }),
        });
        const json = await res.json();
        if (!res.ok) throw Error(json.message);
        console.log(json);
    };



    return (
        <>
            <Head />
            <TopNavbar /> 
                  
            <BottomNavbar />
        </>
    )
}