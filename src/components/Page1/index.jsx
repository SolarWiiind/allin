import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Home } from './Home'
import style from './index.module.css'
import { MobileHeader } from './MobileHeader'

export const Page1 = () => {
  return (
    <div className={style.page1}>
      <Header />
      <MobileHeader />
      <Home />
      <Footer />
    </div>
  )
}
