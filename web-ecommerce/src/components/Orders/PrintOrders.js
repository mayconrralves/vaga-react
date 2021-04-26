import React from 'react';

/**  Print each order's table*/
export default function  printOrders({ orders }){
    const orderKeys = Object.keys(orders);
    let total = 0;
    /** Print each table's item */
    const listItemOrders = items => {
       const keys = Object.keys(items);
       total = 0;
       return items.map((item, index)=>{
           total += parseFloat(item.price) * parseFloat(item.quantityPurchase);
           const totalItem = parseFloat(item.price) * parseFloat(item.quantityPurchase).toFixed(2)
           return (
           <tr key={index}>
               <td>{ item.name}</td>
               <td>{ item.description}</td>
               <td>{ item.quantityPurchase}</td>
               <td> R$ { item.price.toLocaleString()}</td>
               <td> R$ {totalItem.toFixed(2).replace('.', ',') }</td>
           </tr>
       )});
    }

    return orderKeys.length ? orderKeys.map((key, index)=> (
        <li key={index}>
                <h3>Pedido: {key}</h3>
                <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Unidades</th>
                        <th>Preço</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                {   
                    listItemOrders(orders[key])
                }
                </tbody> 
                <tfoot>
                    <tr>
                        <td colSpan={2}> Valor Total: </td>
                        <td colSpan={3}>R$ {total.toFixed(2).replace('.', ',')}</td>
                    </tr>
                </tfoot>    
            </table>
        </li>
    )) : (
        <p>Você não fez nenhum pedido.</p>
    )
}