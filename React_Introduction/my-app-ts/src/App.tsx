import { Layout } from "./components/Layout";
import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { Card } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
