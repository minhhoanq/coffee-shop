import { Autocomplete, Box, Button, IconButton, Modal, Stack, TextField, Typography, colors, createFilterOptions } from "@mui/material";
import axios from "axios";
import { createUserAddress, setDefaultAddress } from "../../api/userApi";

import ClearIcon from '@mui/icons-material/Clear';
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.name,
    
})

const ModalAddAddress = props => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const {
        control,
        handleSubmit
    } = useForm()

    const host = "https://provinces.open-api.vn/api/";

    const getProvinceApi = (api) => {
        return axios.get(api)
            .then((response) => {
                setProvinces(response.data);
            });
    }
    
    var callApiDistrict = (api) => {
        return axios.get(api)
            .then((response) => {
                setDistricts(response.data.districts);
            });
    }
    var callApiWard = (api) => {
        return axios.get(api)
            .then((response) => {
                setWards(response.data.wards);
            });
    }
    
    useEffect(() => {
        getProvinceApi(host);
    },[])

    // var renderData = (array, select) => {
    //     let row = `<option disabled value="">Chọn ${
    //         select === 'city_province' ? 'Tỉnh/Thành Phố' : 
    //         select === 'district' ? 'Quận/Huyện' : 
    //         'Phường/Xã'}</option>`;

    //     array.forEach(element => {
    //         row += `<option id="option" value="${element.code}">${element.name}</option>`
    //     });
    //     document.querySelector("#" + select).innerHTML = row
    // }

    const handleSubmitAddAddress = async(data) => {
        const dataRq = {
            city_province: data.city_province.name,
            district: data.district.name,
            ward: data.ward.name,
            address: data.address,
            is_delivery_address: data.is_delivery_address,
        }

        const response = await createUserAddress(dataRq);
        // console.log(response);
        if(data.is_delivery_address) {
            const value = {
                id: response.data.id
            };
            const re = await setDefaultAddress(value);
            // console.log(re);
        }
        if(response.err === 0) {
            Swal.fire('', response.mes, 'success');
            props.close(false)
        }
    }

    const handleCloseModal = () => {
        props.close(false);
    }

    return (
        <Modal
            open={props.open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    minHeight: 200,
                    height: "550px",
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    p: 2,
                    outline: "none",
                }} 
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                >
                    <IconButton onClick={handleCloseModal}>
                        <ClearIcon/>
                    </IconButton>
                </Box>

               <form onSubmit={handleSubmit(handleSubmitAddAddress)}>
               <Stack spacing={2} >
                    <Typography variant="h5">
                        Add new address
                    </Typography>

                    <Controller
                        control={control}
                        name="city_province"

                        render={({ field: {onChange, value} }) =>  (
                            <Autocomplete
                                id="city_province"
                                options={provinces}
                                getOptionLabel={(option) => option.name}
                                filterOptions={filterOptions}
                                onChange={(event, values) => {
                                    onChange(values)
                                    callApiDistrict(host + "p/" + values.code  + "?depth=2");
                                }}
                                // {...register("city_province")} 
                                sx={{
                                    width: "100%",
                                    outline: "none"
                                }}
                                // size="small"
                                renderInput={(params) => <TextField {...params} label="Province/City" onChange={onChange}/>}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="district"

                        render={({ field: {onChange, value} }) =>  (
                            <Autocomplete
                                id="district"
                                options={districts}
                                getOptionLabel={(option) => option.name}
                                filterOptions={filterOptions}
                                onChange={(event, values) => {
                                    onChange(values)
                                    callApiWard(host + "d/" + values.code + "?depth=2");
                                }}
                                sx={{
                                    width: "100%",
                                    outline: "none"
                                }}
                                // size="small"
                                renderInput={(params) => <TextField {...params} label="District" onChange={onChange}/>}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="ward"

                        render={({ field: {onChange, value} }) => (
                            <Autocomplete
                                id="ward"
                                options={wards}
                                getOptionLabel={(option) => option.name}
                                filterOptions={filterOptions}
                                onChange={(event, values) => {
                                    onChange(values)
                                }}
                                sx={{
                                    width: "100%",
                                    outline: "none"
                                }}
                                // size="small"
                                renderInput={(params) => <TextField {...params} label="Ward" onChange={onChange}/>}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name= "address"
                        render={({ field: {onChange, value} }) => (
                            <TextField 
                                id="address"    
                                label="Address" 
                                onChange={onChange}
                            />
                        )}
                    />
                    
                    <Stack direction={"row"} spacing={1}>
                        <Controller
                            control={control}
                            name="is_delivery_address"
                            render={({ field: {onChange, value}}) => (
                                <input type="checkbox"
                                    onChange={onChange}
                                />
                            )}
                        />

                        <Typography>Set Address Default</Typography>
                    </Stack>
                    
                    <Stack spacing={1}>
                        <Typography>
                            Address type:
                        </Typography>

                        <Stack direction={"row"} spacing={1}>
                            <Button variant="outlined"
                                sx={{
                                    border: `1px solid ${colors.blue[500]}`,
                                    color: "#000",
                                    height: "40px",
                                    width: "80px"
                                }}
                            >
                                Home
                            </Button>

                            <Button variant="outlined"
                                sx={{
                                    border: `1px solid ${colors.orange[900]}`,
                                    color: "#000",
                                    height: "40px",
                                    width: "80px",
                                    "&:hover" : {
                                        border: `1px solid ${colors.orange[800]}`
                                    }
                                }}
                            >
                                Office
                            </Button>
                        </Stack>
                    </Stack>
               </Stack>

               <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    mt: "30px"
                }}>
                    <Stack direction={"row"} spacing={2}>
                        <Button variant="text"
                            sx={{
                                color: "#999",
                            }}
                            onClick={handleCloseModal}
                        >
                            Cancel
                        </Button>

                        <Button variant="contained"
                            sx={{
                                backgroundColor: colors.brown[500],
                                color: "#fff",
                                "&:hover" : {
                                    backgroundColor: colors.brown[400]
                                }
                            }}
                            type="submit"
                            // onSubmit={handleSubmit(handleSubmitAddAddress)}
                        >
                            Submit
                        </Button>
                    </Stack>
               </Box>
               

               </form>
            </Stack>
        </Modal>
    )
}

export default ModalAddAddress;