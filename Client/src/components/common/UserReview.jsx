import { Box, Button, IconButton, Menu, MenuItem, Stack, Typography, colors } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteRatingProduct } from "../../api/ratingApi";
import Swal from "sweetalert2";

const UserReview = props => {
    const userRating = props.item;
    const date = new Date(userRating.updatedAt);
    const user = useSelector(state => state?.auth.currentUser);
    const { slug } = useParams();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    // timeZoneName: "short",
    };

    const formattedDate = date.toLocaleString("en-US", options);

    const handleDeleteRating = useCallback(async() => {
        const deleteRating = await deleteRatingProduct(slug);
        console.log(deleteRating);
        // console.log(submitRating);
        if(deleteRating.data.err) {
            Swal.fire('', deleteRating.data.mes, 'error')
        } else {
            Swal.fire('', deleteRating.data.mes, 'success');
            props.loaded();
        }
    })

    return(
        <Box>
            <Stack direction={"row"} alignItems={"center"}>
                <Stack spacing={1} sx={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: 2,
                    minWidth: "150px"
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
                        {/* Đây là đánh giá của người dùng đối với sản phẩm này, vui lòng hạn chế các từ ngữ không phù hợp. Hãy là người tiêu dùng lịch sự, thông minh và sáng suốt. Cảm ơn bạn đã để lại trải nghiệm của bản thân! */}
                    </Typography>
                    <Typography>
                        {/* {userRating?.updatedAt} */}
                        {formattedDate}
                    </Typography>
                </Stack>

                        <IconButton
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            sx={{height: "50%"}}
                        >
                            <MoreHorizTwoToneIcon/>
                        </IconButton>

                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            >

                            { Number(user?.id) === Number(userRating.userId) && 
                                <MenuItem onClick={handleDeleteRating}>Xóa</MenuItem>
                            }
                                <MenuItem>Báo cáo</MenuItem>
                        </Menu>
            </Stack>
        </Box>
    )
}

export default UserReview;