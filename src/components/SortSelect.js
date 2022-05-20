import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [sortValue, setSortValue] = React.useState("None");

  const handleChange = (event) => {
    setAge(setSortValue.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-small">Sort by:</InputLabel>
      <Select
        labelId="select-small"
        id="select-small"
        value={"status"}
        label="Status"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Status</MenuItem>
      </Select>
    </FormControl>
  );
}
