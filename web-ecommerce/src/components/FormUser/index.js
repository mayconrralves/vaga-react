import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { createUser, updateUser } from '../../store/modules/user/actions';
import MaskedInput from "react-text-mask";

const phoneNumberMask = [
  "(",
    /[1-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
];


export default function FormUser ({ update, user }){
	const [ displayName, setDisplayName ] = useState(user ? user.displayName : '');
	const [ email, setEmail ] = useState(user ? user.email : '');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');
	const [ address, setAddress ] = useState(user ? user.address : '');
    const [birthDate, setBirthDate ] = useState(user ? user.birthDate : '');
    const [phone, setPhone ] = useState(user ? user.phone : '');
	const dispatch = useDispatch();
	const schemaSignUp = Yup.object().shape({
		displayName: Yup.string()
						.required("Nome é obrigatório"),
		email: Yup.string()
				  .email("Digite um email válido")
				  .required("Email é obrigatório"),
        address: Yup.string(),
        phone: Yup.string()
                  .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, 
                            'Telefone Inválido', 
                            { excludeEmptyString: true }
                    ),
        birthDate: Yup.date("Data inválida")
                      .nullable()
                      .min('1900-01-01', 'Data muito antiga')
                      .max(new Date(), 'A data de hoje não pode ser usada'),
		password: update ? Yup.string()
                              .min(6,"Senha muito curta. Deve ter seis ou mais caracteres") : 
                              Yup.string()
                                 .min(6,"Senha muito curta. Deve ter seis ou mais caracteres")
                                 .required("Senha é obrigatória"),
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
                    phone,
                    birthDate,
                }}
                validationSchema={schemaSignUp}
                enableReinitialize={false}
                onSubmit={ async (values)  => {
                    const {
                        displayName, 
                        email, 
                        password, 
                        confirmPassword, 
                        address, 
                        birthDate, 
                        phone 
                    } = values;
                    setDisplayName(displayName);
                    setEmail(email);
                    setPassword(password);
                    setConfirmPassword(confirmPassword);
                    update && setBirthDate(birthDate);
                    update && setPhone(phone);
                    update && setAddress(address);
                    update ? 
                        dispatch(updateUser({displayName, email, password, address, birthDate, phone})) 
                        : 
                        dispatch(createUser({displayName, email, password}));
                    }}
            >
                        <Form data-testid='form'>
                            <Field name='displayName' type='text' placeholder='Seu Nome...' data-testid='display-name'/>
                            <p className="msg-error"><ErrorMessage name="displayName" /></p>
                            <Field name='email' type='email' placeholder='Seu email...' data-testid='email'/>
                            <p className="msg-error"><ErrorMessage name="email" /></p>
                            <Field name='password' type='password' placeholder='Sua senha...' data-testid='password'/>
                            <p className="msg-error"><ErrorMessage name="password" /></p>
                            <Field name='confirmPassword' type='password' placeholder='Confirme sua senha...' data-testid='confirm-password'/>
                            <p className="msg-error"><ErrorMessage name="confirmPassword" /></p>
                            {
                                update && (
                                    <>
                                        <Field name='address' data-testid='address' type='text' placeholder='Seu Endereço...' />
                                        <p className="msg-error"><ErrorMessage name="address" /></p>
                                        <Field name='phone' >
                                            { ({ field }) => (
                                                 <MaskedInput
                                                    { ...field }
                                                    mask={phoneNumberMask}
                                                    id="phone"
                                                    type='tel'
                                                    data-testid='phone'
                                                    placeholder='Seu Telefone...'
                                                />
                                            )}
                                        </Field>
                                        <p className="msg-error"><ErrorMessage name="phone" /></p>
                                        <Field name='birthDate' data-testid='birth-date' type='date' placeholder='Sua Data de Aniversário...' />
                                        <p className="msg-error"><ErrorMessage name="birthDate" /></p>
                                    </>
                                )
                            }					
                            <Field
                                data-testid='signup'
                                name={ update ? 'profile' : 'signup' } 
                                type='submit' 
                                value={ update ? 'Atualizar' : 'Enviar' }
                            />				
                        </Form>
            </Formik>
    )
}

FormUser.propTypes = {
    update: PropTypes.bool,
    user: PropTypes.object,
}