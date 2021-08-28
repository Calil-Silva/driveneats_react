import Desserts from "./desserts";
import Dishes from "./dishes";
import Drinks from "./drinks";
import React, { useState } from "react";
import BottomBar from "../bottomBar/bottomBar";

const dishes = [
    {
        dish: "Frango",
        img: "./files/frangoAssado.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 14,90"
    },

    {
        dish: "Carne",
        img: "./files/frangoAssado.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 11,99"
    },

    {
        dish: "Peixe",
        img: "./files/frangoAssado.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 25,40"
    },

    {
        dish: "Ovos",
        img: "./files/frangoAssado.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 17,00"
    },

    {
        dish: "Carne de soja",
        img: "./files/frangoAssado.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 32,40"
    }
]

const drinks = [
    {
        drink: "Coquinha gelada",
        img: "./files/bebida.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 4,90"
    },

    {
        drink: "Guarana gelada",
        img: "./files/bebida.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 7,80"
    },

    {
        drink: "Fantinha gelada",
        img: "./files/bebida.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 15,00"
    },

    {
        drink: "Dollynha gelada",
        img: "./files/bebida.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 21,00"
    },

    {
        drink: "Chá gelado",
        img: "./files/bebida.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 9,50"
    }
]

const desserts = [
    {
        desserts: "Brigadeirão",
        img: "./files/sobremesa.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 7,90"
    },

    {
        desserts: "Pudim",
        img: "./files/sobremesa.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 15,99"
    },

    {
        desserts: "Bolo",
        img: "./files/sobremesa.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 24,90"
    },

    {
        desserts: "Beijinho",
        img: "./files/sobremesa.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 10,40"
    },

    {
        desserts: "Frutas",
        img: "./files/sobremesa.png",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 27,90"
    }
]

export default function Menus() {

    const [orderDish, setOrderDish] = useState(0)
    const [orderDrink, setOrderDrink] = useState(0)
    const [orderDessert, setOrderDessert] = useState(0)

    return (
        <>
            <main className="menus">
                <header className="menuTitle">
                    <p>Primeiro, seu prato</p>
                </header>
                <section className="menuOptions">
                    {dishes.map((element, index) => <Dishes key={index} dish={element.dish} img={element.img} description={element.description} price={element.price} fun={(order) => (order === "boxShadowVerde" ? setOrderDish(orderDish + 1) : setOrderDish(orderDish - 1))} />)}
                </section>

                <header className="menuTitle">
                    <p>Agora, sua bebida</p>
                </header>
                <section className="menuOptions">
                    {drinks.map((element, index) => <Drinks key={index} drink={element.drink} img={element.img} description={element.description} price={element.price}  fun={(order) => (order === "boxShadowVerde" ? setOrderDrink(orderDrink + 1) : setOrderDrink(orderDrink - 1))}/>)}
                </section>

                <header className="menuTitle">
                    <p>Por fim, sua sobremesa</p>
                </header>
                <section className="menuOptions">
                    {desserts.map((element, index) => <Desserts key={index} drink={element.dessert} img={element.img} description={element.description} price={element.price}  fun={(order) => (order === "boxShadowVerde" ? setOrderDessert(orderDessert + 1) : setOrderDessert(orderDessert - 1))}/>)}
                </section>
            </main>

            <BottomBar countDishes={orderDish} countDrinks={orderDrink} countDesserts={orderDessert}/>
        </>
    )
}