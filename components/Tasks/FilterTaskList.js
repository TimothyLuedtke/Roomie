import { useCheckboxGroup } from "@chakra-ui/react";
import { Checkbox, Stack } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useState } from "react";

/////////////////////////////////////

//   FILTER LISTS W/ CHECKBOX MODAL    //

/////////////////////////////////////
export function FilterTaskList() {
    const { isOpen: isOpenListNames, onOpen: onOpenListNames, onClose: onCloseListNames } = useDisclosure();

    const [listNames, setListNames] = useState([]);
    const [listDisplay, setListDisplay] = useState(taskList);

    const uniqueListNames = [...new Set(taskList.map((task) => task.listName))];

    return (
        <>
            <Button onClick={handleOpenListNamesFilterer}>Filter Lists</Button>
            <Modal isOpen={isOpenListNames} onClose={onCloseListNames}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Filter Lists</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleListNamesSubmit}>
                            <ListNameCheckboxGroup />
                            <Button type="submit">Filter</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export function ListNameCheckboxGroup() {

    const { getCheckboxProps } = useCheckboxGroup({
        name: "listNames",
        onChange: (values) => {
            setListNames(values);
        },
    });

    const uniqueListNames = [...new Set(taskList.map((task) => task.listName))];

    const checkboxes = uniqueListNames.map((value) => {
        const checkbox = getCheckboxProps({ value });
        return (
            <Checkbox key={value} {...checkbox}>
                {value}
            </Checkbox>
        );
    });

    return <Stack spacing={4}>{checkboxes}</Stack>;
}

export function HandleListNamesSubmit(event) {
    event.preventDefault();
    const filteredList = taskList.filter((task) => listNames.includes(task.listName));
    setListDisplay(filteredList);
}

export function HandleOpenListNamesFilterer() {
    onOpenListNames();
}

 export function HandleCloseListNamesFilterer() {
    onCloseListNames();
}
