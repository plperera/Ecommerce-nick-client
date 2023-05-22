import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

export default function TesteUploadImage () {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error("Nenhum arquivo selecionado");
      return;
    }
    console.log(file)
  };

  return (
    <div>
      <FileInput type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

const FileInput = styled.input`
  /* Aqui você pode adicionar estilos para o input de arquivo */
`;

const Button = styled.button`
  /* Aqui você pode adicionar estilos para o botão */
`;