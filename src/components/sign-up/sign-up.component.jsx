import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword ){
            alert("Passwords don't match.")
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )

            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch (error){
            console.error(error);
        }


    }

    handleChange = event => {
        const {name, value } = event.target;
        
        this.setState({ [name]:value })
    }

    render(){
        const {displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title' >I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <FormInput 
                        label="Display Name"
                        handleChange={this.handleChange}
                        type="text"
                        name="displayName"
                        value={displayName}
                        required
                    />
                    <FormInput 
                        label="Email"
                        handleChange={this.handleChange}
                        type="email"
                        name="email"
                        value={email}
                        required
                    />
                    <FormInput 
                        label="Password"
                        handleChange={this.handleChange}
                        type="password"
                        name="password"
                        value={password}
                        required
                    />
                    <FormInput 
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        required
                    />

                    <CustomButton type="submit" >Sign Up</CustomButton>
                </form>

            </div>
        )
    }

};


export default SignUp;