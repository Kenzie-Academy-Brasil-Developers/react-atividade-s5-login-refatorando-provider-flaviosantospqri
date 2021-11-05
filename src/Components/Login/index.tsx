import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../Providers/Auth";
import { Container } from "./style";


interface propsData {
  email: string;
  senha: string;
}

export const Login = () => {
  const { Login, authToken } = useAuth();
  console.log(authToken);

  const schema = yup.object().shape({
    email: yup.string().email("Email Invalido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "password inválida")
      .required("Campo Obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleThisForm = (data: propsData) => {
    Login(data);
  };
  return (
    <Container>
      <form className="form" onSubmit={handleSubmit(handleThisForm)}>
      
        <input {...register("email")} placeholder="Email*" />
        {errors.email?.message && (
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        )}

        <input {...register("password")} placeholder="password*"></input>
        {errors.password?.message && <p>{errors.password.message}</p>}

        <button type="submit">Entrar</button>
       
      </form>
      </Container>
    
  );
};
