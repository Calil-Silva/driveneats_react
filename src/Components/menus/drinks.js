export default function Drinks(props) {

    const { drink, img, description, price } = props;

    return (
        <>
                <button id="Coca" onclick="bebidaSelecionada(this);">
                    <figure>
                        <img src={img} alt={drink} />
                    </figure>
                    <div className="description">
                        <div className="optionTitle">
                            <p>{drink}</p>
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