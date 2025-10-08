import { Box, Button, Input, Link, Typography } from "@mui/material";
import { getMessages } from "@/i8n";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function SubmitEmail() {
  return (
    <Box className={styles.submitEmail}>
      <Link href="/" style={{ marginBottom: "16px" }}>
        <Image src="/logoWhite.svg" alt="Beije" width={56} height={24} />
      </Link>
      <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
        {getMessages("034")}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {getMessages("035")}
      </Typography>
      <Box className={styles.submitEmailWrapper} >
        <Input placeholder={getMessages("037")}  className={styles.submitEmailInput}/>
        <Button variant="contained" color="primary">
          {getMessages("038")}
        </Button>
      </Box>
      <Typography variant="caption" color="text.secondary">
        {getMessages("036")}
      </Typography>
    </Box>
  );
}
