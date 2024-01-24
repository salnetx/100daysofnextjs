import Head from "next/head";
import Nav from "./Nav";
const Header = ({title})=>{
        return(
            <>  
                <Head>
                    <title>{title}</title>
                    <Nav />
                </Head>
            </>
        )
}
export default Header;