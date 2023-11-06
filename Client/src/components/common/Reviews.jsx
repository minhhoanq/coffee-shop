import { Box, Stack } from "@mui/material"
import UserReview from "./UserReview";
import InputRating from "./InputRating";
import { getAllRatingsProduct } from "../../api/productApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = props => {
    const [ratings, setRatings] = useState([]);
    const [load, setLoad] = useState(false);

    const { slug } = useParams();

    const getRatingsProductData = async() => {
        const result = await getAllRatingsProduct(slug);
        setRatings(result.ratingsData);
    }

    useEffect(() => {
        getRatingsProductData();
        // props.qtyRate(4);
    },[load]);

    return (
        <Box ml={4}>
            <Stack spacing={1}>
                {ratings.map((item, index) => (
                    <UserReview key={index} item={item}/>
                ))}
            </Stack>
            <InputRating slug={slug} loaded={() => setLoad(!load)}/>
        </Box>
    )
}

export default Reviews;