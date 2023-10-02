import { Box } from "@mui/material"

const DescriptionProduct = props => {
    return (
        <Box fontSize={"1.2rem"}>
            {props.item?.productDescription}
        </Box>
    )
}

export default DescriptionProduct;