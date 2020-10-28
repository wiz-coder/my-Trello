import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from "./Signup.module.css"
import {signupSchema} from "../Validation/SignupValidation"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const Signup = (props) => {
    const [Firstname,setFirstname] = useState('')
    const [Lastname,setLastname] = useState('')
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [Error,setError] = useState('')

    const firstnameHandler = (e) => {
        e.preventDefault()
        e.persist()
        setFirstname(e.target.value)

    }
    const lastnameHandler = (e) => {
        e.preventDefault()
        e.persist()
        setLastname(e.target.value)
    }
    const emailHandler = (e) => {
        e.preventDefault()
        e.persist()
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        e.preventDefault()
        e.persist()
        setPassword(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()
        e.persist()
        const formData = {firstname:Firstname,lastname:Lastname,email:Email,password:Password}
        const validation = signupSchema.validate(formData)
        if(validation.error){
          
          setError(validation.error.message)
        } 
        else{
          setError("")
        }
        
    }


    const styles = useStyles()
    const formClass = [styles.root,classes.form_container].join(" ")
    const formFieldClass = "outlined-required"
    return (
        <form className={formClass} onSubmit={formSubmitHandler}>
            <div>
            
        <TextField
        className={formFieldClass} 
        label="First Name"
        helperText="alpha chars - min 3 to max 10"
        variant="outlined"
        onChange = {firstnameHandler}
        
        
      />
            </div>
            <div>
            
        <TextField
        className={formFieldClass}
        label="Last Name"
        helperText="alpha chars - min 3 to max 10"
        variant="outlined"
        onChange = {lastnameHandler}
      />
            </div>
            <div>
            
        <TextField
        className={formFieldClass}
        label="Email"
        helperText="example: hey@domain.com"
        variant="outlined"
        type="email"
        onChange = {emailHandler}
        
      />
            </div>
            <div>
            
        <TextField
        className={formFieldClass}
        label="Password"
        helperText="alphanum chars - min 5 to max 30"
        variant="outlined"
        type="password"
        onChange = {passwordHandler}
      />
            </div>
          <div>
          <Button  variant="contained" color="primary" type="submit">
          signup
        </Button>
          </div>
          <div className={Error.length>0?classes.failure:classes.success}>
          <small className={classes.error}>{Error}</small>
          </div>
        </form>
    )
}

export default Signup
