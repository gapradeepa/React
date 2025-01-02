import {
  Button,
  InputLabel,
  Select,
  Typography,
  FormControl,
  MenuItem,
  TextField,
  Paper,
} from "@mui/material";

import Grid from "@mui/material/Grid2";

import styles from "./Styles";
import List from "../List/List";

const Form = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12 }}>
          <Typography variant="subtitle2" align="center" gutterBottom>
            ....
          </Typography>
        </Grid>
        <Grid size={{ xs: 6, sm: 6 }}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6, sm: 6 }}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Salary">Salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 6, sm: 6 }}>
          <TextField type="number" label="Amount" fullWidth />
        </Grid>
        <Grid size={{ xs: 6, sm: 6 }}>
          <TextField type="date" label="Date" fullWidth />
        </Grid>
        <Button variant="outlined" color="primary" fullWidth sx={styles.button}>
          Create
        </Button>
      </Grid>
    </div>
  );
};
export default Form;
