import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Sorter(props) {
  const [sortValue, setSortValue] = React.useState("None");

  const handleChange = (event) => {
    setSortValue(event.target.value);
    props.changeSort(event.target.value);
  };

  return (
    <div className='sorter'>
      <FormControl sx={{ m: 1, minWidth: 120, margin: "15px 0 0 15px" }} size="small" variant="standard">
        <Select
          id="select-small"
          value={sortValue}
          label="Status"
          onChange={handleChange}
          sx={{color: "white"}}
        >
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"Status"}>Status</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Sorter;
