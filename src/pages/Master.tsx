import React from "react";
import { Container, Stack, Typography, Box, Button } from "@mui/material";
import CardComponentTile from "../components/CardComponentTile";
import FormHeader from "../components/FormHeader";
import { Copyright } from "../components/Copyright";
import { useSelector } from "react-redux";
import { useEffect } from "react";


function Master() {
  const Masters = useSelector((state) =>
    state.master.AUTH_DATA.ROUTES
      ? state.master.AUTH_DATA.ROUTES.label[1].MASTERS
      : []
  );

  const [trigger,setTrigger] = React.useState(false)

  useEffect(() => {
    try {
      if (trigger === true) {
        setTimeout(function () {
          //console.log("This code runs after a delay of 3000 milliseconds.");
        }, 3000);

        google.script.run
          .withSuccessHandler(alert("Wait for next 2 mins and refresh page to see changes"))
          .withFailureHandler((er) => {
            alert(er);
          })
          .requestTrigger();
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [trigger]);
  // const Masters = [
  //       "Company_Information",
  //       "Employee_Master",
  //       "Account_Master",
  //       "Item_Master",
  //       "Workstation_Master",
  //       // "Operation_Master",
  //       "Machine_Master",
  //       "General_Work_List",
  //       // "Item_Master_ListPage",
  //       // "Payment_Mode",
  //     ]

  const onReloadHandler = (e) => {
    setTrigger(true);
  };

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
        {/* <Stack
          direction="row"
          // spacing={2}
          sx={[
            // { marginBottom: "2rem" },
            { width: "99%" },
            { border: 0 },
            { p: 5 },
            // { transition: "background 1s, color 1s" },
            // { "&:hover": { backgroundColor: "#e0f2f1", borderRadius: "15px" } },
            // { borderLeft: 1 },
            // { borderRight: 1 },
            //   { borderColor: "primary.main" },
            //  { background: "#f3e5f5" },
          ]}
          useFlexGap
          // flexWrap="wrap"
          // justifyContent="center"
          // alignItems="center"
        > */}
          <FormHeader headerName="Administration" headerkind="pageheader" />
          {/* <Button disabled={trigger} onClick={onReloadHandler}   sx={[{"fontWeight":600,m:0.1,fontSize:"0.8rem",p:1.2,borderRadius:"1rem",backgroundColor:"#e0f2f1"},{textDecoration: 'none'},{textTransform:"capitalize"}]}>reload</Button> */}
        {/* </Stack> */}


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
          {Masters.map((crd) => (
            <Box sx={{ m: 1 }} key={crd}>
              <CardComponentTile title={crd} page="master" type={"card"} />
            </Box>
          ))}
        </Stack>
        </Stack>
        <Copyright />

    </Container>
  );
}

export default Master;
