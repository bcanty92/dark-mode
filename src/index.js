import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
    const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
            )
            .then(res => setCoinData(res.data))
            .catch(err => console.log(err));
    }, []);
    return ( <
        div className = "App" >
        <
        Navbar / >
        <
        Charts coinData = { coinData }
<<<<<<< HEAD
        /> < /
        div >
=======
        /> <
        /div>
>>>>>>> 23a275aa1bf36561c2f426050a91b1df5012fe48
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render( < App / > , rootElement);