import React from "react";
import { Container, Stack } from "@mui/material";
import OpeningInfo from "../containers/ListPages/OpeningInfo";
import { Copyright } from "../components/Copyright";

function Home() {
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
          { marginTop: (theme) => theme.spacing(8) },
          //   {
          //     borderColor: "primary.main",
          //     borderWidth: "0.1em",
          //     borderStyle: "thick",
          //   },
        ]}
      >

        <OpeningInfo />
      </Stack>
      <Copyright />
    </Container>
  );
}

export default Home;
