import * as React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material/";

const Layout = () => {
  return (
    <div class="responsive">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 360 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.squarespace-cdn.com/content/v1/5373b147e4b0e5824b359a50/1442918169496-1JBE5FSGHZQ2M5FR2MBK/How+to+Photography+Kid%27s+Artwork?format=1500w"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Get Ready To Take Pictures of Kid Art Projects.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your kid's art project deserves a good natural light - find a
                  spot in your house near windows or doors. Don't look for a
                  patch of direct sunlight - some soft, diffused light will do
                  the work better. Don't forget to turn off your flash.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 360 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://artfulparent.com/wp-content/uploads/2016/01/kids-art-poster-featured-image.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Choose Your Camera Settings.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Try to take a great photo of each piece of artwork, with no
                  editing necessary. So get your camera set up perfectly!
                  Daylight white balance and proper aperture should be pretty
                  helpful.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 360 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://imgc.allpostersimages.com/img/posters/spring_u-L-F93DJP0.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Get In A Shooting Rhythm.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  N Now it's time to start shooting! Prepare a pile of all
                  pictures so you can quickly go through all of them. This makes
                  it easier to sort them by a specific period. Remember to point
                  your camera straight down - no funny angles here.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 360 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://ctl.s6img.com/society6/img/FePYhp_gU7VJh8cl71ixC10Zw50/w_700/posters/top/~artwork,fw_2718,fh_3618,fy_-3,iw_2718,ih_3623/s6-original-art-uploads/society6/uploads/misc/e1e5ab84982144f7b2e5705a78dcb797/~~/poa-positive-art-print-inspirational-80s-memphis-retro-typography-happy-kids-posters.jpg?wait=0&attempt=0"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cloud Storage - here we come!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  When you are done with the artwork photoshoot - Kidsy will
                  take care of the rest. Open up the webpage, register as a new
                  user and start uploading. Done!
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
