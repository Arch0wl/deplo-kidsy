import Button from "@mui/material/Button";
import { AppBar, IconButton, Typography } from "@mui/material";
import { Toolbar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(3),
  },
}));

function Menubar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Kidsy
          </Typography>
          <Box mr={5}>
            <Button color="inherit" variant="outlined">
              Log In
            </Button>
          </Box>
          <Button color="secondary" variant="contained">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* <div>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <div className={classes.overlay}></div>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component="h1" color="inherit" variant="h3">
                    Kids App
                  </Typography>
                  <Typography component="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem facere similique deserunt odio non tempora at
                    laudantium in, repudiandae, ad perspiciatis dolores
                    obcaecati doloribus, veniam doloremque debitis. Quibusdam,
                    nihil quidem!
                  </Typography>
                  <Button variant="contained" color="secondary">
                    GET STARTED
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </div> */}
    </>
  );
}

export default Menubar;
