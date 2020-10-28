import React, { Fragment } from 'react'
import logo from "./Logo.jpg"
import classes from "./Logo.module.css"
const Logo = () => {
    return (
        <Fragment>
            <img className={classes.logo}  src={logo} alt="logo"/>
        </Fragment>
    )
}

export default Logo
