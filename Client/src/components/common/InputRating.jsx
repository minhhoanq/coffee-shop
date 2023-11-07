import { Box, Button, Rating, Stack, TextareaAutosize, Typography, colors } from "@mui/material"
import { useSelector } from "react-redux";
import { createRatingProduct } from "../../api/ratingApi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const InputRating = props => {
    const [star, setStar] = useState(0);
    const [comment, setComment] = useState('');
    const user = useSelector(state => state.auth?.currentUser);
    const navigate = useNavigate();

    const slug = props.slug;

    const handleSubmitRating = async() => {
        if(user) {
            const submitRating = await createRatingProduct(slug, star, comment)
            // console.log(submitRating);
            if(submitRating.data.err) {
                Swal.fire('', submitRating.data.mes, 'error')
            } else {
                Swal.fire('', submitRating.data.mes, 'success');
                props.loaded();
            }
        } else {
            Swal.fire({title: "Vui lòng đăng nhập!", icon: "warning"}).then((results) => {
                if(results.isConfirmed) {
                    navigate("/login");
                }
            });
        }
    }

    return (
        <Box mt={4}>
            <Stack spacing={2}>
                <Typography variant="h5" fontWeight={600}>
                    Leave your experience
                </Typography>

                <Rating name="half-rating-read" defaultValue={0} precision={1} size="large"
                    sx={{
                        "& .MuiRating-icon": {
                            width: '4.5rem'
                        }
                    }} 
                    onChange={(e, value) => setStar(value)} 
                />

                <TextareaAutosize
                    placeholder="Min rows 4" 
                    style={{
                        outline: "none",
                        padding: "10px 20px",
                        height: "150px"
                    }}
                    onChange={(e) => setComment(e.target.value)}
                />

                <Button variant="contained" sx={{
                    width: "20%",
                    bgcolor: colors.brown[500],
                    color: colors.common.white,
                    "&:hover": {
                        bgcolor: colors.brown[400],
                    }
                }}
                onClick={handleSubmitRating}
                >
                    Submit
                </Button>
            </Stack>
        </Box>
    )
}

export default InputRating;