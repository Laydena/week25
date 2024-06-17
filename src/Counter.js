import React, { useState } from "react";

export default function Example() {
    const [count, setCount] = useState(0);

    let handleCount = () => {
        setCount(count + 1)
    }


    return (
        <div>
            <button onClick={handleCount}>Нажатий на кнопку: {count}</button>
        </div>
    );
}