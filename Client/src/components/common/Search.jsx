import { Autocomplete, Box, TextField, createFilterOptions, Stack, InputBase } from "@mui/material"

import SearchIcon from '@mui/icons-material/Search';

const categories = [
    {
        title: "Coffee",
        state: "coffee",
    },
    {
        title: "Tea",
        state: "tea",
    },
    {
        title: "Milk Tea",
        state: "milktea",
    }
]

const prices = [
    {
        title: "Decrease",
        state: "decrease"
    },
    {
        title: "Ascending",
        state: "ascending"
    }
]

const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title
})

const Seach = () => {

    const SeachWrapper = props => {
        return (
            <Box
            size={"small"}
            border={"1px solid #ccc"}
            borderRadius={"2px"}
            display={"flex"}
            sx={{
                    width:{ xl: "auto", lg: "auto", md: "auto", sm: "auto", xs: "100%"},
                    mb: { xl: "0", lg: "0", md: "0", sm: "0", xs: "20px"}
                }}
            >
                {props.children}
            </Box>
        )
    }
    
    const SearchIconWrapper = props => {
        return (
            <Box
                sx={{
                    width:"50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRight: "1px solid #ccc"
                }}
            >
                {props.children}
            </Box>
        )
    }

    const SearchInput = props => {
        return (
            <InputBase
                sx={{
                    height: "35px",
                    width: "100%",
                    pr: 2,
                    pl: 2,
                    '& .MuiInputBase-input': {
                        p: 0,
                        fontSize: "1rem"
                    },

                    // display: { xl: "block", lg: "block", md: "block", sm: "block", xs: "none"}
                }}
                placeholder={props.placeholder}
            />
        )
    }

    return (
        <Box
            pt={5}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: { xl: "row", lg: "row", md: "row", sm: "row", xs: "column-reverse"}
            }}
        >
            <Stack spacing={2} direction={"row"}
                sx={{
                    width: { xl: "auto", lg: "auto", md: "auto", sm: "auto", xs: "100%"},
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    ml: "10px",
                    mr: "10px"
                }}
            >
                <Autocomplete
                    id="filter-category"
                    options={categories}
                    getOptionLabel={(option) => option.title}
                    filterOptions={filterOptions}
                    sx={{
                        width: { xl: "200px", lg: "200px", md: "200px", sm: "200px", xs: "60%"},
                        outline: "none"
                    }}
                    size = "small"
                    renderInput={(params) => <TextField {...params} label="Categories" />}
                />

                <Autocomplete
                    id="sort-price"
                    options={prices}
                    getOptionLabel={(option) => option.title}
                    filterOptions={filterOptions}
                    sx={{
                        width: { xl: "150px", lg: "150px", md: "150px", sm: "150px", xs: "40%"},
                        outline: "none"
                    }}
                    size="small"
                    renderInput={(params) => <TextField {...params} label="Prices" />}
                />
            </Stack>

            <SeachWrapper>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>

                <SearchInput
                    placeholder={"Search"}
                />
            </SeachWrapper>
        </Box>
    )
}

export default Seach;