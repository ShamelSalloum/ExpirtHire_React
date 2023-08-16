import { ChakraProvider } from "@chakra-ui/react";
import i18n from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { default as deTranslation, default as enTranslation } from "../src/Logic/Languages/en.json";
import App from "./App";
import { persistor, store } from "./Logic/store/store";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
    },
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </PersistGate>
  </Provider>
);
