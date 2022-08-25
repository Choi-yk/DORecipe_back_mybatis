import {React, Provider} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";



// import * as serviceWorker from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<>


   {/* <Provider store={store}> */}
    <BrowserRouter>
    {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}
      <App />
    </BrowserRouter>
   {/* </Provider> */}
</>
);
