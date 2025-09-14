import { useState } from "react";

const ZoomableImage = ({ src, alt }) => {
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center center", transform: "scale(1)" });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Calculate mouse position percentages relative to image
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    // Set transform-origin to mouse position
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)", // Adjust zoom factor as needed
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transformOrigin: "center center", transform: "scale(1)" });
  };

  return (
    <div className="relative w-64 h-64 overflow-hidden rounded shadow cursor-zoom-in">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={zoomStyle}
      />
    </div>
  );
};

export default ZoomableImage;
