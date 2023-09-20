import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "reactstrap";

const styles = {
  container: {
    padding: "20px",
  },
  card: {
    maxWidth: 500,
    margin: "auto",
    backgroundColor: "#fefefe",
  },
  title: {
    marginTop: 6,
    marginBottom: 2,
  },
  subtitle: {
    margin: "auto",
  },
  formLabel: {
    marginTop: 2,
  },
  textField: {
    width: "100%",
  },
};

export default function Component() {
  return (
    <div className="container">
      <Typography
        variant="h1"
        sx={{ marginRight: "auto", marginTop: 6, marginBottom: 2 }}
      >
        Contact me
      </Typography>
      <div style={styles.container}>
        <Card style={styles.card}>
          <CardContent>
            <Typography variant="h5" style={styles.subtitle}>
              Fill out the form below, and I'll get back to you as soon as
              possible.
            </Typography>

            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="first-name"
                    label="First Name"
                    variant="outlined"
                    style={styles.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    style={styles.textField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    style={styles.textField}
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    style={styles.textField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button outline size="lg" color="secondary" type="submit">
                    Send message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
