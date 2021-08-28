import React, { useState } from 'react';

export default function Drinks(props) {

    const { drink, img, description, price, fun } = props;
    const [selected, setSelected] = useState("boxShadow");
    const [amount, setAmount] = useState("hide");
    const [addOrDecrease, setaddOrDecrease] = useState(0);

    function selectThis() {

        if(selected === "boxShadow") {
            setSelected("boxShadowVerde")
            setAmount("amount")
            setaddOrDecrease(1)
            fun("boxShadowVerde")
         }
    }


    function operation(option) {
        if(option === "+") {
            setaddOrDecrease(addOrDecrease + 1)
            fun("boxShadowVerde")
        } else {
            setaddOrDecrease(addOrDecrease - 1)
            fun("boxShadow");
        }

        if(addOrDecrease === 1 && option === "-") {
            setSelected("boxShadow");
            setAmount("hide");
            fun("boxShadow");
        }
    }

    return (
        <>
                <button className={selected} id={drink} onClick={selectThis}>
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
                    <div className={amount} id="icon">
                        <div onClick={() => operation("-")}>-</div>
                        <div>{addOrDecrease}</div>
                        <div onClick={() => operation("+")}>+</div>
                    </div>
                </button>
        </>
    )
}