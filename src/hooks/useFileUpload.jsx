import { useState } from "react";

const useFileUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileUpload = (onSuccess) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);
        if (onSuccess) onSuccess(imageUrl); 
      }
    };
    fileInput.click();
  };

  return { uploadedImage, handleFileUpload };
};

export default useFileUpload;
