import { Box } from "@mui/material"
import UserReview from "./UserReview";
import InputRating from "./InputRating";

const Reviews = () => {
    return (
        <Box ml={4}>
            <UserReview/>
            <InputRating/>
        </Box>
    )
}

export default Reviews;