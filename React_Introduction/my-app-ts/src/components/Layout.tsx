import { Footer } from "./Footer"
import { Header } from "./Header/Hearder"

export const Layout = ({ children }: any) => {
    return(
        <>
            <Header /> 
            { children }
            <Footer />
        </>
    )
}