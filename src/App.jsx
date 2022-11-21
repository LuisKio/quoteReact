import { useState } from "react";
import colors from "./db/colors";
import quotesDB from "./db/quotes.json";
import QuoteBox from "./QuoteBox";

function App() {
    const getRandomElementFromArray = (array) => {
        const randomIndex = Math.floor(array.length * Math.random());
        return array[randomIndex];
    }

    const [quote, setQuote] = useState(getRandomElementFromArray(quotesDB));
    const [color, setColor] = useState(getRandomElementFromArray(colors));

    

    const getNewValue = () => {
        const newQoute = getRandomElementFromArray(quotesDB);
        const newColor = getRandomElementFromArray(colors);
        setColor(newColor);
        setQuote(newQoute);
    }

    document.body.style = `background: ${color}`;

    return (
        <div className="App">
            <QuoteBox 
                {...quote} 
                getNewValue={getNewValue}
                color={color}
            />
        </div>
    )
}

export default App
