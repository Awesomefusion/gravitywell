import React from 'react';
import { Grid, Typography, Box, Card, CardActionArea, CardContent, CardMedia, Button  } from "@material-ui/core"
import { useStyles } from '../styles/divStyles.jsx'
import station from '../img/station.jpg'
import room from '../img/room.jpg'

function Home() {

  const classes = useStyles();
  
  return (
    <div>

      <div className={classes.consDiv}>
        <Grid container direction="column">
          <Grid container>

            <Grid item xs={0} md={1} lg={2}/>

              <Grid item xs={12} md={10} lg={8}>

                <Typography variant="h3" className={classes.textDefault}>
                  A new way to live in Space
                </Typography>

                <Typography className={classes.textDefault}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit sapien et aliquam malesuada. Praesent iaculis neque vitae purus varius, quis efficitur ex mattis. Quisque a elit consequat, consectetur turpis quis, scelerisque felis. Integer id ante ac quam sodales malesuada. Sed tincidunt leo non pretium vestibulum. Mauris massa erat, lobortis nec ante eu, rutrum sodales ex. Praesent viverra sit amet neque quis accumsan. Duis dignissim eros id sapien dictum dignissim. Ut et augue massa. Suspendisse placerat lorem eget consectetur blandit. Morbi sit amet enim tempor, accumsan ante sed, hendrerit sem.
                </Typography>

                <Typography className={classes.textDefault}>
                  Morbi varius faucibus tellus id bibendum. Quisque ac porttitor mi, eu eleifend diam. Donec condimentum mauris ac ipsum volutpat, et egestas lacus tincidunt. Duis tincidunt est massa, at ultricies tortor imperdiet eu. Proin at tortor dapibus nulla vehicula pharetra vel eu quam. Etiam mi eros, molestie gravida leo nec, commodo ultricies erat. Pellentesque iaculis tincidunt maximus. Fusce sed dolor quis libero aliquet laoreet non in risus. Curabitur eu ante et justo finibus pretium id rhoncus lectus. Duis urna ante, vulputate ut sagittis non, finibus sit amet tortor.
                </Typography>

                <Box align="center" className={classes.textDefault}>
                  <Button variant="contained" color="primary" size="large" style={{margin: '1rem'}}>
                    Buy today!
                  </Button>
                  <Button variant="contained" color="secondary" size="large">
                    Pre-order Mk II
                  </Button>
                </Box>

              </Grid>

            <Grid item xs={0} md={1} lg={2}/>

          </Grid>
        </Grid>
      </div>


      <div className={classes.colourDiv}>
        <Grid container direction="column">
          <Grid container>

            <Grid item xs={0} md={1} lg={2}/>

              <Grid item xs={12} md={10} lg={8}>

                <Typography className={classes.textDefault}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit sapien et aliquam malesuada. Praesent iaculis neque vitae purus varius, quis efficitur ex mattis. Quisque a elit consequat, consectetur turpis quis, scelerisque felis. Integer id ante ac quam sodales malesuada. Sed tincidunt leo non pretium vestibulum. Mauris massa erat, lobortis nec ante eu, rutrum sodales ex. Praesent viverra sit amet neque quis accumsan. Duis dignissim eros id sapien dictum dignissim. Ut et augue massa. Suspendisse placerat lorem eget consectetur blandit. Morbi sit amet enim tempor, accumsan ante sed, hendrerit sem.
                </Typography>

                <Grid container>

                  <Grid item xs={12} lg={6}>
                    <Card classes={{ root: classes.cardDefault }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={station}
                        />
                        <CardContent style={{color: 'white', backgroundColor: '#16161a', textAlign: 'center'}}>
                          A space station with Gravity Well installed
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Card  classes={{ root: classes.cardDefault }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image={room}
                        />
                        <CardContent style={{color: 'white', backgroundColor: '#16161a', textAlign: 'center'}}>
                          Indoor habitat making use of artifical gravity
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>

                <Typography className={classes.textDefault}>
                    Maecenas blandit nisl ac diam maximus feugiat. Vestibulum sed imperdiet quam. Pellentesque dictum, metus ut porttitor auctor, leo est varius metus, ac sagittis eros dolor ut diam. Aliquam scelerisque urna ac maximus feugiat. Cras in nibh risus. Praesent a nisi nec massa accumsan imperdiet et sit amet velit. Etiam ultricies sapien sed aliquet elementum. Suspendisse elementum tellus lectus, ut dignissim risus auctor nec. Curabitur dictum orci vitae efficitur fermentum. Nunc in condimentum libero, quis porta diam. Nunc eget nisi ac nibh eleifend condimentum. Suspendisse in eleifend ante. Aliquam sollicitudin placerat felis at ornare. Etiam egestas rhoncus faucibus.
                  </Typography>

                <Typography className={classes.textDefault}>
                  Aenean vel urna eu diam faucibus fermentum ut at dui. Ut dictum aliquam leo ut hendrerit. Vestibulum eget arcu tellus. Maecenas posuere nisi id quam luctus iaculis. Pellentesque dictum erat sed nunc condimentum tempor at ut urna. Aliquam ex tellus, varius quis accumsan non, vulputate a nibh. Pellentesque a luctus dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut porta lorem at nisi eleifend, eu pretium mauris fringilla. Maecenas odio nulla, aliquet non odio vel, vehicula hendrerit nulla. Suspendisse in metus justo. Morbi euismod ornare tincidunt. Pellentesque efficitur sapien id orci elementum hendrerit. Nunc nisi felis, porttitor eget enim nec, malesuada aliquet lacus. Mauris dignissim tellus ac justo sollicitudin rhoncus.
                </Typography>



              </Grid>

            <Grid item xs={0} md={1} lg={2}/>

          </Grid>
        </Grid>
      </div>

      <div className={classes.colourDivTwo}>
        <Grid container direction="column">
          <Grid container>

            <Grid item xs={0} md={1} lg={2}/>

              <Grid item xs={12} md={10} lg={8}>

                <Typography variant="h3" className={classes.textDefault} align="center" style={{color: 'white'}}>
                  Sign up to our Newsletter!
                </Typography>

                

              </Grid>

            <Grid item xs={0} md={1} lg={2}/>

          </Grid>
        </Grid>
      </div>




    </div>
  );
}

export default Home;
