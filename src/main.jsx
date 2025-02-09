import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./Languages/i18next";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux/Reducers/configureStore.js";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* <ReactQueryDevtools position="right" initialIsOpen={false}></ReactQueryDevtools> */}
        </QueryClientProvider>
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
