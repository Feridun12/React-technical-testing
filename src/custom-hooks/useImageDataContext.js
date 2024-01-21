import { useContext } from "react";
import { ImageDataContext } from "../provider/ImageDataContextProvider";

/* 
 I have created this custom context hook to use the image data we get from clicking the images
  in other components without prop drilling.


  I have managed to solve this functionality with the help of storing the data of the image in 
  the session storage.

  I will not delete this custom hook since I am going to use it for other states that is currently 
  in a small prop drilling problem.
*/
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
