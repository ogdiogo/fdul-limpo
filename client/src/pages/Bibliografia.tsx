
import React from "react";
import { Helmet } from "react-helmet";  // Import Helmet for page metadata
import BibliografiaContent from "@/components/Bibliografia";

const Bibliografia = () => {
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
      <BibliografiaContent />
    </div>
  );
};

export default Bibliografia;
