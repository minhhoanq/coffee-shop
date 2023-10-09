import { Box, Button, Stack, Typography, colors } from "@mui/material"
import AddressCard from "../components/common/AddressCard";
import ModalAddAddress from "../components/common/ModalAddAddress";
import { useState } from "react";

const Address = () => {
    const [openModalAddAddress, setModalAddAddress] = useState(false)

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
                    
                    onClick={hanldeShowAddAddress}>
                        Add new address
                    </Button>
                </Stack>

                <Stack spacing={2} maxHeight={"500px"}
                    sx={{
                        overflowY: "scroll"
                    }}
                >
                    <AddressCard/>
                    <AddressCard/>
                    <AddressCard/>
                    <AddressCard/>
                    <AddressCard/>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Address;