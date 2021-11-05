import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface ReactProp{
    children: ReactNode;
}
export const Providers = ({children}: ReactProp) =>{
 return (
     <AuthProvider>
         {children}
     </AuthProvider>
 )
}