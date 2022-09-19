// creat responsive navbar with six icon buttons and a search bar
// the navbar is fixed to the top of the page
// the navbar is responsive to the screen size

// set icon button to be underlined when the page is active

import { Flex, IconButton, Input, InputGroup, InputLeftElement, useBreakpointValue } from "@chakra-ui/react";
import { FaSearch, FaHome, FaCalendarAlt, FaCheck, FaPlus, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { extendTheme } from "@chakra-ui/react"
import { useUser } from "../lib/hooks";

export default function TopNavbar() {
    const router = useRouter();
    const isMobile = useBreakpointValue({ base: true, md: false });

    const theme = extendTheme({
        layerStyles: {
          selected: {
            borderBottom: "2px solid #38B2AC",
          },
        },
      })

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            paddingTop={isMobile ? "1em" : "0.5em"}
            bg="gray.800"
            color="white"
            position="sticky"
            top="0"
            width="100%"
        >
            <Flex align="center" mr={5}>
                <IconButton
                    aria-label="Home"
                    icon={<FaHome />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/")}
                    layerStyle = {router.pathname === "/" ? "selected" : ""}                   
                />
                <IconButton
                    aria-label="Calendar"
                    icon={<FaCalendarAlt />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/calendar")}
                    layerStyle = {router.pathname === "/calendar" ? "selected" : ""}
                />
                <IconButton
                    aria-label="TaskPage"
                    icon={<FaCheck />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/tasks")}
                    layerStyle = {router.pathname === "/tasks" ? "selected" : ""}
                />
            </Flex>

            <Flex align="center">
                {isMobile ? (
                    <IconButton
                        aria-label="Search"
                        icon={<FaSearch />}
                        size="lg"
                        variant="ghost"
                        onClick={() => router.push("/search")}

                    />
                ) : (
                    <InputGroup size="md">
                        <InputLeftElement
                            pointerEvents="none"
                            >
                            <FaSearch color="gray.300" />
                            </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="Search"
                            variant="filled"
                            onClick={() => router.push("/search")}
                        />
                    </InputGroup>
                )}
                <IconButton
                    aria-label="Add"
                    icon={<FaPlus />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/add")}
                />
                {useUser() ? (
                <IconButton
                    aria-label="Account"
                    icon={<FaUser />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/profile")}
                    layerStyle = {router.pathname === "/profile" ? "selected" : ""}
                />
                ) : (
                <IconButton
                    aria-label="Login"
                    icon={<FaUser />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/login")}
                />
                )}

            </Flex>
        </Flex>
    );
}