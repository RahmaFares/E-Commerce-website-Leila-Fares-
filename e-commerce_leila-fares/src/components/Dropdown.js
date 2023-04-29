import React, { useState } from 'react'
import {DropdownContainer, DropdownMenu, DropdownMenuItem, OpenLinksButton, BoldItalicItem} from '../styles/Dropdown.style'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
        <DropdownContainer>
            <OpenLinksButton  
            onClick={handleDropdown}> &#8801; 
            </OpenLinksButton>
            <DropdownMenu open={isOpen}>
                <BoldItalicItem>Login/Sign Up</BoldItalicItem>
                <DropdownMenuItem href="#">Orders</DropdownMenuItem>
                <DropdownMenuItem href="#">Messages</DropdownMenuItem>
                <DropdownMenuItem href="#">Logout</DropdownMenuItem>
                </DropdownMenu>
        </DropdownContainer>
      );
    };
    
    export default Dropdown;
