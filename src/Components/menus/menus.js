import Desserts from "./desserts";
import Dishes from "./dishes";
import Drinks from "./drinks";
import React, { useState } from "react";
import BottomBar from "../bottomBar/bottomBar";

export default function Menus() {

    const [orderDish, setOrderDish] = useState(0)
    const [orderDrink, setOrderDrink] = useState(0)
    const [orderDessert, setOrderDessert] = useState(0)
    const [firstDishAmount, setfirstDishAmount] = useState(1)
    const [secondDishAmount, setSecondDishAmount] = useState(1)
    const [thirdDishAmount, setThirdDishAmount] = useState(1)
    const [firstDrinkAmount, setfirstDrinkAmount] = useState(1)
    const [secondDrinkAmount, setSecondDrinkAmount] = useState(1)
    const [thirdDrinkAmount, setThirdDrinkAmount] = useState(1)
    const [firstDessertAmount, setfirstDessertAmount] = useState(1)
    const [secondDessertAmount, setSecondDessertAmount] = useState(1)
    const [thirdDessertAmount, setThirdDessertAmount] = useState(1)
    const [firstDish, setfirstDish] = useState(false);
    const [secondDish, setsecondDish] = useState(false);
    const [thirdDish, setthirdDish] = useState(false);
    const [firstDrink, setfirstDrink] = useState(false);
    const [secondDrink, setsecondDrink] = useState(false);
    const [thirdDrink, setthirdDrink] = useState(false);
    const [firstDessert, setfirstDessert] = useState(false);
    const [secondDessert, setsecondDessert] = useState(false);
    const [thirdDessert, setthirdDessert] = useState(false);

    const dishes = [
        {
            option: "Frango",
            img: "./files/frangoAssado.png",
            description: "Um pouco de batata, um pouco de salada",
            price: "R$ 14,90",
            hasBoxShadowVerde: (choice) => (choice === "boxShadowVerde") ? setfirstDish(true) : setfirstDish(false),
            status: firstDish,
            setAmount: (choice) => setfirstDishAmount(choice),
            amount: firstDishAmount
        },
        {
            option: "Carne",
            img: "./files/frangoAssado.png",
            description: "Um pouco de batata, um pouco de salada",
            price: "R$ 11,99",
            hasBoxShadowVerde: (choice) => (choice === "boxShadowVerde") ? setsecondDish(true) : setsecondDish(false),
            status: secondDish,
            setAmount: (choice) => setSecondDishAmount(choice),
            amount: secondDishAmount
        },
        {
            option: "Peixe",
            img: "./files/frangoAssado.png",
            description: "Um pouco de batata, um pouco de salada",
            price: "R$ 21,75",
            hasBoxShadowVerde: (choice) => (choice === "boxShadowVerde") ? setthirdDish(true) : setthirdDish(false),
            status: thirdDish,
            setAmount: (choice) => setThirdDishAmount(choice),
            amount: thirdDishAmount
        }
    ]

    const drinks = [
        {
            option: "Coquinha gelada",
            img: "./files/bebida.png",
            description: "Um pouco de batata, um pouco de salada",
            price: "R$ 4,90",
            hasBoxShadowVerde: (choice) => (choice === "boxShadowVerde") ? setfirstDrink(true) : setfirstDrink(false),
            status: firstDrink,
            setAmount: (choice) => setfirstDrinkAmount(choice),
            amount: firstDrinkAmount
        },
        {
            option: "Guarana gelada",
            img: "./files/bebida.png",
            description: "Um pouco de batata, um pouco de salada",
            price: "R$ 7,80",
            hasBoxShadowVerde: (choice) => (choice === "boxShadowVerde") ? setsecondDrink(true) : setsecondDrink(false),
            status: secondDrink,
            setAmount: (choice) => setSecondDrinkAmount(choice),
            amount: secondDrinkAmount
        },
        {
            option: "Fantinha gelada",
            img: "./files/bebida.png",
            description: "Um pouco de batata, um pouco de salada",
            price: "R$ 15,00",
            hasBoxShadowVerde: (choice) => (choice === "boxShadowVerde") ? setthirdDrink(true) : setthirdDrink(false),
            status: thirdDrink,
            setAmount: (choice) => setThirdDrinkAmount(choice),
            amount: thirdDrinkAmount
        }
    ]
    
    const desserts = [
        {
            option: "Brigadeirão",
            img: "./files/sobremesa.png",
            description: "Um pouco de batata, um pouco de salada",
            price: "R$ 7,90",
            hasBoxShadowVerde: (choice) => (choice === "boxShadowVerde") ? setfirstDessert(true) : setfirstDessert(false),
            status: firstDessert,
            setAmount: (choice) => setfirstDessertAmount(choice),
            amount: firstDessertAmount
        },
    
        {
            option: "Pudim",
            img: "./files/sobremesa.png",
            description: "Um pouco de batata, um pouco de salada",
            price: "R$ 15,99",
            hasBoxShadowVerde: (choice) => (choice === "boxShadowVerde") ? setsecondDessert(true) : setsecondDessert(false),
            status: secondDessert,
            setAmount: (choice) => setSecondDessertAmount(choice),
            amount: secondDessertAmount
        },
    
        {
            option: "Bolo",
            img: "./files/sobremesa.png",
            description: "Um pouco de batata, um pouco de salada",
            price: "R$ 24,90",
            hasBoxShadowVerde: (choice) => (choice === "boxShadowVerde") ? setthirdDessert(true) : setthirdDessert(false),
            status: thirdDessert,
            setAmount: (choice) => setThirdDessertAmount(choice),
            amount: thirdDessertAmount
        }
    ]

    const dishesArray = dishes.map((element, index) => <Dishes key={index} dish={element.option} img={element.img} description={element.description} price={element.price} orderAmount={(order) => (order === "boxShadowVerde" ? setOrderDish(orderDish + 1) : setOrderDish(orderDish - 1))} dishAmount={element.setAmount} hasBoxShadowVerde={element.hasBoxShadowVerde} />)
    const drinksArray = drinks.map((element, index) => <Drinks key={index} drink={element.option} img={element.img} description={element.description} price={element.price}  orderAmount={(order) => (order === "boxShadowVerde" ? setOrderDrink(orderDrink + 1) : setOrderDrink(orderDrink - 1))} drinkAmount={element.setAmount} hasBoxShadowVerde={element.hasBoxShadowVerde}/>)
    const dessertsArray = desserts.map((element, index) => <Desserts key={index} drink={element.option} img={element.img} description={element.description} price={element.price}  orderAmount={(order) => (order === "boxShadowVerde" ? setOrderDessert(orderDessert + 1) : setOrderDessert(orderDessert - 1))} dessertAmount={element.setAmount} hasBoxShadowVerde={element.hasBoxShadowVerde}/>)
    // dishesArray.forEach((el) => {if(el.props.status === true) {console.log(el)}})
    return (
        <>
            <main className="menus">
                <header className="menuTitle">
                    <p>Primeiro, seu prato</p>
                </header>
                <section className="menuOptions">
                    {dishesArray}
                </section>

                <header className="menuTitle">
                    <p>Agora, sua bebida</p>
                </header>
                <section className="menuOptions">
                    {drinksArray}
                </section>

                <header className="menuTitle">
                    <p>Por fim, sua sobremesa</p>
                </header>
                <section className="menuOptions">
                    {dessertsArray}
                </section>
            </main>

            <BottomBar countDishes={orderDish} countDrinks={orderDrink} countDesserts={orderDessert} dishes={dishes} drinks={drinks} desserts={desserts}/>
        </>
    )
}