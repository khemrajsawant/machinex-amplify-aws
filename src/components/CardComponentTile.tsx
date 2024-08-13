import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { title } from "../utils/cardsMetaData";
import VisibilityIcon from "@mui/icons-material/Visibility";

import React from "react";

export default function CardComponentTile(props) {
  const routeText = title[props.title];
  // ////console.log(routeText);
  if (props.type == "button") {
    return (
      <>
        <Button variant="outlined">
          <Link
            to={`/${props.page}/${props.title}`}
            relative="path"
            underline="hover"
          >
            <Typography variant="h5" component="div">
              {props.title}
            </Typography>
          </Link>
        </Button>
      </>
    );
  } else if (props.type == "card") {
    return (
      <Card
        sx={[
          { width: "15rem" },
          { height: "5rem" },
          { backgroundColor: "#f5f5f5" },
          { transition: "background 0s, color 1s" },
          { "&:hover": { backgroundColor: "#f5f5f5" ,padding:"0px",boxShadow: "0px 10px #f5f5f5"} },
          // { border: "1px solid" },
          { padding: "10px" },
          { boxShadow: "5px 10px #f3e5f5" },
        ]}
      >
        <Box
          sx={[
            { minWidth: "10rem" },
            { height: "1rem" },
            { backgroundColor: "#2a5fa6" },
          ]}
          display="flex"
          direction="row"
        >
          <ButtonGroup style={{marginLeft:"8rem"}}>
          <Button sx={[{ color: "grey" },{ '&:hover':{backgroundColor: "#f3e5f5", color: "grey"}}]}>
            <EditIcon sx={[{ color: "white" },{ '&:hover':{backgroundColor: "#f3e5f5", color: "grey", borderRadius:"2px" }}, { height: "0.8rem" }]} />
          </Button>
          <Button sx={[{ color: "grey" },{ '&:hover':{backgroundColor: "#f3e5f5", color: "grey"}}]}>
            <VisibilityIcon sx={[{ color: "white" },{ '&:hover':{backgroundColor: "#f3e5f5", color: "grey", borderRadius:"2px" }}, { height: "0.8rem" }]} />
          </Button>
          </ButtonGroup>
        </Box>

        <Box
          sx={[{ minWidth: "10rem" }, { height: "3rem" }]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="row" spacing={1}>
            <Link
              to={`/${props.page}/${routeText}`}
              relative="path"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  m: 0.1,
                  fontSize: "1rem",
                  p: 1,
                  borderRadius: "0.5rem",
                  backgroundColor: "#e0f2f1",
                  width: "100%",
                  textTransform: "capitalize",
                }}
              >
                {props.title.replace(/_/g, " ")}
              </Typography>
            </Link>
          </Stack>
        </Box>
      </Card>
    );
  }
}
