import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { INotesModelCorePlus, Methods } from "../../interface/interface"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { dataLocation } from "../../interface/interface";
import { CombineApi } from "../../helpers/CombineApi";


export const ColorToggleButton: React.FC<{update: (notes: INotesModelCorePlus[]) => void}> = ({update}) => {
  const [alignment, setAlignment] = React.useState(CombineApi.togle);

  const handleChange = async (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: dataLocation
  ) => {
    setAlignment(newAlignment);
    CombineApi.togle = newAlignment;
    const req = await CombineApi.construct(Methods.getAll)
    if(req && req !== true) update(req)
  };


  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value={dataLocation.API}>{dataLocation.API}</ToggleButton>
      <ToggleButton value={dataLocation.LocalStorage}>{dataLocation.LocalStorage}</ToggleButton>
    </ToggleButtonGroup>
  );
};
