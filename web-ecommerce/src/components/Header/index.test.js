import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import  { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Header from './index';


const stateSimulation = {
    auth:{
        token: '',
    }
};
//configure useSelector
const renderPage = () => {
    render(
        <MemoryRouter>
             <Header />
        </MemoryRouter>
 )
}
const mockStateToken = token => {
    stateSimulation.auth.token = token;
    useSelector.mockImplementation( selector => selector( stateSimulation ));
    renderPage();
}


jest.mock('react-redux');
jest.mock('react-responsive');

describe('Header: required tags', ()=>{

    test('if token exits', ()=>{
        mockStateToken('token');
        expect(screen.getByText('Sair')).toBeTruthy();
        expect(screen.getByText('Perfil')).toBeTruthy();
        expect(screen.getByText('Pedidos')).toBeTruthy();
        expect(screen.getByText('Shop')).toBeTruthy();
        expect(screen.getByTestId('carrinho').getElementsByTagName('svg').length).toEqual(1);
    });
    
    test("When the button 'Sair' is clicked", ()=>{
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);
        mockStateToken('token');
        fireEvent.click(screen.getByText('Sair'));
        expect(dispatch).toHaveBeenCalledWith({
                type: '@auth/SIGN_OUT',
        });
    });

    test('if token not exits', () => {
        mockStateToken('');
        expect(screen.getByText('Cadastrar')).toBeTruthy();
        expect(screen.getByText('Entrar')).toBeTruthy();
        expect(screen.getByText('Shop')).toBeTruthy();
        expect(screen.getByTestId('carrinho').getElementsByTagName('svg').length).toEqual(1);
    });
    
    test('if is Mobile or screen less than 910px, mobile menu is shown',()=>{
        useMediaQuery.mockReturnValue(true);
        renderPage();
        expect(screen.getByTestId('menu-mobile').getElementsByTagName('svg').length).toEqual(1);
    });
});

