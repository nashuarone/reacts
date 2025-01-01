import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/sw.ts")
        .then((reg) => console.log("Service Worker Registered", reg))
        .catch((err) => console.log("Service Worker Error", err));
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <MantineProvider>
                <App />
            </MantineProvider>
        </BrowserRouter>
    </StrictMode>
);
