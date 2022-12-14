import React from 'react'
import { MobileMenu } from '../MobileMenu'
import style from './index.module.css'

export const MobileHeader = () => {
  return (
    <div className={style.mHeader}>
        <MobileMenu />
    </div>
  )
}
