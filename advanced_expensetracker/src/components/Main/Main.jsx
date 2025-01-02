import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Grid2";
import Form from "./Form/Form";
import List from "./List/List";
const Main = () => {
  return (
    <Card>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* InfoCard.... */}
          Try saying: Add income for $100 in Category Salary for Monday...
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <List></List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Main;
