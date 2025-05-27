import { createContext, useEffect, useState } from "react";

export const ViewportContext = createContext();

export const ViewportProvider = ({ children }) => {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      // console.log(viewportWidth)
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ viewportWidth }}>
      {children}
    </ViewportContext.Provider>
  );
};
