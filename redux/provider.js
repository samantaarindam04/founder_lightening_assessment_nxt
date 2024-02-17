"use client"

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import Breadcrumbs from '@/components/Breadcrumbs'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <div className='album_main'>
                <h1>Photo Album</h1>
                <Breadcrumbs />
                {children}
            </div>
        </Provider>
    )
}

export default Providers