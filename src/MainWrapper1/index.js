import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Link, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
  },
  title: {
    fontSize: 14,
  },
  textRight: {
    textAlign: "right",
  },
  button: {
    textTransform: "capitalize",
  },
  typography: {
    caption: {
      fontSize: 10,
    },
  },
});

export default function MainWrapper1() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardContent style={{ padding: "8px" }}>
            <Typography variant="h5" component="h2">
              Courses
            </Typography>
            <Paper
              style={{
                marginTop: "32px",
                padding: "16px",
                backgroundColor: "#F3F1FE",
                borderRadius: "16px",
              }}
            >
              <Grid
                container
                spacing={1}
                justify="space-between"
                alignItems="flex-end"
              >
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h4">19</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" style={{ fontSize: 12 }}>
                        Total Courses
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid
                      item
                      alignContent="flex-end"
                      className={classes.textRight}
                    >
                      <Link href="#" onClick={preventDefault} color="primary">
                        View
                      </Link>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<AddIcon />}
                      >
                        Create
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardContent style={{ padding: "8px" }}>
            <Typography variant="h5" component="h2">
              Assessments
            </Typography>
            <Paper
              style={{
                marginTop: "32px",
                padding: "16px",
                backgroundColor: "#F3F1FE",
                borderRadius: "16px",
              }}
            >
              <Grid
                container
                spacing={1}
                justify="space-between"
                alignItems="flex-end"
              >
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h4">12</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" style={{ fontSize: 12 }}>
                        Total Assessments
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid
                      item
                      alignContent="flex-end"
                      className={classes.textRight}
                    >
                      <Link href="#" onClick={preventDefault} color="primary">
                        View
                      </Link>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<AddIcon />}
                      >
                        Create
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardContent style={{ padding: "8px" }}>
            <Typography variant="h5" component="h2">
              Question Bank
            </Typography>
            <Paper
              style={{
                marginTop: "32px",
                padding: "16px",
                backgroundColor: "#F3F1FE",
                borderRadius: "16px",
              }}
            >
              <Grid
                container
                spacing={1}
                justify="space-between"
                alignItems="flex-end"
              >
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h4">240</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" style={{ fontSize: 12 }}>
                        Total Questions
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid
                      item
                      alignContent="flex-end"
                      className={classes.textRight}
                    >
                      <Link href="#" onClick={preventDefault} color="primary">
                        View
                      </Link>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<AddIcon />}
                      >
                        Create
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className={classes.root}>
          <CardContent style={{ padding: "8px" }}>
            <Typography variant="h5" component="h2">
              Question Groups
            </Typography>
            <Paper
              style={{
                marginTop: "32px",
                padding: "16px",
                backgroundColor: "#F3F1FE",
                borderRadius: "16px",
              }}
            >
              <Grid
                container
                spacing={1}
                justify="space-between"
                alignItems="flex-end"
              >
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h4">20</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" style={{ fontSize: 12 }}>
                        Total Groups
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid
                      item
                      alignContent="flex-end"
                      className={classes.textRight}
                    >
                      <Link href="#" onClick={preventDefault} color="primary">
                        View
                      </Link>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<AddIcon />}
                      >
                        Create
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
