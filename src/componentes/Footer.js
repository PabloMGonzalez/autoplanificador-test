import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
        background: "#19191a"
      }}
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 2
          }}
        >
          <Typography variant="caption" color="white" mx="2em">
            <p>
              {" "}
              Saavedra 39 7º B, (8000) Bahía Blanca, BA, Argentina © Aoniken
              Servicios IT S.A.{" "}
            </p>
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
