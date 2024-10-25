import Clients from '@/components/clients';
import Dashboard from '@/components/dashboard';
import NetworkEvolution from '@/components/evolution';
import Network from '@/components/network';
import Setting from '@/components/setting';
import SideBar from '@/components/shared/SideBar'
import { Routes, Route } from "react-router-dom";
const Principal = () => {
  return (
    <div className=' flex flex-col md:flex-row max-h-screen'>
      <SideBar />
      <div className=' w-full rounded-t-md overflow-y-scroll'>
        <Routes>
        <Route   index element={<Network />} />
          <Route  path="settings" element={<Setting />} />
          <Route  path="dashboard" element={<Dashboard />} />
          <Route  path="clients" element={<Clients />} />
          <Route  path="evolution" element={<NetworkEvolution />} />
        </Routes>
      </div>
    </div>
  )
}

export default Principal

