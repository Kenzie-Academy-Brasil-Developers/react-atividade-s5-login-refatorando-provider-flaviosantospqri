import axios, { AxiosResponse } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

interface ChildrenProp {
  children: ReactNode;
}

interface UserData {
  email: string;
  senha: string;
}

interface AuthProviderData {
  isLogged: boolean;
  authToken: string;
  setIsLogged:(isLogged: boolean) => void;
  Login: (user: UserData) => void;
  setIsLog:(isLogged: boolean) => void;
  Logout: (authToken: string) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: ChildrenProp) => {
  const [isLogged, setIsLogged] = useState(false);
  const history = useHistory();
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );
  const setIsLog =()=>{
    return setIsLogged(!isLogged)
  }

  const Login = (user: UserData) => {
    console.log(user);
    axios
      .post("https://kenziehub.herokuapp.com/sessions", user, {})
      .then((response: AxiosResponse) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        setIsLog();
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
      
  };
  const Logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
    setIsLog();
  };
  return (
    <AuthContext.Provider value={{ authToken, Logout, Login, isLogged, setIsLogged, setIsLog}}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
