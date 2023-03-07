import { Grid, GridItem } from "@chakra-ui/react"
import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import UserData from "../components/UserData"
import { api } from "../services/api"

interface IUserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const UserInfo = () => {
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

    return (
        <Grid bg='white' borderRadius={20} gap={4}
        templateRows='repeat(2, 1fr)'
        padding={25}>
            <GridItem>
                <UserData mainContent="Nome:" content={`${ userData?.name }`}/>
            </GridItem>
            <GridItem> 
                <UserData mainContent="Email:" content={`${ userData?.email }`}/>
            </GridItem>
        </Grid>
    )
}

export default UserInfo