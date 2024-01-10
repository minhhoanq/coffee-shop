import { Box, Button, Stack, Typography, colors } from "@mui/material"
import AddressCard from "../components/common/AddressCard";
import ModalAddAddress from "../components/common/ModalAddAddress";
import { useEffect, useState } from "react";
import NoneItem from "../components/common/NoneItem";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { getUserAddressList } from "../api/userApi";


const Address = () => {
    const [openModalAddAddress, setModalAddAddress] = useState(false);
    const [address, setAddress] = useState([]);

    useEffect(() => {
        const getAddressList = async() => {
            const response = await getUserAddressList();
            setAddress(response.data);
        }

        getAddressList();
    },[])

    const hanldeShowAddAddress = () => {
        setModalAddAddress(!openModalAddAddress)
    }

    return (
        <Box pl={4} pr={4} pt={2}>
            <ModalAddAddress
                open={openModalAddAddress}
                close={(close) => setModalAddAddress(close)}
            />
            <Stack spacing={5}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="h5">
                        My Address
                    </Typography>

                    <Button variant="contained" sx={{
                        width: "200px",
                        bgcolor: colors.brown[500],
                        "&:hover" : {
                            bgcolor: colors.brown[400]
                        }
                    }}
                    
                    onClick={hanldeShowAddAddress}
                    >
                        Add new address
                    </Button>
                </Stack>

                <Stack height={"500px"} spacing={2} maxHeight={"500px"}
                    sx={{
                        overflowY: "scroll"
                    }}
                >
                    {address.length > 0 ? (
                        address.map((item, index) => (
                            <AddressCard item={item} key={index}/>
                        ))
                    ):
                    <NoneItem title={"You haven't linked the address"} icon={<AddLocationAltIcon fontSize="large"/>}/>
                    }
                </Stack>
            </Stack>
        </Box>
    )
}

export default Address;