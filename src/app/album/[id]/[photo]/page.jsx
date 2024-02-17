"use client"

import React, { useEffect } from 'react'
import { fetchPhotos, selectAllPhotos } from '../../../../../redux/slices/photoSlice';
import Photocard from '@/components/Photocard';
import { fetchAlbums, selectAllAlbums } from "../../../../../redux/slices/albumSlice";
import { fetchUsers, selectAllUsers } from "../../../../../redux/slices/userSlice";
import Loading from "@/components/Loading";
import { useAppSelector, useAppDispatch } from "../../../../../redux/hooks";


function Photo({ params }) {
    const dispatch = useAppDispatch()
    const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
    const allUsers = useAppSelector(selectAllUsers)
    const userId = allUsers.users.filter(key => key.username.toLowerCase() == params.id)
    const id = userId.length > 0 ? userId[0]?.id : 0
    const allAlbums = useAppSelector(selectAllAlbums)
    const albumLists = userId && allAlbums.albums?.filter(key => key.userId == id && key.title == params.photo.replaceAll('_', ' '))
    const albumId = albumLists.length > 0 ? albumLists[0]?.id : 0
    const allPhotos = useAppSelector(selectAllPhotos)
    const photoLists = allPhotos.photos?.filter(key => key.albumId == albumId)
    useEffect(() => {
        dispatch(fetchPhotos())
        dispatch(fetchAlbums())
        dispatch(fetchUsers())
    }, [])

    const thumbPhotos = photoLists.map((photo) => ({
        src: photo.thumbnailUrl,
        width: Math.floor(Math.random() * (200 - 100 + 1) + 100),
        height: Math.floor(Math.random() * (150 - 100 + 1) + 100),
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round(breakpoint);
            return {
                src: photo.thumbnailUrl,
                width: breakpoint,
                height,
            };
        }),
    }));

    const photos = photoLists.map((photo) => ({
        src: photo.url,
        width: Math.floor(Math.random() * (400 - 100 + 1) + 100),
        height: Math.floor(Math.random() * (300 - 100 + 1) + 100),
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round(breakpoint);
            return {
                src: photo.url,
                width: breakpoint,
                height,
            };
        }),
    }));

    return (
        <>
            {
                allPhotos.status ? '' : <Loading/>
            }
            <Photocard thumb={thumbPhotos} photos={photos} />

        </>

    )
}

export default Photo