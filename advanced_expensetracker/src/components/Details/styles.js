import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomCard = styled(Card)(({ theme, variant }) => ({
  borderBottom:
    variant === "income"
      ? "10px solid rgba(0, 255, 0, 0.5)"
      : "10px solid rgba(255, 0, 0, 0.5)",
}));

export default CustomCard;
