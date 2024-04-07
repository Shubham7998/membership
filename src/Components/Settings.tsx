import React from 'react';
import SideNav from './SideNav';
import { Box } from '@mui/material';
import Navbar from './Navbar';

export default function Settings() {
    return (
        <>
            <Box height={30}/>
                <Box sx={{ display: 'flex' }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <h1>Setting</h1>
                    </Box>
            </Box>
        </>
    );
}
