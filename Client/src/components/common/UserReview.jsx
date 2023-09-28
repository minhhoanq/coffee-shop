import { Box, Stack, Typography, colors } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';

const UserReview = () => {
    return(
        <Box>
            <Stack spacing={1}>
                <Typography variant="h6" fontWeight={"600"}>
                    Name
                </Typography>
                <Typography sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.2rem",
                    color: colors.amber[600]
                }}>
                    4
                    <StarIcon fontSize="small" sx={{
                        marginLeft: "5px",
                        color: colors.amber[600]
                    }}/>
                </Typography>
                <Typography>
                    Review of user for this product
                </Typography>
            </Stack>
        </Box>
    )
}

export default UserReview;