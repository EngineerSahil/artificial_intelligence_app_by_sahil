import React from 'react'
import {Typography, Grow, Grid } from "@material-ui/core";
import useStyle from './styles.js' ;
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: ' Entertainment,bangladesh,cricket, Health, Science,artificial intelligence, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, Smartphones,Footbal, World Cup T20, Donald Trump...', text: 'What\'s up with cryptocurrency' },
  { color: '#F08700', title: 'News by Sources', info: 'CNN, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];
// const infoCards = [
//   { color: '#00A6A6', title: 'Latest News', text: 'Bangladesh or Chittagong' },
//   { color: '#32AAE1', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
//   { color: '#F08700', title: 'News by Terms', info: 'Cricket, Chittagong, Smartphones, Football...', text: 'What\'s up with Bangladesh' },
//   { color: '#29285B', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
// ];

const NewsCards = ({ articles , activeArticle }) => {

  const classes  = useStyle();

  if(!articles.length){
    return(
          <Grow in>

          <Grid className={classes.container} container alignItems='stretch' spacing={3}>
              {infoCards.map((infoCard)=> (
                  <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                      <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                            <Typography variant="h5"> {infoCard.title}</Typography>
                            {
                            infoCard.info 
                                    ?( <Typography variant="h6">
                                        <strong>
                                            {infoCard.title.split(' ')[2]}:
                                        </strong>
                                        <br/>
                                          {infoCard.info}
                                        </Typography>) : null} 

                                <Typography variant="h6"> Try saying:  <br/> <i>{infoCard.text}</i></Typography>
                      </div>
                  </Grid>
              ))}
          </Grid>
        </Grow>
  
    );
  }
  
  return (

    <Grow in>

      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {articles.map((article , i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex'}}>
                    <NewsCard  article= {article} activeArticle={activeArticle} i={i}/>
                    {/* <NewsCard  /> */}
                  </Grid>
            ))}
      </Grid>
    </Grow>
  
  );
  
}

export default NewsCards
