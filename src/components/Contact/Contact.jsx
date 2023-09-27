import React, { useRef } from "react";
import "./Contact.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "reactstrap";
import emailjs from "@emailjs/browser";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100,
    xs: 12,
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    backgroundColor: "#fefefe",
    marginBottom: 100,
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
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_isyf2b9",
        "template_84llydk",
        formRef.current,
        "vUQTrNwa1tjI-hvrI"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    alert("Message sent!");
  };

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

            <form ref={formRef} onSubmit={sendEmail}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="text"
                    id="first-name"
                    label="First Name"
                    variant="outlined"
                    name="first-name"
                    autoComplete="true"
                    style={styles.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="text"
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    name="last-name"
                    autoComplete="true"
                    style={styles.textField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    autoComplete="true"
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
                    name="message"
                    autoComplete="false"
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
