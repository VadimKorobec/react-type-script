import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./components/redux/store.ts";
import { BrowserRouter, Routes, Route } from "react-router";

import NewPost from "./components/NewPost/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<App />} />
            <Route path="/create-post" element={<NewPost />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
