import './App.css';
import InputTextItem from '../components/InputTextItem/InputTextItem';
import TaskList from '../components/TaskList/TaskList';
import React, { useEffect, useState } from 'react';
import { AppBar, Grid, Stack, Card, CardContent } from '@mui/material';
import ToolBarComponent from '../components/ToolBar/ToolBarComponent';
import NotificationTable from '../components/NotificationTable/NotificationTable';
import axios from 'axios';
import removeDuplicates from '../utils/removeDuplicates';

export default function App() {
  let [onlineNumber, setOnlineNumber] = useState(0);
  let [users, setUsers] = useState([
    { name: "Angular Dev" }
  ]);


  // constructor(props) {
  //   super(props);
  //   this.updateState = this.updateState.bind(this);
  //   this.state = { taskList: [] };
  // }

  // componentDidMount() {
  //   this.updateData();
  //   setInterval(() => {
  //     this.updateData();
  //   }, 1000);

  // }

  // updateData = (value) => {
  //   console.log("updateData");
  //   axios.get('http://localhost:4000/notifications/').then(response => {
  //     response.data.requestBody.forEach(item => {
  //       if (!(this.state.taskList).includes(item)) {
  //         this.updateState(JSON.stringify(item))
  //       }
  //     });
  //   })
  // }


  // updateState = (value) => {
  //   console.log("updateState");
  //   let newArray = this.state.taskList;
  //   try {
  //     newArray.push(formatOutpuData(value));

  //   } catch (error) {

  //   }
  //   newArray = newArray.sort(this.custom_sort)
  //   this.setState({ taskList: [] });
  //   this.setState({ taskList: removeDuplicates(newArray) });
  // }

  // custom_sort = (a, b) => {
  //   return new Date(a._created).getTime() - new Date(b._created).getTime();
  // };


  return (
    <div className="App">
      <AppBar component="nav">
        <ToolBarComponent />
      </AppBar>
      <Grid container justifyContent="center" >
        <Card variant="none" >
          <CardContent >
            <Stack spacing={1}>
              {/* <Card className="inputText" variant="none">
                <InputTextItem
                //  data={this.state} childToParent={this.updateData}
                />
              </Card> */}
              <Card sx={{ display: { xs: 'block' } }} >

                <NotificationTable />

                {/* <TaskList data={this.state} childToParent={this.updateList} /> */}
              </Card>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

