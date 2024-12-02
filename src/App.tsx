import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import CibilPage from './pages/CibilPage';
import EligibilityPage from './pages/EligibilityPage';
import LoansPage from './pages/LoansPage';
import TopBar from './components/basics/TopBar';
import Sidebar from './components/basics/Sidebar';
import { SidebarProvider } from './components/contexts/SideBarContext';

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 xl:ml-64">
            <TopBar />
            <main className="bg-gray-100 min-h-screen">
              <Routes>
                <Route path="/" element={<Navigate to="/cibil" replace />} />
                <Route path="/cibil" element={<CibilPage />} />
                <Route path="/eligibility" element={<EligibilityPage />} />
                <Route path="/loans" element={<LoansPage />} />
                <Route path="/crif" element={<div className="p-6 mt-16">CRIF Page (Coming Soon)</div>} />
              </Routes>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;