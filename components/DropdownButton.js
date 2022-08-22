
import { Menu, MenuButton, Button, MenuList, MenuItem, MenuDivider, Text, styled } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useState } from "react";

//DROPDOWN MENU BUTTON

/// creating a function to map through menuItems based on total number if menuItem given through their dropText
function DropdownReorderButton({ label, descendLabel = "Newest", ascendLabel = "Oldest" }) {

    const [sort, setSort] = useState();



    return (


        <Menu>
            <MenuButton  as={Button} fontSize='sm'  fontWeight='bold' background='transparent'  rightIcon={<ChevronDownIcon />}>
                {label}                
            </MenuButton>
            <MenuList>
                <MenuItem value={setSort} onClick={() => setSort}>
                    {descendLabel}
                </MenuItem>
                <MenuItem value={setSort} onClick={() => !setSort}>
                    {ascendLabel}
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default DropdownReorderButton;