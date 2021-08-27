import React, { useState } from 'react';

export default function Desserts(props) {

    const { dessert, img, description, price } = props;
    const [selected, setSelected] = useState("boxShadow");
    const [amount, setAmount] = useState("hide");
    const [addOrDecrease, setaddOrDecrease] = useState(0);

    function selectThis() {

        if(selected === "boxShadow") {
            setSelected("boxShadowVerde")
            setAmount("amount")
            setaddOrDecrease(1)
         }
    }


    function operation(option) {
        if(option === "+") {
            setaddOrDecrease(addOrDecrease + 1)
        } else {
            setaddOrDecrease(addOrDecrease - 1)
        }

        if(addOrDecrease === 1 && option === "-") {
            setSelected("boxShadow");
            setAmount("hide");
        }
    }

    return (
        <>
                <button className={selected} id={dessert} onClick={selectThis}>
                    <figure>
                        <img src={img} alt={dessert} />
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
                    <div className={amount} id="icon">
                        <div onClick={() => operation("-")}>-</div>
                        <div>{addOrDecrease}</div>
                        <div onClick={() => operation("+")}>+</div>
                    </div>
                </button>
        </>
    )
}