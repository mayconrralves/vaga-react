import reducer, { INITIAL_STATE } from '../reducer';
import * as Cart from '../actions';
describe('Cart reducer', ()=>{
    const product = {
        id:1,
        quantityPurchase: 2,
    };
    const product2 = {
        id:2,
        quantityPurchase: 3,
    };
    const state = reducer(INITIAL_STATE, Cart.addProductInCart(product));
    const state2 = reducer(state, Cart.addProductInCart(product));
    const state3 = reducer(state, Cart.addProductInCart(product2));
    test('Add cart, only one product', ()=>{
        expect(state).toStrictEqual({
            products:[product],
        });
    });
    test('Add cart, product already exists in cart',()=>{
        expect(state2).toStrictEqual({
            products:[{
                ...product,
                quantityPurchase: 4,
            }],
        });
    });
    test('Add Cart. Add new product, when it already exists', ()=>{
        expect(state3).toStrictEqual({
            products:[
                product,
                product2
            ],
        });
    });
    test('Update product in cart, sum', ()=>{
       const updateSum = reducer(state3, Cart.updateCartSum(0));
       expect(updateSum).toStrictEqual({
           products:[
               {...product,
                quantityPurchase: product.quantityPurchase+1},
               product2
           ],
       });

    });
    test('Update product in cart, sub', ()=>{
        const updateSub = reducer(state3, Cart.updateCartSub(0));
        expect(updateSub).toStrictEqual({
            products:[
                {...product,
                 quantityPurchase: product.quantityPurchase-1},
                product2
            ],
        });
 
     });
    test('Delete product in cart', ()=>{
      const deleteProduct = reducer(state3, Cart.deleteProductInCart(1));
      expect(deleteProduct).toStrictEqual({
          products:[
              product,
          ],
      });
    });
    test('Delete cart',()=>{
        const deleteCart = reducer(state3, Cart.cleanCart());
        expect(deleteCart).toStrictEqual({
            products:[],
        });
    });
    test('Set Products in cart',()=>{
        const setProducts = reducer(INITIAL_STATE, Cart.setCartProducts([product, product2]));
        expect(setProducts).toStrictEqual({
            products:[
                product,
                product2
            ]
        });
    });
    test("return State", ()=>{
        const state = reducer(INITIAL_STATE, ()=>{
            type: "state"
        });
        expect(state).toStrictEqual({
            ...INITIAL_STATE,
        });
    });
});