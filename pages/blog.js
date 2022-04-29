import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Layout} from '../components/Layout'

export default function About(){
  return (
    <>
    Blog
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
    </>
  )
}