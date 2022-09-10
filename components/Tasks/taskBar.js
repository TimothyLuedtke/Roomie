
import { Button, ButtonGroup, Flex, IconButton, Input, InputGroup, InputLeftElement, useBreakpointValue } from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";


export default function TaskBar(props) {
    const router = useRouter();
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Flex
            align="center"
            justify="space-between"
            paddingTop={isMobile ? "1em" : "0.5em"}
            paddingLeft={isMobile ? "1em" : "0.5em"}
            paddingRight={isMobile ? "1em" : "0.5em"}
            bg="gray.800"
            color="white"
            position="sticky"
            top="0"
            width="100%"

        >
            <ButtonGroup spacing="6">
            <Button
                variant="ghost"
                onClick={() => props.handleOpenAddTask()}
                leftIcon={<AddIcon />}
            >
                Task
            </Button>

            <Button
                variant="ghost"
                // onClick={() => props.handleOpenAddList()} DOES NOT WORK YET -- NEED TO ADD THIS FUNCTION TO TASKLIST.JS
                leftIcon={<AddIcon />}
            >
                List
            </Button>
            </ButtonGroup>

            <Button
                variant="ghost"
                // onClick={() => props.handleFilterList()} DOES NOT WORK YET -- NEED TO CREATE THIS FUNCTION
                rightIcon={<ChevronDownIcon />}
            >
                Filter
            </Button>

        </Flex>
    )
}