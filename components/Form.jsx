import { useState } from "react";
import { Button } from "react-native";
import { FormInput } from "./FormInput";
import { StyleSheet, Text, View } from 'react-native';


export const Form = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        mobile_number: ""
      });
    
      // The validation being done here is very basic, obviously in real apps we would have seperate pattern matching checks for each formfield and displaying better messages
      // Writing custom validation for forms are usually not worth writing since modern libraries cover everything. 
      // 

      const inputs = [
        {
          id: 1,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "Please enter a valid email address.",
          label: "Email",
          required: true,
        },
        {
            id: 2,
            name: 'mobile_number',
            type: "tel",
            placeholder: "+7(___)___-____",
            errorMessage: 'Please enter a valid phone number.',
            pattern: `^(0|[1-9][0-9]*)$`,
            label: 'Mobile Number',
            required: true
        },
        {
            id: 3,
            name: 'password',
            type: "password",
            placeholder: "Password",
            errorMessage: 'Please enter a valid password. Password should contain atleast 1 letter, 1 number, and 1 special character.',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            label: 'Password',
            required: true
        },
      ];
    
      const handleSubmit = (e) => {
          console.log('w')
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      return (
        <div className="forms">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
                 {/* Not exactly sure why this doesn't work with form data. */}
{/*             <Button
              title="Submit"
              color="#6B21A8"
              accessibilityLabel="Learn more about this purple button"
            /> */}
            <button>Submit</button>

          </form>
        </div>
      );
}
