// I have created this file to store all the to states used in Image details component

import { createContext, useState } from "react";

export const ImageDataContext = createContext(undefined);

export const ImageDataContextProvider = ({ children }) => {
  const [imageData, setImageData] = useState();

  return (
    <ImageDataContext.Provider value={[imageData, setImageData]}>
      {children}
    </ImageDataContext.Provider>
  );
};
