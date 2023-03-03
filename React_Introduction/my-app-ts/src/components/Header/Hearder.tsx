import { Box, Center, VStack } from '@chakra-ui/react'
import './Header.css'

export const Header = () => {
    return(
        <Center bg='white' borderRadius='20px' mb={3} padding='10px'>
            <VStack width={'50%'}>
                <Box color={'white'}  bg='#9413dc' borderRadius={20} mb={1} width='100%' textAlign={'center'} fontWeight='bold' padding={5} fontSize='3xl'>
                    DIO Bank
                </Box>
                <Box bg='teal' borderRadius={10} width='100%' padding={3} textAlign='center' color='white' fontSize='3lg'>
                    O Banco de sua Confiaça!
                </Box>
            </VStack>
        </Center>
    )
}