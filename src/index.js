import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "./store";
import Main from "./Main";
import './css/styles.css';


const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Provider store={store}><Main /></Provider>);

