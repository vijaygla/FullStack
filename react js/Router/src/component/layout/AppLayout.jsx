import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout = () => {
    const navigation = useNavigation();
    console.log(navigation);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

