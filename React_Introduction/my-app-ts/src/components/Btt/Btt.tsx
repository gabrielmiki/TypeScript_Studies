import { Center } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface Btt {
    onClick: MouseEventHandler
}

export const Btt = ({ onClick }: Btt) => {
    return(
        <Center bg='teal' color={'white'} mt='3px' borderRadius={10} 
            padding='3px' fontWeight={'bold'} fontSize='3md' onClick={onClick}> 
            Submit!
        </Center>
    )
}