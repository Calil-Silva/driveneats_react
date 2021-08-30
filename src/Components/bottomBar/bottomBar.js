import React, { useState } from "react";

export default function BottomBar( {countDishes, countDrinks, countDesserts, dishes, drinks, desserts} ) {
    let selectedDishesArray;
    let selectedDrinksArray;
    let selectedDessertsArray;
    let prepMsgDish;
    let prepMsgDrink;
    let prepMsgDessert;
    let orderArray = [];
    let msg = "";

    const [encodeMsg, setEncodeMsg] = useState("")


    function selectedDishes() {
        selectedDishesArray = dishes.filter((element) => element.status === true);
        selectedDrinksArray = drinks.filter((element) => element.status === true);
        selectedDessertsArray = desserts.filter((element) => element.status === true);
        prepMsgDish = selectedDishesArray.map((el) => (el.amount > 1) ? `Prato: ${el.option} (${el.amount}x)` : `Prato: ${el.option}`);
        prepMsgDrink = selectedDrinksArray.map((el) => (el.amount > 1) ? `Bebida: ${el.option} (${el.amount}x)` : `Bebida: ${el.option}`);
        prepMsgDessert = selectedDessertsArray.map((el) => (el.amount > 1) ? `Sobremesa: ${el.option} (${el.amount}x)` : `Sobremesa: ${el.option}`);
        orderArray = ["Olá, gostaria de fazer o pedido:", ...prepMsgDish, ...prepMsgDrink, ...prepMsgDessert];

        for(let i = 0; i < orderArray.length; i ++) {
            msg += `${orderArray[i]} \n`;
        }
        setEncodeMsg(encodeURIComponent(msg));
    }

    if(countDishes > 0 && countDrinks > 0 && countDesserts > 0) {
        return (
            <footer className="bottomBar">
                <div className="confirmOrder confirmed">
                    <a href={`https://wa.me/?text=${encodeMsg}`} onClick={selectedDishes}>Finalizar Pedido</a>
                </div>
            </footer>
        )
    } else {
        return (
            <footer className="bottomBar">
                <div className="confirmOrder">
                    <h3>Selecione os 3 itens para fechar o pedido</h3>
                </div>
            </footer>
        )
    }    
}


