import React, { useState, useContext } from 'react';
import { Formik, Form, Field,  } from 'formik';
import { LoginSchema } from './login.schema';
import config from '../config/index';
import './Login.scss';
import { UserContext } from '../user-context';
import { useHistory } from 'react-router-dom';


function Login() {

  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const submit = async (values) => {
    const res = await fetch(config.apiUrl + '/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(values)
    });
    if(res.status === 200){
      const loggedUser = await res.json();
      setUser(loggedUser);
      history.push('/');
    }else if(res.status === 401) {
      console.log('no')
    }else {
        console.log(res.status);
    }
    return res;
};

  return (
    <div className="container d-flex row justify-content-around">
        <div className="Login col-lg-4 my-lg-5 m-4"> 
          <h2 className="login-header">Login</h2>
          <Formik 
              className="login-form"
              initialValues={{username: '', password: ''}}
              validationSchema={LoginSchema}
              onSubmit={submit}>

              {({ errors }) => (
                              <Form className="col-12 mt-5 px-0" noValidate> 

                                  <div className='form-group'>
                                      <label htmlFor="username">Username: </label>
                                      <Field name='username' id='username' className='form-control' placeholder="Enter your Username"/>
                                  </div>
                                  <div className='form-group'>
                                      <label htmlFor="password">Password: </label>
                                      <Field name='password' type="password" id='password' className='form-control' placeholder="Enter your password"/>
                                  </div>
                                  <div className='form-group text-right'>
                                      <button type="submit" className="btn btn-primary btn-md btn-block" >Login</button>
                                  </div>
                              </Form>
              )}
          </Formik>
      </div>
      
      <div className="media col-lg-5 my-lg-5 m-4">
                    <h3 className="text-on-image p-5">Share your photos</h3>
      </div>

  </div> 

  );
}

export default Login;