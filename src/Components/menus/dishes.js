import React, { useState } from 'react';

export default function Dishes(props) {
    
    const { dish, img, description, price, fun, fun2, fun3 } = props;
    const [selected, setSelected] = useState("boxShadow");
    const [amount, setAmount] = useState("hide");
    const [addOrDecrease, setaddOrDecrease] = useState(0);

    function selectThis() {

        if(selected === "boxShadow") {
            setSelected("boxShadowVerde")
            setAmount("amount")
            setaddOrDecrease(1)
            fun("boxShadowVerde")
            fun2(dish)
         }
    }

    function operation(option) {
        if(option === "+") {
            setaddOrDecrease(addOrDecrease + 1);
            fun("boxShadowVerde");
            fun3(addOrDecrease + 1)
        } else {
            setaddOrDecrease(addOrDecrease - 1)
            fun("boxShadow");
            fun3(addOrDecrease - 1)
        }

        if(addOrDecrease === 1 && option === "-") {
            setSelected("boxShadow");
            setAmount("hide");
            fun("boxShadow");
        }
    }

    return (
        <>
                <button className={selected} id={dish} onClick={selectThis}>
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
                    <div className={amount} id="icon">
                        <div onClick={() => operation("-")}>-</div>
                        <div>{addOrDecrease}</div>
                        <div onClick={() => operation("+")}>+</div>
                    </div>
                </button>
        </>
    )
}

