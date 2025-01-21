import { Drawer } from "@mui/material";
import { FaUpload } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaCropSimple } from "react-icons/fa6";
import { TbFlipHorizontal } from "react-icons/tb";
import { TbFlipVertical } from "react-icons/tb";
import { useState } from "react";


const AppDrawer = ({ open, onClose, image }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rotation, setRotation] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleRotate = () => {
    setRotation((rotation + 90) % 360);
  };

  const handleFlipHorizontal = () => {
    setFlipped(!flipped);
  };

  const handleFlipVertical = () => {
    setFlipped(!flipped);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "95%",
        },
      }}
    >
      <div className="p-4 h-full grid grid-cols-7 gap-4">
        {/* 70% */}
        <div className="col-span-5">
          {image ? (
            <div className="relative">
              <h3 className="mb-4 text-lg font-bold text-gray-700">Add Asset</h3>
              <img
                src={image}
                alt="Uploaded"
                className="w-full max-h-[calc(100vh-64px)] object-contain"
                style={{ transform: `rotate(${rotation}deg) ${flipped ? 'scaleX(-1)' : ''}` }}
              />
              <div className="absolute top-14 right-2 font-semibold opacity-65 rounded-md bg-black text-white cursor-pointer">
                <div onClick={handleDrawer} className="p-2">
                  <FaPencil />
                </div>
                {openDrawer && (
                  <div className="mt-2 text-white gap-2 mb-2 flex flex-col items-center">
                    <p onClick={handleRotate}>
                      <FaArrowRotateRight />
                    </p>
                    <p>
                      <FaCropSimple />
                    </p>
                    <p onClick={handleFlipHorizontal}>
                      <TbFlipHorizontal />
                    </p>
                    <p onClick={handleFlipVertical}>
                      <TbFlipVertical />
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No image uploaded.</p>
          )}
        </div>

        {/* 30% */}
        <div className="col-span-2 flex flex-col relative h-full">
          <button
            onClick={onClose}
            className="self-end text-gray-500 text-xl font-bold mb-4"
          >
            ✕
          </button>
          <h3 className="mb-4 text-lg font-bold text-gray-700">Details</h3>

          {/* text input */}
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          {/* text area */}
          <textarea
            placeholder="Description"
            rows="5"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 resize-none"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>

          {/*upload button */}
          <button
            className="absolute bottom-4 left-0 right-0 mx-4 bg-[#334d6e] text-white py-2 px-4 rounded-md flex gap-2 items-center justify-center"
          >
            <span>
              <FaUpload />
            </span>
            Upload Image
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
