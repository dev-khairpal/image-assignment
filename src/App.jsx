import { useState } from "react";
import useFileUpload from "./hooks/useFileUpload";
import AppDrawer from "./components/AppDrawer";
import UploadInstructions from "./components/UploadInstructions";

function App() {
  const { handleFileUpload } = useFileUpload();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onUpload = () => {
    handleFileUpload((imageUrl) => {
      setUploadedImage(imageUrl); // Update image
      setIsDrawerOpen(true); 
    });
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <UploadInstructions onUpload={onUpload} />
      <AppDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        image={uploadedImage}
      />
    </div>
  );
}

export default App;
