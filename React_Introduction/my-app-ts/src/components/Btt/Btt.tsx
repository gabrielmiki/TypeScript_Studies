import { Box, Center } from "@chakra-ui/react"

interface Btt {
    //event: () => {}
}

export const Btt = ({  }: Btt) => {
    return(
        <Center bg='teal' color={'white'} mt='3px' borderRadius={10} 
            padding='3px' fontWeight={'bold'} fontSize='3md'> 
            Submit!
        </Center>
    )
}