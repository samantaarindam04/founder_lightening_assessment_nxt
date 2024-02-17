"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

function Breadcrumbs() {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path && path != 'album')

    return (
        <ul className='breadcrumbs'>
            <li>
                <a href="/">Home </a>
            </li>
            {
                pathNames.map((key, index) => <li key={index}>
                    {
                        index < pathNames.length - 1 ? <a href={`${index === 0 ? '/album/' + key : key}`}> &nbsp;/ {key.replaceAll('_', ' ')}</a> : <span className='last_link'>&nbsp;/ {key.replaceAll('_', ' ')}</span>
                    }

                </li>)
            }
        </ul>

    )
}

export default Breadcrumbs