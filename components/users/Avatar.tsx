import React from 'react'
import styles from './Avatar.module.css'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const IMAGE_SIZE = 48

const Avatar = ({ name, otherStyles }: {otherStyles: string, name: string}) => {
  return (
    <div className={cn('h-9 w-9', styles.avatar, otherStyles)} data-tooltip={name}>
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
        fill
        className={styles.avatar_picture}
        alt={name}
      />
    </div>
  )
}

export default Avatar