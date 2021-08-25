

export default function Desserts(props) {

    const { dessert, description, price } = props;

    return (
        <>
                <button id="Brigadeirão" onclick="sobremesaSelecionada(this);">
                    <figure>
                        <img src="./files/sobremesa.png" alt={dessert} />
                    </figure>
                    <div className="description">
                        <div className="optionTitle">
                            <p>{dessert}</p>
                        </div>
                        <div className="optionDescription">
                            <p>{description}</p>
                        </div>
                        <div className="optionPrice">
                            <p>{price}</p>
                        </div>
                    </div>
                    <div className="hide" id="icon">
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                </button>
        </>
    )
}