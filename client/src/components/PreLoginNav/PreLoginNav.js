import React from 'react'
import Logo from '../Logo/Logo'
import {NavLink} from "react-router-dom"
import classes from "./PreLoginNav.module.css"


const PreLoginNav = (props) => {
    return (
     
       <div className={classes.navbar} >
       <Logo/>
        <div className={classes.navbar__right}>
        <NavLink to="/signup" className={classes.navbar__right__item}>Signup</NavLink>
      
        <NavLink to="/login" className={classes.navbar__right__item}>Login</NavLink>
        </div>
   </div>
   
    )
}

export default PreLoginNav
