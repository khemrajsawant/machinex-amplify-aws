import React, { useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import CardComponentTile from "../components/CardComponentTile";
import FormHeader from "../components/FormHeader";
import { Copyright } from "../components/Copyright";
import { useSelector } from "react-redux";
import { RootState } from "../redux/tableStateGenForm/store"; // Importing RootState type

function Master() {
  const Masters = useSelector((state: RootState) =>
    state.master.AUTH_DATA?.ROUTES?.label[1]?.MASTERS || []
  );

  const [trigger, setTrigger] = React.useState<boolean>(false);

  useEffect(() => {
    try {
      if (trigger) {
        setTimeout(() => {
          // console.log("This code runs after a delay of 3000 milliseconds.");
        }, 3000);

        google.script.run
          .withSuccessHandler(() =>
            alert("Wait for next 2 mins and refresh page to see changes")
          )
          .withFailureHandler((er: any) => {
            alert(er);
          })
          .requestTrigger();
      }
    } catch (error) {
      console.error(error); // You might send an exception to your error tracker like AppSignal
    }
  }, [trigger]);

  const onReloadHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTrigger(true);
  };

  return (
    <Container
      maxWidth="xl"
      sx={[
        { border: 1 },
        { padding: "1rem" },
        { borderRadius: 10 },
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
        ]}
      >
        <FormHeader headerName="Administration" headerkind="pageheader" />

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
          ]}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {Masters.map((crd: any) => (
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
