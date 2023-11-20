import { useEffect, useState } from "react";

import { Autocomplete, Box, Button, Checkbox, IconButton, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize, Typography, colors, createFilterOptions } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { getAllStaff } from "../../api/userApi";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { Controller, useForm } from "react-hook-form";
import { createProduct } from "../../api/productApi";

const categories = [
    {
        title: "Coffee",
        state: "1",
    },
    {
        title: "Milk Tea",
        state: "2",
    },
    {
        title: "Tea",
        state: "3",
    },
    {
        title: "Cake",
        state: "4",
    },
]

const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
})

const CreateProduct = () => {

    const {
        control,
        register,
        handleSubmit
    } = useForm()

    const handleCreateProduct = async(data) => {
        console.log(data)
        // const response = await createProduct(data);
        // console.log(response);
    }

    return (
        <Box sx={{
            p: "40px",
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}>
            <Stack>
                <Typography variant="h6">
                    <Breadcrumbs/>
                </Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}  mt={2}>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                        <Typography variant="h4">
                            Create new product
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Box mt={4}
            component={"form"} onSubmit={handleSubmit(handleCreateProduct)} 
            sx={{
                width: "100%",
                // height: "600px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px 0 rgba(0,0,0,.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "30px"
            }}>
                <Stack spacing={4} >
                    <TextField label={`Name`} fullWidth
                        name={`name`} 
                        id={`name`}
                        inputProps={{
                            style: {
                                height: "50px",
                                padding: '0 10px',
                            }
                        }}
                        {...register("name")}
                    />

                    <Controller
                        control={control}
                        name="category"
                        render={({ field: {onChange, value} }) =>  (
                            <Autocomplete
                                fullWidth
                                id="category"
                                name="category"
                                options={categories}
                                getOptionLabel={(option) => option.title}
                                filterOptions={filterOptions}
                                onChange={(event, values) => {
                                    onChange(values);
                                }}
                                size = "large"
                                renderInput={(params) => <TextField {...params} label="Categories" onChange={onChange}/>}
                            />
                        )}
                    />
                    <TextField label={`Price`} fullWidth
                        name={`price`} 
                        id={`price`}
                        inputProps={{
                            style: {
                                height: "50px",
                                padding: '0 10px',
                            }
                        }}
                        {...register("price")}

                    />
                    
                    <TextField label={`Sold`} fullWidth
                        name={`sold`} 
                        id={`sold`}
                        inputProps={{
                            style: {
                                height: "50px",
                                padding: '0 10px',
                            }
                        }}
                        {...register("sold")}
                    />
                    <TextareaAutosize
                        placeholder="Description"
                        id="description"
                        name="description"
                        style={{
                            outline: "none",
                            padding: "10px 20px",
                            height: "100px"
                        }}
                        {...register("description")}
                    />

                    <label htmlFor="image" style={{
                        cursor: "pointer"
                    }}>
                        <Box width={"100%"}
                            sx={{
                                border: "1px dashed rgb(187, 195, 203)",
                                
                                height: "200px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                p: 2,
                                flexDirection: "column",
                                "&:hover" : {
                                    border: "1px dashed #007bff",
                                }
                            }}
                        >
                            <img 
                                height={"80px"} 
                                width={"150px"} 
                                src="https://www.iav.com/app/uploads/2019/01/LM_prod_life_cycle_icon_16_9.png"
                            />
                            <Stack alignItems={"center"} mt={1}>
                                <Typography variant="h6">
                                    Drop your file here, or click to brower
                                </Typography>
                                <Typography color={"#999"}>
                                    Max size 5 MB
                                </Typography>
                                <Typography color={"#999"}>
                                    Support image/png, image/jpeg, image/jpg
                                </Typography>
                            </Stack>
                        </Box>
                    </label>

                    <input id="image" name="image" type="file" hidden {...register('image')}/>
                </Stack>
                <Button type="submit" fullWidth variant="contained" size="large" sx={{
                        bgcolor: colors.blue[700],
                        marginTop: "40px",
                        "&:hover" : {
                            bgcolor: colors.blue[600]
                        }
                    }}>
                        Apply changes
                </Button>
            </Box>
        </Box>
    )
}

export default CreateProduct;