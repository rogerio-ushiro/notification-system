import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

class BasicSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: "" };
  }

  handleChange = (e) => {
    this.setState({ category: e.target.value });
    setTimeout(() => {
      this.props.childToParent(e.target.value);
      setTimeout(() => this.props.childToParent(e.target.value), 500);
    }, 500);
  };

  render() {
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <MenuItem value={"SPORTS"}>SPORTS</MenuItem>
            <MenuItem value={"FINANCES"}>FINANCES</MenuItem>
            <MenuItem value={"MOVIES"}>MOVIES</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }
}

export default BasicSelect;
