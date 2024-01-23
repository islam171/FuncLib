import './app.scss'
import {useState} from "react";
import Form1 from "./components/forms/form1";

function App() {


    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

    const addItem = () => {
        setItems(...items)
    }

    return (<>
        <div className={'wrapper'}>
            <Form1/>
        </div>
    </>);
}

export default App;
