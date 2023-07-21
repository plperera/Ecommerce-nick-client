import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AdminContext = createContext();
export default AdminContext;

export function AdminProvider({ children }) {
  const [adminData, setAdminData] = useLocalStorage('adminData', {});
  
  return (
    <AdminContext.Provider value={{ adminData, setAdminData }}>
      {children}
    </AdminContext.Provider>
  );
}