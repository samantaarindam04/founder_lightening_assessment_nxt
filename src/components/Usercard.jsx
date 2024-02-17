import React from 'react'
import Image from "next/image";
import styles from '@/styles/Usercard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

export default function Usercard({ username, name, email, phone }) {
    const router = useRouter()
    const handleView = (e) => {
        e.preventDefault();
        router.push('/album/' + username.toLowerCase())
    }
    return (
        <div className={styles.user_card}>
            <div className={styles.user_img}>
                <Image src={`/user.png`} width={100} height={100} alt="profile_img" priority={true} />
            </div>
            <div className={styles.user_detail}>
                <div className={styles.details}>
                    <FontAwesomeIcon icon={faUser} size='sm' /> <span>{name}</span>
                </div>
                <div className={styles.details}>
                    <FontAwesomeIcon icon={faEnvelope} size='sm' /> <span>{email}</span>
                </div>
                <div className={styles.details}>
                    <FontAwesomeIcon icon={faPhone} size='sm' /> <span>{phone}</span>
                </div>
                <div className={styles.album_btn}>
                    <button onClick={handleView}>View Album</button>
                </div>
            </div>
        </div>
    )
}
