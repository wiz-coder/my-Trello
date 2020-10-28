import React, { useEffect } from 'react'
import PreLoginNav from "../PreLoginNav/PreLoginNav"
import {Route,Switch,withRouter} from "react-router-dom"
import Signup from '../Signup/Signup';
import Login from "../Login/Login"
import classes from "./LandingPage.module.css"
import ForgotPassword from '../ForgotPassword/ForgotPassword';

const LandingPage = (props) => {
    
    useEffect(()=>{
        props.history.push('/login')
    },[props.history])
    return ( 
        <div className={classes.grid_container} >
        <PreLoginNav className={classes.grid_container__nav}/>
        <div className={classes.grid_container__body}>
        <Switch>
        <Route path="/signup" component={Signup} />
         <Route path="/login" component={Login}/>
         <Route path="/forgotPassword" component={ForgotPassword}/>
        </Switch>
        </div>
        </div>
    )
}
const LandingPageWithRouter = withRouter(LandingPage)

export default LandingPageWithRouter
