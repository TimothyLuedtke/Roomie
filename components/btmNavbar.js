//create a bottom navbar that is responsive to the screen size and is fixed to the screen bottom and is side scrollable on mobile

import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaCalendarAlt, FaCheck, FaPlus, FaUser } from "react-icons/fa";
import { useRouter } from "next/router";

export default function BottomNavbar() {
    const router = useRouter();
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            bg="gray.800"
            color="white"
            position="fixed"
            bottom="0"
            width="100%"
            overflowX="auto"
        >
        
                <IconButton
                    aria-label="Profile"
                    icon={<FaUser />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/profile")}
                />
                <IconButton
                    aria-label="Calendar"
                    icon={<FaCalendarAlt />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/calendar")}
                />
                <IconButton
                    aria-label="Complete"
                    icon={<FaCheck />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/complete")}
                />

                <IconButton
                    aria-label="Add"
                    icon={<FaPlus />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/add")}
                />
                <IconButton
                    aria-label="Profile"
                    icon={<FaUser />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/profile")}
                />
                <IconButton
                    aria-label="Calendar"
                    icon={<FaCalendarAlt />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/calendar")}
                />
          

            
                <IconButton
                    aria-label="Add"
                    icon={<FaPlus />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/add")}
                />
                <IconButton
                    aria-label="Profile"
                    icon={<FaUser />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/profile")}
                />
                <IconButton
                    aria-label="Calendar"
                    icon={<FaCalendarAlt />}
                    size="lg"
                    variant="ghost"
                    onClick={() => router.push("/calendar")}
                />
            
        </Flex>
    );
}
