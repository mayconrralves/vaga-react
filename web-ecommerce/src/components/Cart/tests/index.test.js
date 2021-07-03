import React from 'react';
import {render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Cart from '../index';

const proxyName = 'product01';
const proxyDescription = 'description product01';
const proxyBrand = 'brand';
const proxyPrice = '12.0';
const proxyQuantity = '2';
const proxyQuantityPurchase = '2';
const reQuantity = new RegExp(proxyQuantity, "g");
const reQuantityPurchase = new RegExp(proxyQuantityPurchase, "g");
const reName = new RegExp(proxyName, "g");
const reBrand = new RegExp(proxyBrand, "g");
const reDescription = new RegExp(proxyDescription, "g");
const renderPage = () => {
    render(
        <MemoryRouter>
             <Cart />
        </MemoryRouter>
 )
}
//configure useSelector
const mockStateCart = (products=[]) => {
    const stateSimulation = {
        cart: {
            products,
        }
    };
    useSelector.mockImplementation( selector => selector( stateSimulation ));
    renderPage();
}
jest.mock('react-redux');
jest.mock('react-responsive');
describe('Cart ',()=>{
    test('if cart is empty',()=>{
        mockStateCart();
        expect(screen.getAllByRole('button')).toBeTruthy();
    });
    describe('if cart has a product',()=>{
       test('if product properties exists',()=>{
            mockStateCart([{
                name: proxyName,
                img: {
                    middle: `${proxyDescription}.jpg`,
                },
                brand: proxyBrand,
                description: proxyDescription,
                price: proxyPrice,
                quantity: proxyQuantity,
                quantityPurchase: proxyQuantityPurchase
            }]);
            expect(screen.getByText('Marca:')).toBeTruthy();
            expect(screen.getByTestId('brand').innerHTML.match(reBrand)[0]).toBe(proxyBrand);
            expect(screen.getByText('Descrição:')).toBeTruthy();
            expect(screen.getByTestId('description').innerHTML.match(reDescription)[0]).toBe(proxyDescription);
            expect(screen.getByText('Preço:')).toBeTruthy();
            expect(screen.getByText(proxyPrice)).toBeTruthy();
            expect(screen.getByText('Estoque:')).toBeTruthy();
            expect(screen.getByTestId('stock').innerHTML.match(reQuantity)[0]).toBe(proxyQuantity);
            expect(screen.getByAltText(`Imagem: ${proxyDescription}`)).toBeTruthy();
            expect(screen.getByTestId('quantity-purchase').innerHTML.match(reQuantityPurchase)[0]).toBe(proxyQuantityPurchase);
            expect(screen.getByText(`Total: R$ ${proxyPrice*proxyQuantity}`)).toBeTruthy();
            expect(screen.getByTestId('minus')).toBeTruthy();
            expect(screen.getByTestId('sum')).toBeTruthy();
            expect(screen.getByText('Esvaziar carrinho')).toBeTruthy();
            expect(screen.getByText('Fechar Carrinho')).toBeTruthy();
            screen.debug();
       });
    });
});