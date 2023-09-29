import { Box, IconButton, InputBase, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ItemCardHorizontal = props => {

    return (
        <Stack direction={"row"} justifyContent={"space-between"} height={"80px"}>
            <Stack direction={"row"} spacing={4} height={"100%"}>
                <Box height={"100%"}>
                    <img src="https://inlysugiare.vn/wp-content/uploads/2020/05/ly-ca-phe-bac-xiu-da.jpg" alt="" height={`${props.heightImg ? props.heightImg : "100%"}`}/>
                </Box>

                <Stack justifyContent={"space-between"} height={"100%"}>
                    <Typography fontWeight={"500"} variant="h6">
                        Bạc xỉu
                    </Typography>
                    <Typography>
                        Categories: Cafe
                    </Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <IconButton size="small" sx={{
                            border: "1px solid #ccc",
                            borderRadius: 2
                        }}>
                            <RemoveIcon fontSize="small"/>
                        </IconButton>
                        <Typography fontSize={"1.2rem"}>
                            1
                        </Typography>
                        <IconButton size="small" sx={{
                            border: "1px solid #ccc",
                            borderRadius: 2
                        }}>
                            <AddIcon fontSize="small"/>
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
            <Stack justifyContent={"space-between"} >
                <Typography fontSize={"1.2rem"}>
                    $12
                </Typography>

                <IconButton>
                    <DeleteOutlineOutlinedIcon/>
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default ItemCardHorizontal;