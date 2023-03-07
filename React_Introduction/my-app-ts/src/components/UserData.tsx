import { Box } from "@chakra-ui/react"


interface IUserData {
    mainContent: string,
    content: string
}

const UserData = ({ mainContent, content }: IUserData) => {
    return (
        <>
            <Box bg='teal' marginBottom={3} padding='3' height='50px' 
                color='white' fontWeight={'bold'} fontSize='2l' borderRadius={30}>
                { mainContent }
            </Box>
            <Box backgroundColor={'tomato'} color='white' height={'39px'}
                padding='2' fontWeight={'bold'} fontSize='l' borderRadius={30}>
                { content }
            </Box>
        </>
    )
}

export default UserData