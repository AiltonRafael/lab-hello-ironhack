import React from 'react';
import { Box } from '@chakra-ui/layout';
import { 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    Text } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/button';
import { 
    HamburgerIcon, 
    AddIcon, 
    RepeatIcon, 
    EditIcon, 
    ExternalLinkIcon } from '@chakra-ui/icons';

import logo from '../assets/images/ironhack-logo.svg'

import { Button } from '@chakra-ui/button';

export default function MenuComponent() {
    return (
        <Box w='100%' bg='#1F2535' h='50vh'>
            <Box d='flex' justifyContent='space-between' p='10px 10px'>
                <Image src={logo}/>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<HamburgerIcon />}
                        variant="outline"
                    />
                    <MenuList>
                        <MenuItem icon={<AddIcon />} command="⌘T">
                        New Tab
                        </MenuItem>
                        <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                        New Window
                        </MenuItem>
                        <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                        Open Closed Tab
                        </MenuItem>
                        <MenuItem icon={<EditIcon />} command="⌘O">
                        Open File...
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box color='#ffff' d='flex' flexDirection='column' justifyContent='center' textAlign='center'> 
                <Text fontSize='20px'>
                    Say hello to ReactJS
                </Text>
                <Text mt='30px'>
                    You will leran how to use <br />
                    the most popular frontend libray, <br />
                    and become a super Ninja developer
                </Text>
            </Box>
            <Box d='flex' justifyContent='center' mt='50px'> 
                <Button w='100px'> Awesome </Button>
            </Box>
        </Box>
    )
}
