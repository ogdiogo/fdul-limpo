import { Helmet } from "react-helmet";
import LoginContent from "@/components/Login"; // Make sure to import your Login component

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Área de Cliente - Glosadores e Associados</title>
        <meta name="description" content="Aceda com segurança à sua conta nos Glosadores e Associados." />
      </Helmet>

      <LoginContent />
    </>
  );
};

export default Login;
