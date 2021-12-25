import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "./core/themes/MantineProvider";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./core/api/queryClient";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
