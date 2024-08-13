import React from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import CardComponentTile from "../components/CardComponentTile";
import FormHeader from "../components/FormHeader";
import { Copyright } from "../components/Copyright";

import { useSelector } from "react-redux";

function Transactions() {

  const Transactions = useSelector((state) =>
  state.master.AUTH_DATA.ROUTES ? state.master.AUTH_DATA.ROUTES.label[1].TRANSACTIONS : []
);

  // const Transactions = [
  //   "Work_Order",
  //   "Daily_Work_Report",
  //   "Job_Work_Order",
  //   "Job_Work_Receipt",
  //   "Sale_Challan",
  //   "Payment",
  //   "Rejection",
  // ];

  // const fetchData = async () => {
  //   try {
  //     google.script.run
  //       .withSuccessHandler((data) => {
  //         alert(data);
  //       })
  //       .withFailureHandler((er) => {
  //         alert(er);
  //       })
  //       .importData();
  //   } catch (error) {
  //     console.error(error); // You might send an exception to your error tracker like AppSignal
  //     return "Hello";
  //   }
  // };

  return (
    <Container
      maxWidth="xl"
      sx={[
        { border: 1 },
        { padding: "1rem" },
        { borderRadius: 10 },
        // { borderRight: 1 },
        // { background: (theme) =>'#e3f2fd' },
        {
          borderColor: (theme) =>
            theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
        },
      ]}
    >
      <Stack
        spacing={3}
        sx={[
          { marginTop: (theme) => theme.spacing(10) },
          { height: "100vh" },
          //   {
          //     borderColor: "primary.main",
          //     borderWidth: "0.1em",
          //     borderStyle: "thick",
          //   },
        ]}
      >
        <FormHeader headerName="Transactions" headerkind="pageheader" />

        <Stack
          direction="row"
          spacing={2}
          sx={[
            { marginBottom: "2rem" },
            { width: "100%" },
            { border: 0 },
            { p: 5 },
            { transition: "background 1s, color 1s" },
            { "&:hover": { backgroundColor: "#e0f2f1", borderRadius: "15px" } },
            // { borderLeft: 1 },
            // { borderRight: 1 },
            //   { borderColor: "primary.main" },
            //  { background: "#f3e5f5" },
          ]}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {Transactions.map((crd) => (
            <Box sx={{ m: 1 }} key={crd}>
              <CardComponentTile
                title={crd}
                page="transactions"
                type={"card"}
              />
            </Box>
          ))}
        </Stack>
      </Stack>
      <Copyright />
    </Container>
  );
}

export default Transactions;
