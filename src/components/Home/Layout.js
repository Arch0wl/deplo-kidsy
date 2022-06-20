import * as React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material/";

const Layout = () => {
  return (
    <div class="responsive">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Get Ready To Take Pictures of Kid Art Projects
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find a spot in your house that has lots of natural light from
                  windows or doors. You don't want a patch of direct sunlight -
                  you want the soft, diffused light that brightens up the whole
                  room. You're going to want to shoot on a solid white surface
                  for this, as close to that window light as possible.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Choose Your Camera Settings
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The goal here is to take a great photo of each piece of
                  artwork, with no editing necessary. So get your camera set up
                  perfectly! Get your white balance right - shoot on auto or
                  daylight white balance.You may want to consider wearing a
                  white or light grey shirt. Turn off your flash. Shoot at an
                  aperture that leaves everything in focus.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Get In A Shooting Rhythm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Now it's time to start shooting! Ideally, you already have all
                  your children's artwork gathered in a big pile so you can run
                  through them very quickly.crawl out a quick sign on a scrap
                  piece of paper, and then shoot all of that child's artwork
                  from that year one at a time. This makes it easier to sort and
                  locate specific pictures on the computer. Rember to point your
                  camera straight down - no funny angles here.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
