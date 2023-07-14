import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function useToken() {
  const {authData} = useContext(AuthContext);

  return authData?.token;
}