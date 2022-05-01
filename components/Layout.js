
import Navbar from './Navbar';
import Footer from './Footer';
import layoutStyle from '../styles/Layout.module.css'

export default function Layout({children}){
    return (
        <>
        <div 
        // className="flex flex-col h-screen justify-between"
        >
        <Navbar className={layoutStyle.Navbar}/>
        <main className={layoutStyle.main} >{children}</main>
        <Footer className={layoutStyle.Footer} > </Footer>
        </div>
        </>
    )
}