import { Box, IconButton, Stack, Typography, colors } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';

const UserReview = props => {
    const userRating = props.item;

    return(
        <Box>
            <Stack direction={"row"} alignItems={"center"}>
                <Stack spacing={1} sx={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: 2
                }}>
                    <Typography variant="h6" fontWeight={"600"}>
                        {userRating.userData?.username}
                    </Typography>
                    <Typography sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "1.2rem",
                        color: colors.amber[600]
                    }}>
                        {userRating?.star}
                        <StarIcon fontSize="small" sx={{
                            marginLeft: "5px",
                            color: colors.amber[600]
                        }}/>
                    </Typography>
                    <Typography>
                        {userRating?.comment}
                    </Typography>
                </Stack>

                <IconButton sx={{height: "50%"}}>
                    <MoreHorizTwoToneIcon/>
                </IconButton>
            </Stack>
        </Box>
    )
}

export default UserReview;