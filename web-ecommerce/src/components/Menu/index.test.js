import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { fireEvent, render, screen } from '@testing-library/react';
import {MemoryRouter } from 'react-router-dom';
import history from '../../services/history';
import Menu from '.';

jest.mock('react-redux');
jest.mock('react-responsive');
jest.mock('../../services/history');

const stateSimulation = {
    auth:{
        token: '',
    }
};
const renderPage = () => {
    render(
        <MemoryRouter>
             <Menu/>
        </MemoryRouter>
 )
}
//configure useSelector
const mockStateToken = token => {
    stateSimulation.auth.token = token;
    useSelector.mockImplementation( selector => selector( stateSimulation ));
    renderPage();
}


describe('Menu', ()=>{
    describe('If user is not logged', ()=>{
        test('if exists links', ()=>{
            mockStateToken();
            expect(screen.getByText('Entrar')).toBeTruthy();
            expect(screen.getByText('Cadastrar')).toBeTruthy();
            expect(screen.getByText('Shop')).toBeTruthy();
            expect(screen.getByText('Voltar')).toBeTruthy();
        });
    });
    describe('If user is logged', ()=>{
        test('if exists links and buttons', ()=>{
            mockStateToken(true);
            useMediaQuery.mockReturnValue(false);
            expect(screen.getByText('Pedidos')).toBeTruthy();
            expect(screen.getByText('Perfil')).toBeTruthy();
            expect(screen.getByText('Shop')).toBeTruthy();
            expect(screen.queryByText('Sair')).toBeFalsy();
            expect(screen.getByText('Voltar')).toBeTruthy();
        });
        test("if there is an exit button when the screen is smaller than 550px", ()=>{
            mockStateToken(true);
            useMediaQuery.mockReturnValue(true);
            expect(screen.queryByText('Sair')).toBeFalsy();
        });
        test('When click in exit button must close session', ()=>{
            const dispatch = jest.fn();
            useMediaQuery.mockReturnValue(true);
            useDispatch.mockReturnValue(dispatch);
            mockStateToken(true);
            fireEvent.click(screen.getByText('Sair'));
            expect(dispatch).toHaveBeenCalledWith({
                type: '@auth/SIGN_OUT',
            });
            expect(dispatch).toHaveBeenCalledTimes(1);
        });
    });
    test("when is clicked the button 'Voltar'",()=>{
        const goBack = jest.fn();
        history.goBack.mockImplementation(goBack);
        mockStateToken();
        fireEvent.click(screen.getByText('Voltar'));
        expect(goBack).toHaveBeenCalledTimes(1);
    });
});