import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; 
import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer"
import  PageRoute  from "./pages/page-route"; 
import { ClerkProvider } from "@clerk/clerk-react";
import { CartProvider } from "./components/cartcontext/cartcontext"; 

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}



createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
    <CartProvider> 
      <main className="flex flex-col w-full h-full">
      <Header /> 
        <div className="flex-1 flex flex-col">
          <PageRoute /> 
        </div>
        <Footer />
      </main>
    </CartProvider>
    </BrowserRouter>
  </ClerkProvider>
  </StrictMode>
);
