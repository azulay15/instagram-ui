import React, { useState } from 'react';
import { Formik, Form, Field,  } from 'formik';
import { RegisterSchema } from './register.schema';
import { useHistory } from 'react-router-dom';
import config from '../config/index';
import './Register.scss';



function Register() {

    const history = useHistory();
    const [showEroor, setError] = useState(false);

    const submit = async (values) => {
        setError(false);
        const res = await fetch(config.apiUrl + '/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        if(res.status === 201){
            history.push('/login');
        }else if(res.status === 409) {
            setError(true);
        }else {
            console.log('Unknown error');
        }
        return res;
};

  return (
      <div className="Register d-flex row justify-content-around">
        <div className="Register col-lg-4 my-lg-5 m-4"> 
            <h2 className="register-header">Register page</h2>
            <Formik 
                className="register-form"
                initialValues={{username: '', password: '', enmail: '', agreeTerms: false}}
                validationSchema={RegisterSchema}
                onSubmit={submit}>

                {({ errors, touched, isSubmitting }) => (
                                <Form className="col-12 mt-5 px-0" noValidate> 
                                    { showEroor && <div className='form-group'>
                                        <div className='alert alert-danger'>
                                            Email or Username already exists
                                        </div>
                                    </div>}
                                    <div className='form-group'>
                                        <label htmlFor="username">Username: </label>
                                        <Field name='username' id='username' className='form-control' placeholder="2-16 characters"/>
                                        { errors.username && touched.username && <small className="text-danger pl-2">{errors.username}</small> }
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="email">Email: </label>
                                        <Field name='email' id='email' className='form-control' placeholder="Email address..."/>
                                        { errors.email && touched.email && <small className="text-danger pl-2">{errors.email}</small> }
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="password">Password: </label>
                                        <Field name='password' type="password" id='password' className='form-control' placeholder="6-16 characters"/>
                                        { errors.password && touched.password && <small className="text-danger pl-2">{errors.password}</small> }
                                    </div>
                                    <div className='form-group form-check'>
                                        <Field name='agreeTerms' type="checkbox" id='agreeTerms' className='form-check-input'/>
                                        <label htmlFor="agreeTerms" className="form-check-label">Agree to terms: </label>
                                        { errors.agreeTerms && touched.agreeTerms && <small className="text-danger pl-2">{errors.agreeTerms}</small> }
                                    </div>
                                    <div className='form-group text-right'>
                                        <button type="submit" className="btn btn-primary btn-md btn-block" disabled={isSubmitting}>Submit</button>
                                    </div>
                                </Form>
                )}


            </Formik>
        </div>    
        <div className="media col-lg-5 my-lg-5 m-4">
                <h3 className="media-body p-5">Share your photos</h3>
        </div>

    </div>  	    
  );
}

export default Register;