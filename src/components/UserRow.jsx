import React, { useState, useEffect } from 'react'

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


const UserRow = (props) => {
    const { row } = props;
    const [open, setOpen] = useState(false);

    const loader = <TableRow><TableCell> Loading ... </TableCell></TableRow>   

    const postData = props.posts.map((post) => (
      <TableRow key={post.id}>
        <TableCell component="th" scope="row">
          {post.userId}
        </TableCell>
        <TableCell>{post.id}</TableCell>
        <TableCell align="left">{post.title}</TableCell>
        <TableCell align="left">
          {post.body}
        </TableCell>
      </TableRow>
    ))

    return (
        <>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon onClick={() => props.postHandler(row.id)}/> : <AddIcon onClick={() => props.postHandler(row.id)} />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.username}
        </TableCell>
        <TableCell align="left">{row.name}</TableCell>
        <TableCell align="left">{row.website}</TableCell>
        <TableCell align="left">{row.email}</TableCell>
        <TableCell align="left">{row.phone}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Posts
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>userId</TableCell>
                    <TableCell>PostId</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Body</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.load ? loader : postData}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
        </>
    )
}

export default UserRow
