import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Home } from './Home'
import style from './index.module.css'

export const Page1 = () => {
  return (
    <div className={style.page1}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
