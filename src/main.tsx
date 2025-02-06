import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; 
import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer"
import  PageRoute  from "./pages/page-route"; 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <main className="flex flex-col w-full h-full">
      <Header /> 
        <div className="flex-1 flex flex-col">
          <PageRoute /> 
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  </StrictMode>
);
