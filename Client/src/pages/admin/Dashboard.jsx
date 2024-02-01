import { Box, Grid, Paper, Stack } from "@mui/material";
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

import CardContentCpn from "../../components/common/CardContentCpn";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

const CardContents = [
    {
        icon: <RemoveRedEyeOutlinedIcon/>,
        number: 2.873,
        content: "View",
        percent: 0.43,
        color: "green",
        iconPercent: <ArrowUpwardOutlinedIcon color="success"/>
    },
    {
        icon: <ShoppingCartOutlinedIcon/>,
        number: 5.353,
        content: "Profit",
        percent: 0.43,
        color: "green",
        iconPercent: <ArrowUpwardOutlinedIcon color="success"/>
    },
    {
        icon: <Inventory2OutlinedIcon/>,
        number: 873,
        content: "Product",
        percent: 0.63,
        color: "green",
        iconPercent: <ArrowUpwardOutlinedIcon color="success"/>
    },
    {
        icon: <GroupsOutlinedIcon/>,
        number: 273,
        content: "Users",
        percent: 1.39,
        color: "red",
        iconPercent: <ArrowDownwardOutlinedIcon color="error"/>
    }
]

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const Dashboard = () => {

    return (
        <Box display={"flex"} justifyContent={"center"} p={4} bgcolor={"#f5f5f5"}>
            <Grid container xs={12}>
                <Grid container spacing={4}>
                    {CardContents && CardContents.map((item, index) => (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                            <CardContentCpn item={item}/>
                        </Grid>
                    ))}
                </Grid>

                <Stack justifyContent={"space-between"} width={"100%"} mt={4} direction={"row"}>
                    <Paper width={"100%"}>
                        <LineChart
                            width={700}
                            height={300}
                            series={[
                                { data: pData, label: 'pv', yAxisKey: 'leftAxisId' },
                                { data: uData, label: 'uv', yAxisKey: 'rightAxisId' },
                            ]}
                            xAxis={[{ scaleType: 'point', data: xLabels }]}
                            yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
                            rightAxis="rightAxisId"
                        />
                    </Paper>
                    <Paper>
                        <BarChart
                            series={[ 
                                { data: [3, 4, 1], stack: 'A', label: 'Series A1' },
                                { data: [4, 3, 1], stack: 'A', label: 'Series A2' },
                                { data: [4, 2, 5], stack: 'B', label: 'Series B1' },
                                { data: [2, 8, 1], stack: 'B', label: 'Series B2' },
                            ]}
                            width={400}
                            height={300}
                        />
                    </Paper>
                </Stack>
                <Stack justifyContent={"space-between"} width={"100%"} direction={"row"} mt={4} spacing={4}>
                    <Box flex={1}>
                        <Paper>
                            <PieChart
                                series={[
                                    {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                    },
                                ]}
                                width={400}
                                height={200}
                            />
                        </Paper>
                    </Box>
                    <Box flex={2} >
                        <Paper> 
                            <Box height={"200px"}>
                                Loading...
                            </Box>
                        </Paper>
                    </Box>
                </Stack>
            </Grid>
        </Box>
    )
}

export default Dashboard;