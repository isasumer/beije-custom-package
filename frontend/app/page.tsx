import { Box, Button, Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ mt: 4 }}>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        href="/custom-packet"
        sx={{ textDecoration: "none" }}
      >
        Go to Custom Packet
      </Button>
    </Box>
  );
}
