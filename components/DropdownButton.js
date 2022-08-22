
import { Menu, MenuButton, Button, MenuList, MenuItem, MenuDivider, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { MapAscendingDueDate, MapDescendingDueDate } from "../pages/Tasklist";

//DROPDOWN MENU BUTTON

/// creating a function to map through menuItems based on total number if menuItem given through their dropText
function DropdownReorderButton({ label, descendLabel = "Newest", ascendLabel = "Oldest" }) {

    const [sort, setSort] = useState();



    return (


        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {label}
                {sort}
            </MenuButton>
            <MenuList>
                <MenuItem value={setSort} onClick={() => setSort[MapDescendingDueDate]}>
                    {descendLabel}
                </MenuItem>
                <MenuItem value={setSort} onClick={() => setSort[MapAscendingDueDate]}>
                    {ascendLabel}
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default DropdownReorderButton;