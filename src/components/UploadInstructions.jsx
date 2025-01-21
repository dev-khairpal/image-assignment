import { Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { LuUpload } from "react-icons/lu";

const UploadInstructions = ({ onUpload }) => {
  return (
    <div className="flex flex-col items-center text-gray-400">
      <LuUpload className="text-9xl text-gray-600 mb-8" />
      <p className="mb-4">Add Asset here</p>
      <Button
        onClick={onUpload}
        variant="contained"
        sx={{ backgroundColor: "#334d6e" }}
      >
        <div className="flex items-center gap-2">
          <span>
            <IoMdAdd className="text-lg font-semibold" />
          </span>
          Add
        </div>
      </Button>
    </div>
  );
};

export default UploadInstructions;
