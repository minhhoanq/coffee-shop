import { Box, Button, Rating, Stack, TextareaAutosize, Typography, colors } from "@mui/material"

const InputRating = () => {

    return (
        <Box mt={4}>
            <Stack spacing={2}>
                <Typography variant="h5" fontWeight={600}>
                    Leave your experience
                </Typography>

                <Rating name="half-rating-read" defaultValue={0} precision={0.5} size="large"
                    sx={{
                        "& .MuiRating-icon": {
                            width: '4.5rem'
                        }
                    }}  
                />

                <TextareaAutosize
                    // aria-label="minimum height" 
                    // minRows={4}
                    placeholder="Min rows 4" 
                    style={{
                        outline: "none",
                        padding: "10px 20px",
                        height: "150px"
                    }}
                />

                <Button sx={{
                    width: "20%",
                    bgcolor: colors.brown[500],
                    color: colors.common.white
                }}>
                    Submit
                </Button>
            </Stack>
        </Box>
    )
}

export default InputRating;