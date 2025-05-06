import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import BankingPrivacy from "@/pages/BankingPrivacy";
import BankingPrivacyLogin from "@/pages/BankingPrivacy-login";
import Responsabilidade from "@/pages/Responsabilidade";
import Login from "@/pages/Login" // Import the Enquadramento page
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";
import { useState, useEffect } from "react";
import Conclusao from "@/pages/Conclusao";
import Supervisao from "@/pages/Supervisao";
import Bibliografia from "@/pages/Bibliografia";
import Enquadramento from "@/pages/Enquadramento";
import Integracao from "@/pages/Integracao";
import Limitacoes from "@/pages/Limitacoes";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/banking-privacy" component={BankingPrivacy} />
            <Route path="/banking-privacy-login" component={BankingPrivacyLogin} />
            <Route path="/enquadramento" component={Enquadramento} />
            <Route path="/limitacoes" component={Limitacoes} />
            <Route path="/integracao" component={Integracao} />
            <Route path="/supervisao" component={Supervisao} />
            <Route path="/responsabilidade" component={Responsabilidade} />
            <Route path="/conclusao" component={Conclusao} />
            <Route path="/bibliografia" component={Bibliografia} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showNotification, setShowNotification] = useState(false);
  
  useEffect(() => {
    // Show notification after 5 seconds
    const timeout = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
