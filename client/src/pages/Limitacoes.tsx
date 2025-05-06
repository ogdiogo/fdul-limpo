
import React from "react";
import { Helmet } from "react-helmet";  // Import Helmet for page metadata
import LimitacoesContent from "@/components/Limitacoes";

const Limitacoes = () => {
  return (
    <div>
      {/* Use Helmet to define metadata */}
      <Helmet>
        <title>Limitacoes - Sigilo Bancário</title>
        <meta
          name="description"
          content="Limitacoes"
        />
      </Helmet>
      
      {/* Include the EnquadramentoContent component */}
      <LimitacoesContent />
    </div>
  );
};

export default Limitacoes;
