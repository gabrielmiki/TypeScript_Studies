import { Box, Center, Input } from "@chakra-ui/react";
import { setMaxIdleHTTPParsers } from "http";
import { MouseEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Btt } from "../components/Btt/Btt";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/Storage";

const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')

    const { setIsLoggedIn } = useContext(AppContext)

    const navigate = useNavigate()

    const validadeteUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            alert('Email ou Senha Inválido')
        }
        else {
            setIsLoggedIn(true)
            changeLocalStorage({ login: true })
            navigate('/conta/1')
        }
    }
    
    return (
        <Box padding='25px'>
            <Card>
                <Center bg="#9413dc" color={'white'} padding='8px' fontSize={'3md'}
                    fontWeight='bold' borderRadius={20} mb='3px'>
                    Faça o login
                </Center>

                <Input placeholder='email' value={email} onChange={(event) =>
                    setEmail(event.target.value)} />

                <Input placeholder='password' value={password} onChange={(event) =>
                    setPassword(event.target.value)}/>

                <Btt onClick={() => validadeteUser(email, password)} />
            </Card>
        </Box>
    )
}

export default Home;