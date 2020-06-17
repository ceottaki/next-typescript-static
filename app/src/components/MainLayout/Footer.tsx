import React from 'react'

import styles from './Footer.module.scss'

interface IFooterProps {
  siteLogo: string
}

export const Footer: React.FC<IFooterProps> = ({ siteLogo }) => {
  return (
    <div className={styles.footer}>
      <img src={siteLogo} />
      Footer Here
    </div>
  )
}

export default Footer
