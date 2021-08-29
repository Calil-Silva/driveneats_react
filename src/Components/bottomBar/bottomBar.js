import React, { useState } from "react"

export default function BottomBar( {countDishes, countDrinks, countDesserts, arrayDish, dishAmount} ) {
    const[myArray, setMyArray] = useState([{dish: arrayDish, amount: dishAmount}])

    function setArray() {
        setMyArray([...myArray, {dish: arrayDish, amount: dishAmount}])
        let noRepetitionArray = [... new Set(myArray)]
        console.log(noRepetitionArray)
    }


    if(countDishes > 0 && countDrinks > 0 && countDesserts > 0) {
        return (
            <footer className="bottomBar">
                <div className="confirmOrder confirmed">
                    <a href="#" onClick={setArray}>Finalizar Pedido</a>
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


