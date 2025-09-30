import { useEffect, useState } from 'react'

export function useDimension() {
    const [isWidthSmall, setisWidthSmall] = useState(false);
  
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.innerWidth < 767 ? setisWidthSmall(true) : setisWidthSmall(false);
      const onScroll = (e: WindowEventMap["resize"]) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        window.innerWidth < 767 ? setisWidthSmall(true) : setisWidthSmall(false);
      };
      window.addEventListener("resize", onScroll);
  
      return () => window.removeEventListener("resize", onScroll);
    }, []);
    return {isWidthSmall}
}
