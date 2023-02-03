import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';
import formatDate from "../../utils/formatDate"
import removeDuplicates from '../../utils/removeDuplicates';
import InputTextItem from '../InputTextItem/InputTextItem';
import { Card } from '@mui/material';

export default function NotificationTable() {

    let [notifications, setNotifications] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:4000/notifications/').then(response => {
            setNotifications(removeDuplicates(response.data.requestBody))
        })
    }, []);

    const changeName = (category, message) => {
        axios.post('http://localhost:4000/notifications/create', {
            message: message,
            category: category
        }).then(() => {
            axios.get('http://localhost:4000/notifications/').then(response => {
                setNotifications(removeDuplicates(response.data.requestBody))
            })
        })
    }

    return (
        <>
            <Card className="inputText" variant="none">
                <InputTextItem changeName={changeName} />
            </Card>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">To</TableCell>
                            <TableCell align="center">Channel</TableCell>
                            <TableCell align="center">Subscription</TableCell>
                            <TableCell align="center">Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notifications.map((notification, index) => (
                            <TableRow
                                key={notification._to + index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{formatDate(notification._created)}</TableCell>
                                <TableCell align="center">{notification._to}</TableCell>
                                <TableCell align="center">{notification._channel}</TableCell>
                                <TableCell align="center">{notification._category}</TableCell>
                                <TableCell align="center">{notification._message}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
