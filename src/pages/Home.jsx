import React from 'react';
import { Grid, Typography  } from "@material-ui/core"
import { useStyles } from '../styles/divStyles.jsx'

function Home() {

  const classes = useStyles();
  
  return (
    <div className={classes.consDiv}>
        <Grid container direction="column">
          <Grid container>

            <Grid item xs={0} md={1} lg={2}/>

              <Grid item xs={12} md={10} lg={8}>

                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit sapien et aliquam malesuada. Praesent iaculis neque vitae purus varius, quis efficitur ex mattis. Quisque a elit consequat, consectetur turpis quis, scelerisque felis. Integer id ante ac quam sodales malesuada. Sed tincidunt leo non pretium vestibulum. Mauris massa erat, lobortis nec ante eu, rutrum sodales ex. Praesent viverra sit amet neque quis accumsan. Duis dignissim eros id sapien dictum dignissim. Ut et augue massa. Suspendisse placerat lorem eget consectetur blandit. Morbi sit amet enim tempor, accumsan ante sed, hendrerit sem.
                </Typography>

                <Typography>
                  Morbi varius faucibus tellus id bibendum. Quisque ac porttitor mi, eu eleifend diam. Donec condimentum mauris ac ipsum volutpat, et egestas lacus tincidunt. Duis tincidunt est massa, at ultricies tortor imperdiet eu. Proin at tortor dapibus nulla vehicula pharetra vel eu quam. Etiam mi eros, molestie gravida leo nec, commodo ultricies erat. Pellentesque iaculis tincidunt maximus. Fusce sed dolor quis libero aliquet laoreet non in risus. Curabitur eu ante et justo finibus pretium id rhoncus lectus. Duis urna ante, vulputate ut sagittis non, finibus sit amet tortor.
                </Typography>

              </Grid>

            <Grid item xs={0} md={1} lg={2}/>

          </Grid>
        </Grid>
    </div>
  );
}

export default Home;
