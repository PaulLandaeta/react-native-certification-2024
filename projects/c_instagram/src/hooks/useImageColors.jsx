import { useEffect, useState } from "react";
import { getColors } from "react-native-image-colors";

export const useImageColors = (url) => {
  const [colors, setColors] = useState({});

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const colorResponse = await getColors(url, {
          fallback: "#000000"
        });
        setColors(colorResponse);
      } catch (error) {
        console.error("Error fetching colors:", error);
      }
    };

    fetchColors();
  }, [url]);

  return colors;
};
