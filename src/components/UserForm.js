import React, {useState} from 'react';

const UserForm = (props) => {
    const {inputs, setInputs} = props;
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstnameError, setfirstnameError] = useState("");
    const [lastnameError, setlastnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [confirmPWError, setconfirmPWError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstname: inputs.firstname,
            lastname: inputs.lastname,
            email: inputs.email,
            password: inputs.password};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const handleChange = (e) => {
        setInputs({
            ...inputs, //spread. bring in everyone, then select only ones want to change
            [e.target.name]: e.target.value
        });
        if(e.target.name === "firstname") {
            if(e.target.value.length < 1) {
                setfirstnameError("First Name required.");
            } 
            else if(e.target.value.length < 2) {
                setfirstnameError("First Name must be at least two characters.");
            } 
            else {
                setfirstnameError("");
            }
        };
        if(e.target.name === "lastname") {
            if(e.target.value.length < 1) {
                setlastnameError("Last Name required.");
            } 
            else if(e.target.value.length < 2) {
                setlastnameError("Last Name must be at least two characters.");
            } 
            else {
                setlastnameError("");
            }
        };
        if(e.target.name === "email") {
            if(e.target.value.length < 1) {
                setemailError("Email required.");
            } 
            else if(e.target.value.length < 2) {
                setemailError("Email must be at least two characters.");
            } 
            else {
                setemailError("");
            }
        };
        if(e.target.name === "password") {
            if(e.target.value.length < 1) {
                setpasswordError("Password required.");
            } 
            else if(e.target.value.length < 8) {
                setpasswordError("Password must be at least 8 characters.");
            } 
            else {
                setpasswordError("");
            }
            if(e.target.value != inputs.confirmPW && inputs.confirmPW != "") {
                setconfirmPWError("Passwords do not match.");
            } 
            else {
                setconfirmPWError("");
            }
        };
        if(e.target.name === "confirmPW") {
            if(e.target.value.length < 1) {
                setconfirmPWError("Please confirm PW.");
            } 
            else if(e.target.value != inputs.password) {
                setconfirmPWError("Passwords do not match.");
            } 
            else {
                setconfirmPWError("");
            }
        };
    }

    return(
        <form onSubmit={createUser}>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label htmlFor="firstname">First Name:</label>
                <input onChange={ handleChange } type="text" name="firstname"/>
                {
                    firstnameError ?
                    <p className="ErrorText">{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="lastname">Last Name:</label>
                <input onChange={ handleChange} type="text" name="lastname"/>
                {
                    lastnameError ?
                    <p className="ErrorText">{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={ handleChange } type="text" name="email"/>
                {
                    emailError ?
                    <p className="ErrorText">{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input onChange={ handleChange } type="text" name="password"/>
                {
                    passwordError ?
                    <p className="ErrorText">{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="confirmPW">Confirm Password:</label>
                <input onChange={ handleChange } type="text" name="confirmPW"/>
                {
                    confirmPWError ?
                    <p className="ErrorText">{ confirmPWError }</p> :
                    ''
                }
            </div>
            <div>
                {
                    firstnameError || lastnameError || emailError || passwordError || confirmPWError || 
                    !inputs.firstname || !inputs.lastname || !inputs.email || !inputs.password || !inputs.confirmPW ?
                    <input type="submit" disabled /> :
                    <input type="submit"/>
                }
            </div>
        </form>
    );
};

export default UserForm;