import { Center } from "@chakra-ui/react"

interface Btt {
    onClick: () => void
}

export const Btt = ({ onClick }: Btt) => {
    return(
        <Center bg='teal' color={'white'} mt='3px' borderRadius={10} 
            padding='3px' fontWeight={'bold'} fontSize='3md' onClick={onClick}> 
            Submit!
        </Center>
    )
}