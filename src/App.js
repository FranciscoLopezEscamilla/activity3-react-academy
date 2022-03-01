import "./App.css";
import { Box, Grid, Modal } from "@mui/material";

function App() {
  return (
    <Box
      sx={{ flex: 1, minWidth: 600, width: "60%", marginTop: 20, margin: 10 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>Hola</div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
