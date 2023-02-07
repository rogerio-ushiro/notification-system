import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList: [props.data.taskList] };
  }

  clearAll = () => {
    this.setState({ taskList: [] });
    this.props.childToParent([]);
  };

  render() {
    return (
      <div>
        <List>
          {this.props.data.taskList.map((value, index) => {
            return (
              <ListItem key={value + index} disablePadding>
                <ListItemButton>
                  <ListItemText inset primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

export default TaskList;
