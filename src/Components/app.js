import Menus from "./menus/menus"

export default function App() {
    return (
        <>
            <nav className="topBar">
                <h1>FoodCamp</h1>
                <h2>Sua comida em 6 minutos</h2>
            </nav>

            <Menus />
        </>
    )
}