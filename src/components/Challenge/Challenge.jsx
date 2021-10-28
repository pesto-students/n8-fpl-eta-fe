import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// redux store
import { useDispatch, useSelector } from "react-redux";
import { setChallengeToStore } from "store-features/challenge";

// styling
import { useStyles } from "./styles";

// mui
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";

// custom Components
import ChallengeStatus from "components/ChallengeStatus/ChallengeStatus";
import Portfolio from "components/Portfolio/Portfolio";
import LeaderBoardView from "components/LeaderBoardView/LeaderBoardView";

export default function Challenge() {
  let { challengeId } = useParams();

  const [challenge, setChallenge] = useState();
  const [portfolio, setPortfolio] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const view = useSelector((state) => state.challenge.lbView);
  const porfolios = useSelector((state) => state.user.portfolios);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_SERVER}/api/challenge/${challengeId}`,
      {}
    )
      .then((res) => res.json())
      .then((response) => {
        let view = "";
        switch (response.status) {
          case "NOT_LIVE":
            view = "notStarted";
            break;
          case "LIVE":
            view = "leaderboard";
            break;
          case "CLOSED":
            view = "claimRewards";
            break;
          default:
        }
        const c = { ...response, lbView: view };
        dispatch(setChallengeToStore(c));
        setChallenge(c);
        setIsLoading(false);

        const p = porfolios.filter(p => p.challengeId === challengeId);
        console.log(`found portfolio for challenge ${challengeId} - ${JSON.stringify(p)}`)
        if (p.length !== 0) { setPortfolio(p[0]); }
      })
      .catch((error) => console.log(error));

  }, [challengeId, dispatch, porfolios]);

  const classes = useStyles();
  return (
    <>
      <Container>
        {!isLoading && (
          <>
            <Typography variant="h4" className={classes.challengeTitle}>
              {challenge.name}
              <div className={classes.updateDetails}>
                <span className={classes.updateDetailsText}>
                  Last Updated at
                </span>
                <Button
                  className={classes.refreshButton}
                  aria-label="refresh"
                  size="large"
                  variant="contained"
                >
                  <UpdateIcon fontSize="medium" />
                </Button>
              </div>
            </Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12} md={10} lg={9}>
                <Portfolio portfolio={portfolio} challengeStatus={challenge.status} />
              </Grid>
              <Grid item xs={12} md={2} lg={3}>
                <ChallengeStatus
                  status={challenge.status}
                  startDate={challenge.startDate}
                  endDate={challenge.endDate}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <LeaderBoardView view={view} />
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}
