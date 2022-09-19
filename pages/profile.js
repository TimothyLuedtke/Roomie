import { useUser } from "../lib/hooks";
import { useRouter } from "next/router";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import Head from "next/head";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BtmNavbar";

export default function Profile() {
    const user = useUser({ redirectTo: "/login" });
    const router = useRouter();
    
    if (!user || user.isLoggedIn === false) {
        return (
        <Flex
            height="100vh"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Heading size="lg">Loading...</Heading>
        </Flex>
        );
    }
    
    return (
        <>
            <Head />
            <TopNavbar />
        <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        >
        <Heading size="lg">Profile</Heading>
        {user.name != null ? (
        <Text>
            <FaUserCircle />    
            {user.name}
        </Text>
        ) : (
        <Text>
            <FaUserCircle />
            {user.email}
        </Text>
        )}

        <Button onClick={() => router.push("/login")}>Logout</Button>
        </Flex>
        <BottomNavbar />
        </>
    );
    }

    


