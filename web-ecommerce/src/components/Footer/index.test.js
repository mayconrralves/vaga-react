import React from "react";
import { cleanup, render, screen } from '@testing-library/react';

import Footer from './index.js';

describe('Footer', () => {

    beforeEach(()=>{
        render(<Footer />)
    });
    afterEach(()=>{
        cleanup();
    });
    test('Existe um link para o facebook', () => {
     //screen.debug()
        expect(screen.getByTestId('facebook').getAttribute('href')).toEqual('https://www.facebook.com');
    });
    test('Link para o facebook tem um ícone', () => {
        expect(screen.getByTestId('facebook').getElementsByTagName('svg').length).toEqual(1);
    });
    test('Existe um link para o twitter', () =>{
        expect(screen.getByTestId('twitter').getAttribute('href')).toEqual('https://www.twitter.com');
    })
    test('Existe um link para o instagram', ()=>{
         expect(screen.getByTestId('instagram').getAttribute('href')).toEqual('https://www.instagram.com');
    });
    test('Existe um link para o email', ()=>{
        expect(screen.getByTestId('mailto').getAttribute('href')).toEqual('mailto:teste@teste.com');
    });
  });

// it("Tem links para o facebook, twitter, istagram e mailto",()=>{
//     act(()=>{
//         render(<Footer />, container);
//     });
//     expect(
//         container
//             .querySelector("[data-testid='facebook']")
//             .getAttribute("href")
//     ).toEqual("https://www.facebook.com");
//     expect(
//         container
//             .querySelector("[data-testid='twitter']")
//             .getAttribute("href")
//     ).toEqual("https://www.twitter.com");
//     expect(
//         container
//             .querySelector("[data-testid='instagram']")
//             .getAttribute("href")
//     ).toEqual("https://www.instagram.com");
// });