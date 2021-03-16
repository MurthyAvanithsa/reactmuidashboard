import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Avatar, CardMedia, Grid, Typography } from "@material-ui/core";
import PinDropOutlined from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    padding: "24px",
  },
  title: {
    fontSize: 14,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  pink: {
    color: "#F4B566",
    backgroundColor: "#F9DBB2",
    width: "24px",
    height: "24px",
  },
  pubDate: {
    fontSize: 8,
    fontStyle: "Italic",
  },
}));

export default function AppCard2() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Computer Organization and Design
          </Typography>
          <Grid
            Container
            style={{ display: "flex", paddingTop: "32px" }}
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid item>
              <Grid Container>
                <Grid item>
                  <Grid
                    Container
                    style={{ display: "flex" }}
                    alignItems="center"
                  >
                    <Grid item>
                      <Avatar className={classes.pink}>
                        <PinDropOutlined />
                      </Avatar>
                    </Grid>
                    <Grid item style={{ paddingLeft: "8px" }}>
                      <Typography>Author</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid Container>
                    <Grid item>
                      <Typography
                        variant="caption"
                        className={classes.pubDate}
                        color="textSecondary"
                        gutterBottom
                      >
                        Published Date
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        gutterBottom
                      >
                        N/A
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
