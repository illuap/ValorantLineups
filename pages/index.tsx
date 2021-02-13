import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import MainLayout from './layouts/MainLayout'

export default function Home() {
  return (
    <div className={styles.home}>
      <MainLayout></MainLayout>
    </div>
  )
}
