import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import mountains from '../assets/184.jpg'
import {Layout} from '../components/Layout'

export default function Card(){
  return (
   <>
   
   {/* <a href="#!">
      <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
    </a> */}

   <a
      href="https://github.com/vercel/next.js/tree/canary/examples"
             className={styles.card}>
      <Image className="rounded-lg"
            src={mountains}
            alt="Landscape picture"
            width={500}
            height={500}
      />
      <h2>Examples &rarr;</h2>
      <p>Discover and deploy boilerplate example Next.js projects.</p>
    </a>
   </>
    // <div className="flex-row">
    //     <div className="rounded-lg shadow-lg bg-white max-w-sm">
    //         <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
    //         <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
    //         </a>
    //         <div className="p-6">
    //         <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
    //         <p className="text-gray-700 text-base mb-4">
    //             Some quick example text to build on the card title and make up the bulk of the card's
    //             content.
    //         </p>
    //         <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    //         </div>
    //     </div>
    // </div>
  )
}