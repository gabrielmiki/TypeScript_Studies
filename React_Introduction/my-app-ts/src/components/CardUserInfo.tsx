import { Box, Text } from "@chakra-ui/react";

interface ICardUserInfo {
    mainContent: string,
    content: string
}

const CardUserInfo = ({ mainContent,content }: ICardUserInfo) => {
    return(
        <Box bg='white' minH={120}  padding={8}
            borderRadius={25}>
            <Text fontSize={'2xl'} fontWeight={'bold'}> 
                { mainContent }
            </Text>
            <Text fontSize={'xl'}> 
                { content }
            </Text>
        </Box>
    )
}

export default CardUserInfo;