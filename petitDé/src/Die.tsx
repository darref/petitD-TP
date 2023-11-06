import { useCallback, useState } from "react";

const Die = () => {
    const [randomValue , setRandomValue] = useState(1)

    const roll = useCallback(
        () => setRandomValue(Math.floor(Math.random() * 6 ) ),
         [randomValue]
    )




    return (
        <div    onClick={roll}>
            {randomValue}
        </div>

    );
}

export default Die;