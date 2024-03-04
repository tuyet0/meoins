import React from 'react'
import './Homepage.css'
import Timeline from './timeline/Timeline'
import Sidenav from './navigation/Sidenav'

export default function Homepage() {
    return (
        <div className='homepage'>
            <div className='homepage__navWraper'>
                <Sidenav />
            </div>
            <div className='homepage__timeline'>
                <Timeline />
            </div>
        </div>
    )
}
