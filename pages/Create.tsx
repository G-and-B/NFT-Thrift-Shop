import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home(){
  return (
    <>
     This is the create page...
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/yourCollection">
          <a>Your Collection</a>
        </Link>
      </li>
    </ul>
    </>
  )
}
