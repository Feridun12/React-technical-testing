import { useContext } from "react";
import { ImageDataContext } from "../provider/ImageDataContextProvider";

const useImageDataContext = () => {
  const context = useContext(ImageDataContext);
  if (!context) {
    throw new Error(
      "useImageDataContext must be used within ImageDataContextProvider"
    );
  }

  return {
    imageData: context[0],
    setImageData: context[1],
  };
};

export default useImageDataContext;
