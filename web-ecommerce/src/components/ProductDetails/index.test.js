import React from 'react';
import ProductDetails from '.';
import { useDispatch, useSelector } from 'react-redux';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('react-redux');

const proxyName = 'product';
const proxyDescription = 'description product';
const proxyBrand = 'brand';
const proxyPrice = '12.0';
const proxyQuantity = '2';
const productUnavalaible = 'Produto indisponível';
const reQuantity = new RegExp(`^${proxyQuantity}`, "g");
const reName = new RegExp(`^${proxyName}$`, "g");
const rePrice = new RegExp(proxyPrice, "g");
const reBrand = new RegExp(`^${proxyBrand}$`, "g");
const reDescription = new RegExp(`^${proxyDescription}$`, "g");
const reUnavalaible = new RegExp(`^${productUnavalaible}$`);

//quantity > 0
const product = {
    id:'1',
    quantityPurchase: 1,
    img: {
        large: '/teste.jpg',
        middle: '/teste.jpg'
    },
    brand: proxyBrand,
    name: proxyName,
    price: proxyPrice,
    quantity: proxyQuantity,
    description: proxyDescription,
};
//quantity == 0
const product2 = {
    id:'2',
    img: {
        large: '/teste.jpg',
        middle: '/teste.jpg'
    },
    quantityPurchase: 1,
    brand: proxyBrand,
    name: proxyName,
    price: proxyPrice,
    quantity: 0,
    description:proxyDescription ,
};

const stateSimulation = {
    products: {},
    cart: {}
};

//configure useSelector
const mockStateProducts = (id, products, success, cart) => {
    stateSimulation.products = { products, success };
    stateSimulation.cart.products = cart ;
    useSelector.mockImplementation( selector => selector( stateSimulation ));
    renderPage(id);
}
const configure = (id, success) =>{
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    mockStateProducts(id, [product, product2], success, [product, product2]);
    return dispatch;
}
const renderPage = id => {
    render( 
        <MemoryRouter initialEntries={[`/details/${id}`]}>
            <Route path="/details/:id">
                <ProductDetails />
            </Route>
        </MemoryRouter>
    )
}
describe("Product Details",()=>{
    test("Product is avalaible", ()=>{
       configure(1, true);
        expect(screen.getByAltText(reDescription)).toBeTruthy();
        expect(screen.getByText(reBrand)).toBeTruthy();
        expect(screen.getByText(rePrice)).toBeTruthy();
        expect(screen.getAllByText(reName)).toBeTruthy();
        expect(screen.getByText(reQuantity)).toBeTruthy();
        
        
    });
    test('Buy a Product', async ()=>{
        const dispatch = configure(1, true);
        fireEvent.click(screen.getByText('Comprar'));
        await waitFor(()=>{
            fireEvent.change(screen.getByTestId('quantity'), {
                target: {
                    value: '1',
                },
            }
        )});
        expect(dispatch).toHaveBeenNthCalledWith(1,{
            type: '@cart/ADD_CART',
            payload: {
                product,
            },
        });
       
    });
    test("if the page is loaded and products are empty", ()=>{
        const dispatch = configure(1, false);
         expect(dispatch).toHaveBeenLastCalledWith({
            type: '@products/GET_REQUEST',
        });
    });
    test('Product is unavalaible',()=>{
        configure(2, true);
        expect(screen.getByText(reUnavalaible)).toBeTruthy();
    });
    test('Loading', ()=>{
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);
        mockStateProducts(1, [], true, []);
        expect(screen.getByRole('button')).toBeTruthy();
    });
});