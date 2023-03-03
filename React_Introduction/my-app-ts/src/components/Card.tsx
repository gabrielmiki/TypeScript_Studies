import { Box, Center, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { Btt } from "./Btt/Btt"
import { Header } from "./Header/Hearder"

export const Card = () => {
    return(
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Header />
        <Box backgroundColor="#FFFFFF" borderRadius='25px' padding='15px'>
          <Center bg="#9413dc" color={'white'} padding='8px' fontSize={'3md'}
            fontWeight='bold' borderRadius={20} mb='3px'> 
            Faça o login 
          </Center>

          <Input placeholder='email' />

          <Input placeholder='password' />
          
          <Btt onClick={login}/>
        </Box>
      </Box>
    )
}