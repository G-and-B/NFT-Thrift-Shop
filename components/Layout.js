
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({pageProps}){
    return (
        <>
        <div className="flex flex-col h-screen justify-between">
        <Navbar/>
        <main>{pageProps}</main>
        <Footer > </Footer>
        </div>
        </>
    )
}