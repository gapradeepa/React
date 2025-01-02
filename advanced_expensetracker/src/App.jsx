import { useState } from "react";

import styles from "./styles";

import Details from "./components/Details/Details";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          sx={styles.grid}
        >
          <Grid size={{ xs: 12, sm: 4 }}>
            <Details variant="income" title="Income" />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <Main />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Details variant="expense" title="Expense" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
