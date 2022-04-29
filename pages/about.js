import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Layout} from '../components/Layout'
import Card from './card';

export default function About(){
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    {/* <Card/>
    <Card/>
    <Card/> */}
    </div>
  )
}