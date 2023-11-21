import Slider from "./components/Slider/Slider";
import './app.scss'
import {useState} from "react";
import Time from "./components/Time/Time";

function App() {


    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

    const addItem = () => {
        setItems(...items)
    }

    return (<>
        <div className={'wrapper'}>
            <Time/>
        </div>
    </>);
}

export default App;
