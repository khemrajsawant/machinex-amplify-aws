import { Container, Stack, Box } from "@mui/material";
import CardComponentTile from "../components/CardComponentTile";
import FormHeader from "../components/FormHeader";
import { Copyright } from "../components/Copyright";
import { useSelector } from "react-redux";
import { RootState } from "../redux/tableStateGenForm/store"; // Importing RootState type

function Transactions() {
  const Transactions = useSelector((state: RootState) =>
    state.master.AUTH_DATA?.ROUTES?.label[1]?.TRANSACTIONS || []
  );

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
          ]}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {Transactions.map((crd: any) => (
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
