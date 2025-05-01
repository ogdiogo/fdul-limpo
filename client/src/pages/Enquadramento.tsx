
import React from "react";
import { Helmet } from "react-helmet";  // Import Helmet for page metadata
import EnquadramentoContent from "@/components/Enquadramento";  // Import the content component

const EnquadramentoPage = () => {
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
      <EnquadramentoContent />
    </div>
  );
};

export default EnquadramentoPage;
