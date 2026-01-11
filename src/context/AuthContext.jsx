import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setlocalStorage } from "../utils/localStorage.jsx";


export const AuthDataContext = createContext();


function AuthContext({ children }) {
  const [userData, setUserData] = useState(null); // Kuch nhi hai waiting for data


  useEffect(() => {
    const data = getLocalStorage();
    setUserData(data);
  }, []);

  return (
    <div>
      <AuthDataContext.Provider value={userData}>
        {children}
      </AuthDataContext.Provider>
    </div>
  );
}

export default AuthContext;
