import Canvas from "./Canvas";
import Images from "./Images";
import CustomizationPanel from "./customization-panel/CustomizationPanel";
import { useState } from "react";
import { getRandomItem } from "../utilities";

export default function App({ parts }) {
  const [selectedGroup, setSelectedGroup] = useState(
    getRandomItem(Object.keys(parts))
  );

  const getRandomParts = (parts) => {
    return Object.fromEntries(
      Object.keys(parts).map((k) => [k, getRandomItem(parts[k])])
    );
  };

  // a map {GROUP: {NAME, URL}}
  const [selectedParts, setSelectedParts] = useState(getRandomParts(parts));

  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleOnGroupClick = (group) => {
    setSelectedGroup(group);
  };

  const handleOnPartClick = (part) => {
    console.log(selectedParts);
    setSelectedParts({
      ...selectedParts,
      [selectedGroup]: part,
    });
  };

  const onDrawNewImage = (url) => {
    setDownloadUrl(url);
  };

  const randomizeParts = () => {
    setSelectedParts(getRandomParts(parts));
  };

  return (
    <>
      <h1 className="text-white my-4 display-4 fw-bold">
        Alpaca Image Generator
      </h1>
      <div className="row">
        <div className="col-auto py-0">
          <Canvas
            selectedParts={selectedParts}
            onDrawNewImage={onDrawNewImage}
            width={400}
            height={400}
          />
          <div className="mx-auto w-50 mt-2">
            <button className="btn btn-info me-2" onClick={randomizeParts}>
              Random
            </button>
            <a
              className="btn btn-danger"
              href={downloadUrl}
              download="myAlpaca.png"
            >
              Save Image
            </a>
          </div>
        </div>
        <div className="col-4">
          <CustomizationPanel
            {...{
              parts,
              selectedGroup,
              selectedParts,
              handleOnGroupClick,
              handleOnPartClick,
            }}
          ></CustomizationPanel>
        </div>
      </div>
      <Images parts={parts} />
    </>
  );
}
