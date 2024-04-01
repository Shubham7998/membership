import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import React, { useState } from 'react'
import { LaptopModel } from '../Models/LaptopModel'

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
    }

    const [laptopInfo, setLaptopInfo] = useState<LaptopModel>(initialValue);

    const LaptopCompanyName = ["Acer", "Dell", "Apple", "Lenevo"];
    const LaptopColor = ["Black", "White", "Silver"];
    const LaptopOperatingSystem = ["Windows", "Mac", "Linux"];
    const LaptopProcessorSeries = ["Intel", "AMD"];

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>
    ) => {
        var name = event.currentTarget.name;
        var newValue = event.currentTarget.value;
        setLaptopInfo((prev) => ({ ...prev, [name]: newValue }));
    };

    return (
        <div>
            <div>
                <TextField sx={{ minWidth: 400}} name="laptopName" onChange={(e: any) => onInputChange(e)} value={laptopInfo.laptopName} id="laptopName" label="Laptop Name" variant="outlined" />
                <SelectAutoWidth />
                
                <select name="LaptopCompanyName" id="LaptopCompanyName">
                {LaptopCompanyName.map((company, index) => (
                            <MenuItem key={index} value={index}>
                                {company}
                            </MenuItem>
                ))}
                </select>
                <Button sx={{ margin: 10 }} variant="outlined">Primary</Button>
            </div>
        </div>
    )
}

function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ marginTop: 10, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}