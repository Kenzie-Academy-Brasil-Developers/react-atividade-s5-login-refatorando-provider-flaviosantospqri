import './App.css';
import { useAuth } from './Providers/Auth';
import { AppRouter } from './Routers/App.routes';
import { AuthRouter } from './Routers/Auth.routes';


function App() {
  const {authToken} = useAuth();
 
  return (
   <div className="Entrar">
    {authToken !==  "" ? <AppRouter/> : <AuthRouter/>  }
    </div>
  )
}

export default App;
