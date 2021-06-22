import React from 'react';
import { fireEvent, render, screen,  waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import  { useDispatch, useSelector } from 'react-redux';

import FormUser from '.';

jest.mock('react-redux');

const renderPage = ( update ) => {
    const { container } = render(
        <MemoryRouter>
           {
               update ?  <FormUser update/> : <FormUser />
           }
        </MemoryRouter>
 )
 return container;
}
describe('Form User', () =>{
    
    const testEmail = 'test@test.com';
    const testName = 'Test';
    const testPassword = '12345678';
    const testConfirmPassword = '12345678';
    const testPhone = '(32) 33333-3333';
    const testBirthDate = '1980-05-12';
    const testAddress = 'rua dos bobos, 0';

    test('There is a form', ()=>{
        const container = renderPage();
        expect(container.getElementsByTagName('form').length).toEqual(1);
    });
    test('input tags no update props', () => {
        renderPage();
        expect(screen.getByTestId('display-name').getAttribute('name')).toBe('displayName');
        expect(screen.getByTestId('display-name').getAttribute('type')).toBe('text');
        expect(screen.getByTestId('display-name').getAttribute('placeholder')).toBe('Seu Nome...');
        expect(screen.getByTestId('email').getAttribute('name')).toBe('email');
        expect(screen.getByTestId('email').getAttribute('type')).toBe('email');
        expect(screen.getByTestId('email').getAttribute('placeholder')).toBe('Seu email...'); 
        expect(screen.getByTestId('password').getAttribute('name')).toBe('password');
        expect(screen.getByTestId('password').getAttribute('type')).toBe('password');
        expect(screen.getByTestId('password').getAttribute('placeholder')).toBe('Sua senha...');
        expect(screen.getByTestId('confirm-password').getAttribute('name')).toBe('confirmPassword');
        expect(screen.getByTestId('confirm-password').getAttribute('type')).toBe('password');
        expect(screen.getByTestId('confirm-password').getAttribute('placeholder')).toBe('Confirme sua senha...');
        expect(screen.getByTestId('signup').getAttribute('name')).toBe('signup');
        expect(screen.getByTestId('signup').getAttribute('type')).toBe('submit');
        expect(screen.getByTestId('signup').getAttribute('value')).toBe('Enviar'); 
    });
    test ('input tags with update props', () =>{
        renderPage(true);
        expect(screen.getByTestId('phone').getAttribute('name')).toBe('phone');
        expect(screen.getByTestId('phone').getAttribute('type')).toBe('tel');
        expect(screen.getByTestId('phone').getAttribute('placeholder')).toBe('Seu Telefone...'); 
        expect(screen.getByTestId('address').getAttribute('name')).toBe('address');
        expect(screen.getByTestId('address').getAttribute('type')).toBe('text');
        expect(screen.getByTestId('address').getAttribute('placeholder')).toBe('Seu Endereço...');
        expect(screen.getByTestId('birth-date').getAttribute('name')).toBe('birthDate');
        expect(screen.getByTestId('birth-date').getAttribute('type')).toBe('date');
        expect(screen.getByTestId('birth-date').getAttribute('placeholder')).toBe('Sua Data de Aniversário...');
        expect(screen.getByTestId('signup').getAttribute('value')).toBe('Atualizar'); 
    });
    test('if user register', async ()=>{
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);
        renderPage();
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('email'), {
                target: {
                    value: testEmail,
                }
            } );
        });
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('display-name'), {
                target: {
                    value: testName,
                }
            } );
        });
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('password'), {
                target: {
                    value: testPassword,
                }
            } );
        });
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('confirm-password'), {
                target: {
                    value: testConfirmPassword,
                }
            } );
        });
        await waitFor(()=>{
            fireEvent.submit(screen.getByTestId('form'));
        });

        expect(screen.getByTestId('email').value).toBe(testEmail);
        expect(screen.getByTestId('display-name').value).toBe(testName);
        expect(screen.getByTestId('password').value).toBe(testPassword);
        expect(screen.getByTestId('confirm-password').value).toBe(testConfirmPassword);
        expect(dispatch).toHaveBeenCalledWith({
            type: '@user/CREATE_USER_REQUEST',
            payload: {
                displayName: testName,
                email: testEmail,
                password: testPassword,
            }
        });


    });
    test("if there aren't name,email,password", async ()=>{
        renderPage();
        await waitFor(()=>{
            fireEvent.submit(screen.getByTestId('form'));
        });
        expect(screen.getByText("Nome é obrigatório")).toBeTruthy();
        expect(screen.getByText("Email é obrigatório")).toBeTruthy();
        expect(screen.getByText("Senha é obrigatória")).toBeTruthy();
    });
    test("if confirmPassword is different from password", async()=>{
        renderPage();
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('password'), {
                target: {
                    value: testPassword,
                }
            });
        });
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('confirm-password'), {
                target: {
                    value: '1234',
                }
            });
        });
        await waitFor(()=>{
            fireEvent.submit(screen.getByTestId('form') );
        });
        expect(screen.getByText("Password não confere")).toBeTruthy();
    });

    test('if email is not valid', async ()=>{
        renderPage();
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('email'),{
                target: {
                    value: 'testtest.com',
                }
            });
        });
        await waitFor(()=>{
            fireEvent.submit(screen.getByTestId('form'));
        });
        expect(screen.getByText('Digite um email válido')).toBeTruthy();
    });

    test('if phone, birthDate, address  are valid  when update user data', async ()=>{
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);
        renderPage(true);

        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('phone'), {
                target: {
                    value: testPhone,
                },
            }
        )});
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId ('address'), {
                target: {
                    value: testAddress,
                },
            }
        )});
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('birth-date'), {
                target: {
                    value: testBirthDate,
                },
            });
        });
        await waitFor(()=>{
            fireEvent.submit(screen.getByTestId('form'));
        });

        expect(screen.getByTestId('phone').value).toBe(testPhone);
        expect(screen.getByTestId('birth-date').value).toBe(testBirthDate);
        expect(screen.getByTestId('address').value).toBe(testAddress);

    });
    test('if date is very old', async()=>{
        renderPage(true);
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('birth-date'),{
                target: {
                    value: '1899-01-01',
                }
            })
        });
        await waitFor(()=>{
            fireEvent.submit(screen.getByTestId('form'));
        });
        expect(screen.getByText('Data muito antiga')).toBeTruthy();
    });
    test('if date is futute or today', async ()=>{
        renderPage(true);
        const date = new Date().toISOString().match(/\d{4}-\d{2}-\d{2}/g)[0];
        console.log(date)
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('birth-date'),{
                target: {
                    value: date,
                }
            });
        });
        await waitFor(()=>{
            fireEvent.submit(screen.getByTestId('form'));
        });
        screen.debug();
    });
});