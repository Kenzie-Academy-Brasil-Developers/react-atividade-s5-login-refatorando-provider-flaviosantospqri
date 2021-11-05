import { useAuth } from "../../Providers/Auth";
import { Container } from "./style";


export const DashBoardComponent = () => {
const {Logout, authToken} = useAuth();
  return (
    <Container>
      <h1>Bem vindo!</h1>
      <button onClick={()=> Logout(authToken)}>Sair</button>
    </Container>
  );
};
