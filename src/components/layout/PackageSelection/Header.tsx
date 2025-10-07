import { getMessages } from "@/i8n";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ marginBottom: "24px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          {getMessages("071")}
        </Typography>
        <Typography variant="body2" >{getMessages("055")}</Typography>
      </Box>
      <Typography variant="body2" sx={{ color: '#000000b2' }}>{getMessages("056")}</Typography>
    </Box>
  );
}
