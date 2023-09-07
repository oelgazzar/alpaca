import { useEffect, useRef } from "react";
let counter = 0;

function drawImageOnCanvas(imageURl, ctx, w, h) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, w, h);
      resolve();
    };
    img.src = imageURl;
  });
}

export default function Canvas({
  selectedParts,
  onDrawNewImage,
  width,
  height,
}) {
  const canvasRef = useRef(null);

  console.log("render" + ++counter);
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    (async () => {
      for (let group of [
        "backgrounds",
        "ears",
        "neck",
        "hair",
        "nose",
        "mouth",
        "accessories",
        "eyes",
        "leg",
      ]) {
        const part = selectedParts[group];
        await drawImageOnCanvas(part.url, ctx, width, height);
      }
      onDrawNewImage(canvasRef.current.toDataURL());
    })();
  }, [selectedParts]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border mx-auto d-block py-0 border border-4"
      />
    </>
  );
}
