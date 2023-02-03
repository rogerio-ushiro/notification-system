
import './InputTextItem.css';
import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function InputTextItem(props) {

  const { name, changeName } = props;
  let [category, setCategory] = React.useState([]);
  let [message, setMessage] = React.useState([]);
  let [buttonEnabled, setButtonEnabled] = React.useState(false);

  // constructor(props) {
  //   super(props);
  //   this.state = { taskName: '', addButtonEnabled: false, category: '' };
  // }

  // handleTaskNameChange = async (value) => {
  // await axios.post('http://localhost:4000/notifications/create', {
  //   message: value,
  //   category: this.state.category
  // }).then(function (response) {
  //   console.log(response.data.requestBody);
  // })
  // setTimeout(() => {
  // this.props.childToParent();
  // this.setState({ taskName: "", category: "", addButtonEnabled: false })
  // document.getElementById("message").value = "";
  // }, 500);
  // }

  const keyEnter = (evt) => {
    setTimeout(() => {
      setMessage(evt.target.value);
      shouldButtonBeEnabled();
      if (evt.key === 'Enter') { send() }
    })
  }

  const send = () => {
    changeName(category, message);
    setMessage("");
    setCategory([]);
    setButtonEnabled(false);
    document.getElementById("message").value = "";
  }

  const handleCategory = (evt) => {
    setCategory(evt.target.value)
    shouldButtonBeEnabled();
  }

  const shouldButtonBeEnabled = () => {
    setTimeout(() => {
      setButtonEnabled((message.length > 0 && category !== ""))
    })
  }

  return (
    <div className="InputTextItem">
      <Stack className='Stack' direction="row" spacing={2}>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              value={category}
              onChange={handleCategory}
            >
              <MenuItem value={"SPORTS"}>SPORTS</MenuItem>
              <MenuItem value={"FINANCES"}>FINANCES</MenuItem>
              <MenuItem value={"MOVIES"}>MOVIES</MenuItem>
            </Select>
          </FormControl>
        </Box >

        <TextField id="message" autoComplete='off' label="Message" variant="standard" onKeyDown={keyEnter} />
        <Button variant="outlined" endIcon={<SendIcon />} disabled={!buttonEnabled} onClick={send} >Post</Button>

      </Stack>

    </div>
  )
}
