import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select';
import { LaptopModel } from '../Models/LaptopModel';


export default function Laptop() {

    const initialValue: LaptopModel = {
        id: 0,
        laptopName: '',
        laptopCompanyId: 0,
        laptopDescription: '',
        laptopPrice: 0,
        laptopDisplaySize: 0,
        laptopProcessorSeriesId: 0,
        laptopRAMSizeGB: 0,
        laptopColorId: 0,
        laptopOperatingSystemId: 0,
        align: undefined
    }

    const [laptopInfo, setLaptopInfo] = useState<LaptopModel>(initialValue)
    const handleSubmit = async () => {
        alert(JSON.stringify(laptopInfo));
        console.log(laptopInfo)

    //    // var result = await CreateLaptopService(laptopInfo);
    //     alert(result.data);
    //     console.log(result.data);
    }



    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setLaptopInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (/^\d*$/.test(value)) {
            setLaptopInfo(prevState => ({ ...prevState, [name]: value }));
        }
    };


    const handleSelectChange = (event: any) => {
        const { name, value } = event.target;
        setLaptopInfo(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ marginTop: 20, height: '100vh' }}>
            <Grid item xs={10} sm={6} md={6}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="laptopInfo"
                                label="Laptop Name"
                                variant="outlined"
                                size="small"
                                name='laptopName'
                                onChange={(e) => handleTextChange(e)}
                                value={laptopInfo.laptopName}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                           
                                <TextField
                                    fullWidth
                                    id="outlined-multiline-static"
                                    label="Laptop Description"
                                    multiline
                                    rows={4}
                                    size='small'
                                    name='laptopDescription'
                                    onChange={(e) => handleTextChange(e)}
                                    defaultValue={laptopInfo.laptopDescription}
                                    required
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Laptop Company</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="laptopCompanyId"
                                    value={laptopInfo.laptopCompanyId}
                                    label="Age"
                                    name='laptopCompanyId'
                                    onChange={(e) => handleSelectChange(e)}
                                >
                                    <MenuItem value={0}>
                                        Select
                                    </MenuItem>
                                    <MenuItem value={1}>Apple</MenuItem>
                                    <MenuItem value={2}>Acer</MenuItem>
                                    <MenuItem value={3}>Dell</MenuItem>
                                    <MenuItem value={4}>HP</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="laptopInfo"
                                label="Laptop Price"
                                variant="outlined"
                                size="small"
                                name='laptopPrice'
                                onChange={(e) => handleNumberChange(e)}
                                value={laptopInfo.laptopPrice}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="laptopInfo"
                                label="Display Size"
                                variant="outlined"
                                size="small"
                                name='laptopDisplaySize'
                                onChange={(e) => handleTextChange(e)}
                                value={laptopInfo.laptopDisplaySize}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Processor Series</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="laptopProcessorSeriesId"
                                    value={laptopInfo.laptopProcessorSeriesId}
                                    label="Age"
                                    name='laptopProcessorSeriesId'
                                    onChange={(e) => handleSelectChange(e)}
                                >
                                    <MenuItem value={0}>
                                        Select
                                    </MenuItem>
                                    <MenuItem value={1}>Intel Core</MenuItem>
                                    <MenuItem value={2}>Intel Xeon</MenuItem>
                                    <MenuItem value={3}>Intel Atom</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="laptopInfo"
                                label="RAM Size GB"
                                variant="outlined"
                                size="small"
                                name='laptopRAMSizeGB'
                                onChange={(e) => handleTextChange(e)}
                                value={laptopInfo.laptopRAMSizeGB}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label"> Color</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="laptopColorId"
                                    value={laptopInfo.laptopColorId}
                                    label="Age"
                                    name='laptopColorId'
                                    onChange={(e) => handleSelectChange(e)}
                                ><MenuItem value={0}>
                                        Select
                                    </MenuItem>
                                    <MenuItem value={1}>Black</MenuItem>
                                    <MenuItem value={2}>Silver</MenuItem>
                                    <MenuItem value={3}>Gold</MenuItem>
                                    <MenuItem value={4}>White</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Operating System</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="laptopOperatingSystemId"
                                    value={laptopInfo.laptopOperatingSystemId}
                                    label="Age"
                                    name='laptopOperatingSystemId'
                                    onChange={(e) => handleSelectChange(e)}
                                >
                                    <MenuItem value={0}>
                                        Select
                                    </MenuItem>
                                    <MenuItem value={1}>Ios</MenuItem>
                                    <MenuItem value={2}>Windows</MenuItem>
                                    <MenuItem value={3}>Intel Atom</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

