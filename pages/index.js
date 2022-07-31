import { dividerClasses } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'

export default function Home() {
  return (
    <Layout>
      <div>
      <h1>Product</h1>
        <ul>
           <li>product 451</li>
           <li>product 23</li>
           <li>product 34</li> 
        </ul>
    </div>
    </Layout>
    
  )
}
