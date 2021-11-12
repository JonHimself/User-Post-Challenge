import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserRow from './UserRow';

import './UserTable.css'



const UserTable = () => {
    const [userData, setUserData] = useState([])
    const [userPostData, setUserPostData] = useState([])
    const [loading, setLoading] = useState(true)

    const initialUserData = async () => {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUserData(data)
        }catch(e) {
            console.log('Failed Response', e.message)
        }    
    }

    const postData = async (userId) => {
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            setUserPostData(data)
            setLoading(false)
        }catch(e) {
            console.log('Failed Response', e.message)
        }
        
    }

    const postClickHandler = (id) => {
        postData(id)
    }

    useEffect(() => {
        initialUserData()
    }, [])


    return (
    <TableContainer id='container' component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Username</TableCell>
            <TableCell align="left">Full Name</TableCell>
            <TableCell align="left">Website</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user) => (
            <UserRow key={user.id} postHandler={postClickHandler} row={user} posts={userPostData} load={loading}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default UserTable
