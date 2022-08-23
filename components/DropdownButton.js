
import { Menu, MenuButton, Button, MenuList, MenuItem, MenuDivider, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";


//DROPDOWN MENU BUTTON

/// creating a function to map through menuItems based on total number if menuItem given through their dropText
export function DropdownSortButton({ label, descendLabel = "Newest", ascendLabel = "Oldest", setSortState }) {

    return (

        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
            >
                {label}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => setSortState("none")}>
                    <Text>{label}</Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => setSortState("ascending")}>
                    <Text>{ascendLabel}</Text>
                </MenuItem>
                <MenuItem onClick={() => setSortState("descending")}>
                    <Text>{descendLabel}</Text>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
