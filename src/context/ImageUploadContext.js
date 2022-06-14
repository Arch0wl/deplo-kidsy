import { createContext, useState } from "react";

export const ImageUploadContext = createContext({});

export const ImageUploadContextProvider = ({ children }) => {
  const { Provider } = ImageUploadContext;
  const [imageUpload, setImageUpload] = useState(null);

  const value = {
    imageUpload,
    setImageUpload,
  };
  return <Provider value={value}>{children}</Provider>;
};
