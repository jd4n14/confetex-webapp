import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from "@mantine/modals";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
