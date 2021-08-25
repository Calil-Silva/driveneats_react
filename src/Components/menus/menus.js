import Desserts from "./desserts";
import Dishes from "./dishes";
import Drinks from "./drinks";

const dishes = [
    {
        dish: "Frango",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 14,90"
    },

    {
        dish: "Carne",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 11,99"
    },

    {
        dish: "Peixe",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 25,40"
    },

    {
        dish: "Ovos",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 17,00"
    },

    {
        dish: "Carne de soja",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 32,40"
    }
]

const drinks = [
    {
        drink: "Coquinha gelada",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 4,90"
    },

    {
        drink: "Guarana gelada",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 7,80"
    },

    {
        drink: "Fantinha gelada",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 15,00"
    },

    {
        drink: "Dollynha gelada",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 21,00"
    },

    {
        drink: "Chá gelado",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 9,50"
    }
]

const desserts = [
    {
        desserts: "Brigadeirão",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 7,90"
    },

    {
        desserts: "Pudim",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 15,99"
    },

    {
        desserts: "Bolo",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 24,90"
    },

    {
        desserts: "Beijinho",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 10,40"
    },

    {
        desserts: "Frutas",
        description: "Um pouco de batata, um pouco de salada",
        price: "R$ 27,90"
    }
]

export default function Menus() {
    return (
        <main className="menus">
            <header className="menuTitle">
                <p>Primeiro, seu prato</p>
            </header>
            <section className="menuOptions">
            {dishes.map((element, index) => <Dishes key={index} dish={element.dish} description={element.description} price={element.price} />)}
            </section>

            <header className="menuTitle">
                <p>Agora, sua bebida</p>
            </header>
            <section className="menuOptions">
            {drinks.map((element, index) => <Drinks key={index} drink={element.drink} description={element.description} price={element.price} />)}
            </section>

            
            <header className="menuTitle">
                <p>Por fim, sua sobremesa</p>
            </header>
            <section className="menuOptions">
            {desserts.map((element, index) => <Desserts key={index} drink={element.dessert} description={element.description} price={element.price} />)}
            </section>
        </main>
    )
}