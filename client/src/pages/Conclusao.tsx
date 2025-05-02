
import React from "react";
import { Helmet } from "react-helmet";  // Import Helmet for page metadata
import ConclusaoContent from "@/components/Conclusao";

const Conclusao = () => {
  return (
    <div>
      {/* Use Helmet to define metadata */}
      <Helmet>
        <title>Enquadramento - Sigilo Bancário</title>
        <meta
          name="description"
          content="Enquadramento legal sobre o sigilo bancário e responsabilidades"
        />
      </Helmet>
      
      {/* Include the EnquadramentoContent component */}
      <ConclusaoContent />
    </div>
  );
};

export default Conclusao;
