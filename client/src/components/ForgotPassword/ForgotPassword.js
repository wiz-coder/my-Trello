import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import classes from "./ForgotPassword.module.css"
import {emailVerificationSchema} from "../Validation/SignupValidation"
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const ForgotPassword = (props) => {
    const [Email,setEmail] = useState('')
    const [Error,setError] = useState('')

    const emailHandler = (e) => {
        e.preventDefault()
        e.persist()
        setEmail(e.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        e.persist()
        const formData = {email:Email}
        const validation = emailVerificationSchema.validate(formData)
        if(validation.error){
            
          setError(validation.error.message)
        } 
        else{
          setError("")
        }
        
    }

    const styles = useStyles()
    const formClass = [styles.root,classes.form_container].join(" ")
    return (
        <form className={formClass} onSubmit={formSubmitHandler}>
        <div>
            
        <TextField
        className="outlined-required"
        label="Email"
        helperText="example: hey@domain.com"
        variant="outlined"
        type="email"
        onChange={emailHandler}
      />
            </div>
            <div>
            <Button variant="contained" color="primary" type="submit">
            verify email
          </Button>
            
            </div>
            <div className={Error.length>0?classes.failure:classes.success}>
            <small className={classes.error}>{Error}</small>
            </div>
        </form>
    )
}

export default ForgotPassword
