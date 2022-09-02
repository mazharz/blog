import { useState, useEffect } from "react";

function useWindowDimensions() {
  function getWindowDimensions() {
    const hasWindow = typeof window !== "undefined";
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowDimensions;
}

export { useWindowDimensions };
