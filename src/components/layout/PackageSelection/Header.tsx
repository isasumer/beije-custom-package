import { getMessages } from "@/i8n";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          {getMessages("071")}
        </Typography>
        <Typography variant="caption">{getMessages("055")}</Typography>
      </Box>
      <Typography variant="body2">{getMessages("056")}</Typography>
    </Box>
  );
}
