import React from 'react';

const FormResult = (props) => {
    const {firstname, lastname, email, password, confirmPW} = props.data;
    return(
        <div>
            <h3>Your Form Data</h3>
            <p>First Name:{firstname}</p>
            <p>Last Name:{lastname}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
            <p>Confirm PW:{confirmPW}</p>
        </div>
    );
};

export default FormResult;