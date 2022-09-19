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
                  
            <form onSubmit={AddUser}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Sign Up</button>
            </form>

            
            <BottomNavbar />
        </>
    )
}