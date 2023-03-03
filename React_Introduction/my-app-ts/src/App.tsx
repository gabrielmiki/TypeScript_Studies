import { Layout } from "./components/Layout";
import styled from 'styled-components'
import { 
  Box,
  Button,
  Center,
  ChakraProvider,
  Input
} from '@chakra-ui/react'
import { login } from "./services/login"
import { Header } from "./components/Header/Hearder";
import { Btt } from "./components/Btt/Btt";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Header />
        <Box backgroundColor="#FFFFFF" borderRadius='25px' padding='15px'>
          <Center bg="#9413dc" color={'white'} padding='8px' fontSize={'3md'}
            fontWeight='bold' borderRadius={20} mb='3px'> 
            Faça o login 
          </Center>

          <Input placeholder='email' />

          <Input placeholder='password' />
          
          <Center> </Center>
          <Btt />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
