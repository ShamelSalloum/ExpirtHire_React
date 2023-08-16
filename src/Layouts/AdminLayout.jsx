import { Box, Grid, GridItem } from "@chakra-ui/react";
import AdminSideBar from "../Components/AdminSidebar";
import { Outlet } from "react-router-dom";


export default function AdminLayout() {
    return (
        <Box minH="100vh" >
            <Grid templateColumns={'repeat(5,1fr)'} >
                <GridItem colSpan={1}>
                    <AdminSideBar />
                </GridItem>
                <GridItem colSpan={4}>
                    <Outlet />
                </GridItem>
            </Grid>
        </Box>
    )
}
