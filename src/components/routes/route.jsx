import React from 'react'
import Topbar from '../nav/topbar'
import SideMenu from '../sideMenu.jsx/sideMenu'
import { SliderData } from '../sliderData/sliderData'
import Feed from '../feed/feed'
import { BrowserRouter as Router } from 'react-router-dom'

function route() {
    return (

        <div className="App">
            <Topbar />
            <div className='side-menu'>
                <SideMenu />
                <Feed slides={SliderData} />

            </div>
        </div>

    )
}

export default route
