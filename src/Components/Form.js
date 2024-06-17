import React from 'react'


import { Field, reduxForm } from 'redux-form'
 


const Form=props=> {
  return (
    <div>
        <h1>FORM</h1>
        <div>
            <label>FirstName</label>
        <div>
            <Field name="FirstName" component="input" type="text" placeholder="FirstName"></Field>
        </div>
        </div>
        <div>
            <label>LastName</label>
        <div>
            <Field name="LastName" component="input" type="text" placeholder="LastName"></Field>
        </div>
        </div>
        <div>
            <label>Email</label>
        <div>
            <Field name="Email" component="input" type="email" placeholder="Email"></Field>
        </div>
        </div>
        <div>
            <label>Sex</label>
        <div>
            <Field name="Sex" component="input" type="radio" value="male"></Field>
            <Field name="Sex" component="input" type="radio" value="Female"></Field>
        </div>
        </div>
        <div>
            <label>Favourite Color</label>
        <div>
            <Field name="FavouriteColor" component="input" type="text" placeholder="FavouriteColor"></Field>
            
        </div>
        </div>
        <div>
            <label>Employed</label>
        <div>
            <Field name="Employed" component="input" type="checkbox" ></Field>
            
        </div>
        </div>
        <div>
            <label>Notes</label>
        <div>
            <Field name="Notes" component="input" type="textarea" ></Field>
            
        </div>
        </div>
</div>
  )}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(Form)
