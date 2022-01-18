import React , {useState} from "react";

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0);


    return (
        <p>
        <button onClick={() => setCurrentCount(currentCount + props.changeBy)}>
            +{props.changeBy}
        </button>
        <h1>{currentCount}</h1>
        <button onClick={() => setCurrentCount(currentCount - props.changeBy)}>
            -{props.changeBy}
        </button>
        </p>
    )
}

export default CountButton;