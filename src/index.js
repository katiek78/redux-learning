import React from "react";
import { createRoot } from "react-dom/client";
import store from "./store";
import { ADD_BUG, RESOLVE_BUG } from "./actions";

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(ADD_BUG("Bug 1"));
store.dispatch(ADD_BUG("Bug 2"));
store.dispatch(RESOLVE_BUG(1));

console.log(store.getState());

// store.dispatch({
//     type: actions.REMOVE_BUG,
//     payload: {
//         id: 1
//     }
// })

console.log(store.getState());

const container = document.getElementById("root");
const root = createRoot(container);
//root.render(<Hello />);

