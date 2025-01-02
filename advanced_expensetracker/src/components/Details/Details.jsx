import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import CustomCard from "./styles";

const Details = ({ variant, title }) => {
  return (
    <CustomCard variant={variant}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughnut data="DATA" /> */}
      </CardContent>
    </CustomCard>
  );
};
export default Details;
