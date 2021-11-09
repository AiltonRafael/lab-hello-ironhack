import React from 'react';
import { 
    Flex, 
    Box,
    Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'

export default function BottomComponents() {
    return (
        <Flex h='50vh' w='100%' d={['column', 'column', 'flex', 'flex']} alignItems='center' justifyContent='center'>
            <Box w='100%' d='flex' justifyContent='center'>
                <Image src={icon1}/>
            </Box>
            <Box w='100%' d='flex' justifyContent='center'>
                <Image src={icon2}/>
            </Box>
            <Box w='100%' d='flex' justifyContent='center'>
                <Image src={icon3}/>
            </Box>
            <Box w='100%' d='flex' justifyContent='center'>
                <Image src={icon4}/>
            </Box>
        </Flex>
    )
}
