import React, { useState } from 'react'
import SideNav from './SideNav'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, TextField } from '@mui/material'

export default function Gender() {
  const genderIdentities: string[] = [
    "Male",
    "Female",
    "Non-binary",
    "Genderqueer",
    "Genderfluid",
    "Agender",
    "Bigender",
    "Two-Spirit",
    "Hijra",
    "Pangender",
    "Demiboy",
    "Demigirl",
    "Gender nonconforming",
    "Androgynous",
    "Neutrois",
    "Genderflux",
    "Genderfluid",
    "Third gender",
    "Transgender",
    "Transmasculine",
    "Transfeminine",
    "Intersex"
  ];
  const handleSelectChange = (event: any) => {
    const { name, value } = event.target;
    alert(value);
  };


  return (
    <div>
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <div>
          <h2>List of Gender Identities</h2>
          <ul>
            {genderIdentities.map((gender, index) => (
              <li key={index}>{gender}</li>
            ))}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Laptop Company</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="laptopCompanyId"
                label="Age"
                name='laptopCompanyId'
                onChange={(e) => handleSelectChange(e)}
              >
                {genderIdentities.map((gender, index) => (
                  <MenuItem value={10}>{gender}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </ul>
        </div>
      </Box>
    </div>
  )
}
