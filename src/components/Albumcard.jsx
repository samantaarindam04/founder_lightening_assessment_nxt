"use client"
import React from 'react'
import Image from "next/image";
import styles from '@/styles/Albumcard.module.css'
import { useRouter } from 'next/navigation';

export default function Albumcard({username, name}) {
  const router = useRouter()
  const handlePhoto = (e) => {
    e.preventDefault();
    router.push('/album/' + username.toLowerCase() + '/' + name.replaceAll(' ', '_'))
  }

  return (
    <div className={styles.single_album} onClick={handlePhoto}>
      <Image src={'/folder.png'} priority={true} width={200} height={200} alt={`folder_img`} />
      <span>{name}</span>
    </div>
  )
}
