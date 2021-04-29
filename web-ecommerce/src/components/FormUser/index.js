import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { createUser, updateUser } from '../../store/modules/user/actions';



export default function FormUser ({ update, user }){
	const [ displayName, setDisplayName ] = useState(user ? user.displayName : '');
	const [ email, setEmail ] = useState(user ? user.email : '');
	const [ password, setPassword ] = useState(user ? user.password : '');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ address, setAddress ] = useState(user ? user.address : '');
	const dispatch = useDispatch();

	const schemaSignUp = Yup.object().shape({
		displayName: Yup.string()
						.required("Nome é obrigatório"),
		email: Yup.string()
				  .email("Digite um email válido")
				  .required("Email é obrigatório"),
        address: Yup.string(),
		password: update ? Yup.string()
                              .min(6,"Senha muito curta. Deve ter seis ou mais caracteres") : 
                              Yup.string()
                                 .min(6,"Senha muito curta. Deve ter seis ou mais caracteres")
                                 .required(),
		confirmPassword: Yup.string().test({
			name: 'password-match',
			test: function(value) { return this.parent.password === value },
			message: "Password não confere",
		} ),
	});
   
	return (
            <Formik
                initialValues={{
                    displayName,
                    email,
                    password,
                    confirmPassword,
                    address,
                }}
                validationSchema={schemaSignUp}
                enableReinitialize={false}
                onSubmit={ values  => {
                    const {displayName, email, password, confirmPassword, address } = values;
                    setDisplayName(displayName);
                    setEmail(email);
                    setPassword(password);
                    setConfirmPassword(confirmPassword);
                    update && setAddress(address);
                    update ? 
                        dispatch(updateUser({displayName, email, password, address})) 
                        : 
                        dispatch(createUser({displayName, email, password}));
                    }}
            >
                        <Form>
                            <Field name='displayName' type='text' placeholder='Seu Nome...' />
                            <p className="msg-error"><ErrorMessage name="displayName" /></p>
                            <Field name='email' type='email' placeholder='Seu email...' />
                            <p className="msg-error"><ErrorMessage name="email" /></p>
                            {
                                update && (
                                    <>
                                        <Field name='address' type='text' placeholder='Seu Endereço...' />
                                        <p className="msg-error"><ErrorMessage name="address" /></p>
                                    </>
                                )
                            }					
                            <Field name='password' type='password' placeholder='Sua senha...' />
                            <p className="msg-error"><ErrorMessage name="password" /></p>
                            <Field name='confirmPassword' type='password' placeholder='Confirme sua senha...' />
                            <p className="msg-error"><ErrorMessage name="confirmPassword" /></p>
                            <Field 
                                name={ update ? 'profile' : 'signup' } 
                                type='submit' 
                                value={ update ? 'Atualizar' : 'Enviar' }
                            />				
                        </Form>
            </Formik>
    )
}