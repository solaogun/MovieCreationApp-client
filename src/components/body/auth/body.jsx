import React from 'react'
import SideMenu from '../../sideMenu.jsx/sideMenu'
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom'
import movieCreateForm from '../../movieCreateForm/movieCreate'
import route from '../../routes/route'

function Body() {
    return (

        <Switch>

            <Route path='/' component={route} exact />
            <Route path='/moviecreateform' component={movieCreateForm} exact />

        </Switch>

    )
}

export default Body
