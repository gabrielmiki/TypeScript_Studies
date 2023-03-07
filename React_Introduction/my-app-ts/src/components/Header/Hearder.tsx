import { Box, Button, ButtonGroup, Center, Flex, Heading, Spacer, VStack } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/Storage'
import { AppContext } from '../AppContext'
import './Header.css'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logOut = () => {
        changeLocalStorage({ login: false })
        setIsLoggedIn(false)
        navigate('/')
    }

    const viewPerfil = () => {
        navigate('/userinfo')
    }

    return (
        <Center bg='white' borderRadius='20px' mb={3} padding='10px'>
            <VStack width={'50%'}>
                <Box color={'white'} bg='#9413dc' borderRadius={20} mb={1} width='100%'
                    textAlign={'center'} fontWeight='bold' padding={5} fontSize='3xl'>
                    DIO Bank
                </Box>
                <Flex width={'100%'}>
                    {
                        isLoggedIn ?
                            (
                                <>
                                    <Flex minWidth={'100%'} alignItems='center'>
                                        <Box bg='teal' borderRadius={10} 
                                            padding={3} textAlign='center' color='white' fontSize='3lg'>
                                            O Banco de sua Confiaça!
                                        </Box>
                                        <Spacer></Spacer>
                                        <ButtonGroup>
                                            <Button onClick={() => viewPerfil()}>
                                                Perfil
                                            </Button>
                                            <Button onClick={() => logOut()}>
                                                Sair
                                            </Button>
                                        </ButtonGroup>
                                    </Flex>
                                </>
                            ) :
                            (
                                <Box bg='teal' borderRadius={10} width='100%'
                                    padding={3} textAlign='center' color='white' fontSize='3lg'>
                                    O Banco de sua Confiaça!
                                </Box>
                            )
                    }
                </Flex>
            </VStack>
        </Center>
    )
}