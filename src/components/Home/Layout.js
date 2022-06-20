import * as React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material/";

// const getready = new URL()

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
                image="https://images.squarespace-cdn.com/content/v1/5373b147e4b0e5824b359a50/1442918169496-1JBE5FSGHZQ2M5FR2MBK/How+to+Photography+Kid%27s+Artwork?format=1500w"
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
                image="https://artfulparent.com/wp-content/uploads/2016/01/kids-art-poster-featured-image.png"
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
                image="https://imgc.allpostersimages.com/img/posters/spring_u-L-F93DJP0.jpg"
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
                image="https://ctl.s6img.com/society6/img/FePYhp_gU7VJh8cl71ixC10Zw50/w_700/posters/top/~artwork,fw_2718,fh_3618,fy_-3,iw_2718,ih_3623/s6-original-art-uploads/society6/uploads/misc/e1e5ab84982144f7b2e5705a78dcb797/~~/poa-positive-art-print-inspirational-80s-memphis-retro-typography-happy-kids-posters.jpg?wait=0&attempt=0"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Text
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some text
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
