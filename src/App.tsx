
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { CartProvider } from "./contexts/CartContext";

// Pages
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ShopPage from "./pages/shop/ShopPage";
import ProductPage from "./pages/shop/ProductPage";
import LoginPage from "./pages/account/LoginPage";
import DashboardPage from "./pages/account/DashboardPage";
import MaintenancePage from "./pages/services/MaintenancePage";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/shop/CartPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import ContractorsPage from "./pages/contractors/ContractorsPage";
import InstallationPage from "./pages/services/InstallationPage";
import DesignPage from "./pages/services/DesignPage";
import ModernizationPage from "./pages/services/ModernizationPage";
import ConsultationPage from "./pages/services/ConsultationPage";
import DeliveryPage from "./pages/shop/DeliveryPage";
import SupportPage from "./pages/SupportPage";
import OrdersPage from "./pages/account/OrdersPage";
import ProjectsPage from "./pages/account/ProjectsPage";
import OrderDetailsPage from "./pages/account/OrderDetailsPage";
import AccountSettingsPage from "./pages/account/AccountSettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/maintenance" element={<MaintenancePage />} />
              <Route path="services/installation" element={<InstallationPage />} />
              <Route path="services/design" element={<DesignPage />} />
              <Route path="services/modernization" element={<ModernizationPage />} />
              <Route path="services/consultation" element={<ConsultationPage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="shop/product/:id" element={<ProductPage />} />
              <Route path="shop/cart" element={<CartPage />} />
              <Route path="shop/delivery" element={<DeliveryPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="contractors" element={<ContractorsPage />} />
              <Route path="support" element={<SupportPage />} />
            </Route>
            <Route path="/account/login" element={<LoginPage />} />
            <Route path="/account" element={<DashboardPage />} />
            <Route path="/account/orders" element={<OrdersPage />} />
            <Route path="/account/orders/:id" element={<OrderDetailsPage />} />
            <Route path="/account/projects" element={<ProjectsPage />} />
            <Route path="/account/settings" element={<AccountSettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
