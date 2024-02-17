"use client"
import Albumcard from '@/components/Albumcard'
import styles from "@/styles/Albumcard.module.css";
import React, { useEffect } from 'react'
import { fetchAlbums, selectAllAlbums } from '../../../../redux/slices/albumSlice';
import { fetchUsers, selectAllUsers } from '../../../../redux/slices/userSlice';
import Loading from '@/components/Loading';
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";

function Album({ params }) {
    const dispatch = useAppDispatch()
    const allAlbums = useAppSelector(selectAllAlbums)
    const allUsers = useAppSelector(selectAllUsers)
    const userId = allUsers.users?.filter(key => key.username.toLowerCase() == params.id)
    const id = userId?.length > 0 ? userId[0]?.id : 0
    const albumLists = userId && allAlbums.albums?.filter(key => key.userId == id)
    useEffect(() => {
        dispatch(fetchAlbums())
        dispatch(fetchUsers())
    }, [])
    return (
        <div className={styles.album_lists}>
            {
                allAlbums.status ? '' : <Loading/>
            }
            {
                albumLists?.map((key, index) => <Albumcard key={index} id={key.id} userId={key.userId} username={params.id} name={key.title} />)
            }
        </div>


    )
}

export default Album