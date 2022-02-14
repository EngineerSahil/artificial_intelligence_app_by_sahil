import React, { useState, useEffect } from "react";
import ReactApp from './image/ReactApp.jpg'
// import ReactApps from './image/ReactApps.jpg'


import alanBtn from "@alan-ai/alan-sdk-web";
// import { useEffect } from 'react';
import wordsToNumbers from "words-to-numbers";

import NewsCards from './component/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey ="9911790fe422f8e37db04d7399b02f102e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [ activeArticle, setActiveArticle] = useState(-1); 
    const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles,number }) => {
        if (command === 'newHeadlines') {
            setNewsArticles(articles);
            setActiveArticle(-1);
        }else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1 );
        }else if(command === 'open'){
          const parsedNumber = number.length > 2 ? wordsToNumbers(number,{fuzzy : true }) : number;
           const article = articles[parsedNumber - 1];

           if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }

            
        }
      }
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
      {/* <img src={robo} className={classes.alanLogo} alt="alan logo"/> */}
          <img src={ReactApp} className={classes.alanLogo} alt="alan logo"/>
         
      </div>
      <NewsCards articles={newsArticles } activeArticle={activeArticle}/>
    </div>
  );
};

export default App;
