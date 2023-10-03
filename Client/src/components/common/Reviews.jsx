import { Box, Stack } from "@mui/material"
import UserReview from "./UserReview";
import InputRating from "./InputRating";

const Reviews = props => {
    const ratings = props.ratings;
    const item = props.item;

    return (
        <Box ml={4}>
            <Stack spacing={1}>
                {ratings.map((item, index) => (
                    <UserReview key={index} item={item}/>
                ))}
            </Stack>
            <InputRating item={item} />
        </Box>
    )
}

export default Reviews;