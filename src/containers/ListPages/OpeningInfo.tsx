import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { APP_NAME } from "../../utils/constant";


// components

const OpeningInfo = (props) => {



  return (
    <Container
      maxWidth="xl"
      sx={[
        { marginTop: (theme) => theme.spacing(8) },
        // { border: 1 },
        // { borderLeft: 1 },
        // { borderRight: 1 },
        // { borderColor: "primary.main" },
        // { background: "#90caf9" },
      ]}
    >
      <Stack
        sx={
          [
            // { border: 1 },
            // { borderLeft: 1 },
            // { borderRight: 1 },
            // { borderColor: "primary.main" },
          ]
        }
      >
        <Stack
          sx={[
            { border: 1 },
            { padding: "1rem" },
            { borderRadius: 3 },
            // { borderRight: 1 },
            // { background: (theme) =>'#e3f2fd' },
            {
              borderColor: (theme) =>
                theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
            },
          ]}
        >
          <Stack
            sx={
              [
                // { border: 1 },
                // { borderLeft: 1 },
                // { borderRight: 1 },
                // { borderColor: "primary.main" },
                // { background: "#90caf9" },
              ]
            }
            // style={{ background: "#f3e5f5" }}
          >
            <Box
              order={20}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ marginLeft: "1rem" }}
            >
              <Typography
                variant="h5"
                sx={[
                  { display: "flex" },
                  { justifyContent: "center" },
                  { alignItems: "center" },
                  {marginBottom:"1rem"}
                ]}
              >
               <b>Welcome to {`${APP_NAME}`} 1.0</b> 
              </Typography>
            </Box>
            <Stack
              order={20}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ marginLeft: "1rem" }}
            >
              <Typography variant="body2" gutterBottom>
                {/* <b>Software Description: </b>  */}
                Revolutionizing Machine
                Shop Management
              </Typography>

              <Typography variant="body2" gutterBottom>
                {/* <b>Tagline: </b>  */}
                Precision. Productivity. Profits.
              </Typography>
            </Stack>

            <Stack
              order={20}
              display="flex"
              sx={[
                { marginLeft: "1rem" },
                { marginTop: "2rem" },
                { marginBottom: "2rem" },
              ]}
            >
              <b>Overview: </b>
              <section style={{ marginBottom: "2rem" }}>
                <Typography
                  variant="body2"
                  sx={[
                    { marginLeft: "1rem" },
                    { marginTop: "1rem" },
                    { marginBottom: "2rem" },
                  ]}
                >
                  Machinex is an innovative software solution designed to
                  transform the way machine shops operate. This comprehensive
                  tool integrates cutting-edge technology to optimize every
                  aspect of machine and worker performance, streamlining
                  operations, enhancing productivity, and maximizing profits.
                  With Machinex, you'll unlock a new era of efficiency and
                  control in your machine shop.
                </Typography>
              </section>

              <b>Key Features: </b>
              <section style={{ marginBottom: "2rem" }}>
                <List sx={{ listStyle: "decimal", pl: 4 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      <b>Efficiency Evaluation: </b> Machinex provides real-time
                      monitoring and analysis of each machine's performance,
                      ensuring optimal usage and minimizing downtime. The
                      software offers insights into equipment utilization,
                      maintenance needs, and production bottlenecks.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      <b>Worker Performance Tracking: </b>Gain visibility into
                      individual worker productivity and skill levels. Machinex
                      enables you to assess worker efficiency, assign tasks
                      based on expertise, and identify training needs.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      <b> Automated Salary Calculation: </b>Simplify payroll
                      management with Machinex's integrated salary module. It
                      automatically calculates worker wages based on their
                      tasks, hours worked, and skill levels, reducing
                      administrative overhead.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      <b>Mandate Management: </b> Keep your shop aligned with
                      production mandates effortlessly. Machinex offers a
                      centralized platform to assign, track, and manage work
                      mandates, ensuring timely execution and adherence to
                      customer requirements.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      <b>Quotation Generation: </b> Create accurate and
                      competitive quotations with ease. Machinex analyzes
                      historical data and production costs to help you generate
                      quotes that balance profitability and customer
                      expectations.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      <b>Work Validation: </b> Verify customer-provided work
                      rates against your internal benchmarks using Machinex.
                      Ensure that the quoted rates align with your operational
                      costs and profitability targets.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      <b>Data-Driven Insights: </b> Leverage Machinex's advanced
                      analytics to make informed decisions. The software
                      provides actionable insights into production trends,
                      worker performance, machine utilization, and more,
                      empowering you to optimize processes continually.
                    </Typography>
                  </ListItem>
                </List>
              </section>
              <b>Benefits: </b>
              <section style={{ marginBottom: "2rem" }}>
                <List sx={{ listStyle: "decimal", pl: 4 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      <b>Precision: </b> Achieve precision and accuracy in every
                      aspect of your operations. Machinex's data-driven approach
                      minimizes errors and inconsistencies, ensuring
                      high-quality outputs.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      <b>Productivity: </b>Seamlessly increase productivity by
                      identifying operational bottlenecks, optimizing workflows,
                      and maximizing resource utilization. Enhanced worker
                      performance tracking leads to improved overall output.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      <b>Profits: </b> Experience a significant boost in profits
                      through efficient resource allocation, reduced downtime,
                      optimized pricing strategies, and streamlined operations.
                    </Typography>
                  </ListItem>
                </List>
              </section>
              <b>Conclusion: </b>
              <section>
                <List sx={{ listStyle: "decimal", pl: 4 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    <Typography
                      variant="body2"
                      sx={
                        [
                          // { marginTop: "1rem" },
                          // { marginBottom: "2rem" },
                        ]
                      }
                    >
                      Machinex is more than just a software; it's a strategic
                      partner that empowers your machine shop with the tools
                      needed to excel in a competitive market. With its
                      comprehensive features and data-driven insights, Machinex
                      is your gateway to achieving unparalleled precision,
                      boosting productivity, and driving higher profits. Embrace
                      the future of machine shop management with Machinex and
                      witness your operations transform like never before.
                    </Typography>
                  </ListItem>
                </List>
              </section>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default OpeningInfo;
