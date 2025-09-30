import { Box, Button, IconButton, Typography } from "@mui/material";
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import ArrowRightIcon from "@mui/icons-material/ArrowRightAlt";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;
import { getMessages } from "@/i8n";
export const RightSideButtons = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant="outlined" endIcon={<ArrowRightIcon />} color="secondary" size="medium" sx={{ fontWeight: "600" }}>
        {getMessages("005")}
      </Button>
      <IconButton color="secondary" aria-label="add to shopping cart">
        <ShoppingBasketIcon />
        <CartBadge badgeContent={2} color="secondary" overlap="circular" />
      </IconButton>

      <IconButton color="secondary" aria-label="add to shopping cart">
        <PersonIcon />
      </IconButton>
    </Box>
  );
};
