import React from "react";

// mui
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";



// Custom Components
import ChallengeStatus from "../ChallengeStatus/ChallengeStatus";
import Portfolio from "../Portfolio/Portfolio";


import { useStyles } from "./styles";
import LeaderBoard from "../LeaderBoard/LeaderBoard";

export default function Challenge() {

  const classes = useStyles();
  return (
    <>
      <Container>
        <Typography
          variant="h4"
          className={classes.challengeTitle}>
          Challenge Name
        </Typography>
        <Grid
          container
          direction="row"
          spacing={2}>
          <Grid item xs={12} md={10} lg={9}>
            <Portfolio />
          </Grid>
          <Grid item xs={12} md={2} lg={3}>
            <ChallengeStatus />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}