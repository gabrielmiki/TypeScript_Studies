import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import CardUserInfo from "../components/CardUserInfo";
import { api } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";

interface IUserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const Conta = () => {
    const [ userData, setUserData ] = useState<null | IUserData>()
    const navigate = useNavigate()
    const { id } = useParams()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
      const getData = async () => {
        const data: any | IUserData = await api
        setUserData(data)
      }

      getData()
    }, [])

    const actualData = new Date()
    
    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
            {
                userData === undefined || userData === null ?
                (
                    <Center>
                        <Spinner size={'xl'} color='white'/>
                    </Center>
                ) :
                (
                    <>
                        <CardUserInfo mainContent={`Bem vindo ${userData?.name}`} 
                            content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}/>
                        <CardUserInfo mainContent='Saldo' content={`R$ ${userData.balance}`} />
                    </>
                )

            }
            </SimpleGrid>
        </Center>
    )
}

export default Conta;