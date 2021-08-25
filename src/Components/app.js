import Menus from "./menus/menus"

export default function App() {
    return (
        <>
            <nav className="topBar">
                <h1>FoodCamp</h1>
                <h2>Sua comida em 6 minutos</h2>
            </nav>

            <Menus />
                
            <footer className="bottomBar">
                <div className="confirmOrder">
                    <h3>Selecione os 3 itens para fechar o pedido</h3>
                </div>
                <div className="orderConfirmed hide">
                    <a href="#">Finalizar pedido</a>
                </div>
            </footer>
        </>
    )
}