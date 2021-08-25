export default function Dishes(props) {
    
    const { dish, img, description, price } = props;

    return (
        <>
                <button id="Frango" onClick={() => console.log(props)}>
                    <figure>
                        <img src={img} alt={dish} />
                    </figure>
                    <div className="description">
                        <div className="optionTitle">
                            <p>{dish}</p>
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