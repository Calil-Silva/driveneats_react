export default function BottomBar( {countDishes, countDrinks, countDesserts} ) {
    if(countDishes > 0 && countDrinks > 0 && countDesserts > 0) {
        return (
            <footer className="bottomBar">
                <div className="confirmOrder confirmed">
                    <a href="#">Finalizar pedido</a>
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


