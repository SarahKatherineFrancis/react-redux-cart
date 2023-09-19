import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped with the Redux Provider, passing the Redux store as a prop.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
