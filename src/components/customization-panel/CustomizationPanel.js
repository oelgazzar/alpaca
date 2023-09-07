import ButtonGroup from "./ButtonGroup";

export default function CustomizationPanel({
  parts,
  selectedGroup,
  selectedParts,
  handleOnGroupClick,
  handleOnPartClick,
}) {
  return (
    <div className="border border-2 p-2">
      <ButtonGroup
        options={Object.keys(parts)}
        selected={selectedGroup}
        handleOnClick={handleOnGroupClick}
        buttonClass="btn-outline-primary"
      ></ButtonGroup>
      <hr />
      <ButtonGroup
        options={parts[selectedGroup].map((part) => part.name)}
        selected={selectedParts[selectedGroup].name}
        handleOnClick={(partName) =>
          handleOnPartClick(
            parts[selectedGroup].find((part) => part.name === partName)
          )
        }
        buttonClass="btn-outline-success"
      ></ButtonGroup>
    </div>
  );
}
