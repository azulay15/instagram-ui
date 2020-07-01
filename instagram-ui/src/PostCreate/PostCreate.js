import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import config from '../config/index';




function PostCreate() {



    const submit = async (values) => {
        const res = await fetch(config.apiUrl + '/posts', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(values)
        });
};

    return (
      <div className="PostCreate">
        <Formik className="register-form"
                initialValues={{image: '', description: ''}}
                onSubmit={submit}>
                {(isSubmitting) => <Form className="col-12" noValidate> 
                      <div className='form-group'>
                          <label htmlFor="image">Image</label>
                          <Field type="file" id="image" name="image" />
                          <ErrorMessage component="small" name="image" className="PostCreate__form__error" />
                      </div> 
                      <div className='form-group'>
                          <label>Description</label>
                          <Field as="textArea" className="form-control" name="description" id="description"/>
                          <ErrorMessage component="small" name="description" className="PostCreate__form__error" />
                      </div>
                      <div className='form-group'>
                          <button type="submit" className="mt-3 PostCreate__submit-btn" >post</button>
                      </div> 
                </Form>}
        </Formik>



      </div>
        
    );
}

export default PostCreate;