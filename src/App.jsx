import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ToastProvider } from "./context/ToastContext";
import ScrollToTop from "./components/common/ScrollToTop";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastProvider>
        <div className="min-h-screen bg-white antialiased">
          <AppRoutes />
        </div>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
