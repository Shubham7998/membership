import React from 'react';
import SideNav from './SideNav';
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import '../Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from './AccordionDash';

export default function Home() {
    return (
        <>
            <div className='bgColor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconstylewhite'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                $500.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ffff" }}>
                                                Total Earnings
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconstylewhite'>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffff" }}>
                                                $500.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ffff" }}>
                                                Total Earnings
                                            </Typography>

                                        </CardContent>

                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ maxWidth: 345 }} className='gradientlight'>
                                        <Stack spacing={2} direction="row">
                                            <div className='iconstylewhite'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>$230k</span>
                                                <br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <Stack spacing={2} direction="row">
                                            <div className='iconstyleblack'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>$230k</span>
                                                <br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3.72}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className='paddingall'>
                                            <span className='pricetitle'>Popular Products</span>
                                        </div>
                                        <AccordionDash />
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>

                    </Box>

                </Box>
            </div>
        </>
    );
}
