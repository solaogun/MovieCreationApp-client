import React from 'react'
import { useHistory } from 'react-router-dom'
import './sideMenu.scss'


function SideMenu() {
    const history = useHistory()
    return (
        <div className='sideMenu-container'>
            <button type="button" onClick={() => history.push('/moviecreateform')} >
                Create Movie

            </button>

            <p> Movie DB</p>

            <div className='movieList'>
                <div>All</div>
                <div>Drama</div>
                <div>Action</div>
                <div>Adventures</div>
                <div>Historical</div>
            </div>

        </div>
    )
}

export default SideMenu
