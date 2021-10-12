import React from 'react'

import { Card, Typography, Grid } from '@mui/material'

import { useStyles } from '../LeaderBoard/styles'

import LeaderBoardRow from './LeaderboardRow';

export default function LeaderBoard(props) {

    const classes = useStyles();

    return (
        <>
            <Card
                variant="outlined"
                className={classes.root}
            >
                <Typography
                    variant="h5"
                    className={classes.title}>
                    Leader Board
                </Typography>
                <Grid
                    container
                    direction="column"
                >
                    <Grid item xs={12} md={12} lg={12}>
                        <LeaderBoardRow
                            name="Participant"
                            portfolio_return="Portfolio Return"
                            _1_day_change="1 Day Change"
                            _1_day_position_change="1 Day Position Change"
                            isTitle={true} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <LeaderBoardRow
                            name="Tushar L"
                            portfolio_return="24.54%"
                            _1_day_change="+20.12%"
                            _1_day_position_change="+5"
                            isTitle={false}
                            position="1" />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <LeaderBoardRow
                            name="Tushar L"
                            portfolio_return="24.54%"
                            _1_day_change="+20.12%"
                            _1_day_position_change="+5"
                            isTitle={false}
                            position="1" />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <LeaderBoardRow
                            name="Tushar L"
                            portfolio_return="24.54%"
                            _1_day_change="+20.12%"
                            _1_day_position_change="+5"
                            isTitle={false}
                            position="1" />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <LeaderBoardRow
                            name="Tushar L"
                            portfolio_return="24.54%"
                            _1_day_change="+20.12%"
                            _1_day_position_change="+5"
                            isTitle={false}
                            position="1" />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <LeaderBoardRow
                            name="Tushar L"
                            portfolio_return="24.54%"
                            _1_day_change="+20.12%"
                            _1_day_position_change="+5"
                            isTitle={false}
                            position="1" />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <LeaderBoardRow
                            name="Tushar L"
                            portfolio_return="24.54%"
                            _1_day_change="+20.12%"
                            _1_day_position_change="+5"
                            isTitle={false}
                            position="1" />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <LeaderBoardRow
                            name="Tushar L"
                            portfolio_return="24.54%"
                            _1_day_change="+20.12%"
                            _1_day_position_change="+5"
                            isTitle={false}
                            position="1" />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <LeaderBoardRow
                            name="Tushar L"
                            portfolio_return="24.54%"
                            _1_day_change="+20.12%"
                            _1_day_position_change="+5"
                            isTitle={false}
                            position="1" />
                    </Grid>

                </Grid>
            </Card>
        </>
    )
}