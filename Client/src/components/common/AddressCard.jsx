import { Box, Button, Stack, Typography, colors } from "@mui/material"
import { useCallback } from "react";
import { setDefaultAddress } from "../../api/userApi";

const AddressCard = props => {
    const item = props.item;

    const handleSetDefaultAddress = useCallback(async() => {
        const id = item.id;
        const data = {
            id
        }
        const response = await setDefaultAddress(data);
        // console.log(response)
    })

    return (
        <Box sx={{
            borderTop: "1px solid #ccc",
        }}>
            <Stack direction={"row"} justifyContent={"space-between"} mt={"10px"} >
                <Stack spacing={1}>
                    <Stack direction={"row"} alignItems={"center"}>
                        <Typography variant="h6">
                            {item.userData.firstname + " " + item.userData.lastname}
                        </Typography>

                        <div style={{
                            height: "60%",
                            width: "1px",
                            borderLeft: "1px solid #ccc",
                            margin: "0 10px"
                        }}/>

                        <Typography>
                            (+84) 941151376
                        </Typography>
                    </Stack>

                    <Typography color={"#999"}>
                        {item.address}
                    </Typography>

                    <Typography color={"#999"}>
                        {item.ward}, {item.district}, {item.city_province}
                    </Typography>

                    {item.is_delivery_address === true && (
                        <Box sx={{
                            border: `1px solid ${colors.brown[400]}`,
                            width: "70px",
                            padding: "2px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: colors.brown[400]
                        }}>
                            Default
                        </Box>
                    )}
                </Stack>

                <Stack>
                    <Button variant="text"
                        sx={{
                            color: colors.brown[400],
                            fontWeight: "600"
                        }}
                    >
                        Update
                    </Button>

                    <Button variant="outlined"
                        sx={{
                            color: colors.brown[400],
                            border: `1px solid ${colors.brown[400]}`,
                            "&:hover" : {
                                border: `1px solid ${colors.brown[400]}`,
                                backgroundColor: colors.brown[100],
                            }
                        }}
                        onClick={handleSetDefaultAddress}
                    >
                        Set Default Address
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default AddressCard;