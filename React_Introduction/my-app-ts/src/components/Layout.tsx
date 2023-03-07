import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Hearder"

export const Layout = ({ children }: any) => {
    return(
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
            <Header /> 
            { children }
        </Box>
    )
}