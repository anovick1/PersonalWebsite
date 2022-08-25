import './Styling/App.css'
import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ProjectDetails from './pages/ProjectDetails'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import Avery from './components/Avery'

function App() {
  // {
  //   title: '',
  //   date: "",
  //   tech: [''],
  //   short_description: '',
  //   long_description:
  //     '',
  //   img: [''],
  //   github: '',
  //   deployed_link: ''
  // }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let allProjects = []
  let topProjects = []
  const [displayedProject, setDisplayedProject] = useState(null)
  let skills = [
    {
      type: 'JavaScript',
      img: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-15.jpg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      type: 'Python',
      img: 'https://cdn-icons-png.flaticon.com/512/2/2181.png',
      link: 'https://www.python.org/'
    },
    {
      type: 'Java',
      img: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
      link: 'https://www.java.com/en/'
    },
    {
      type: 'React',
      img: 'https://cdn.iconscout.com/icon/free/png-256/react-3521666-2945110.png',
      link: 'https://reactjs.org/'
    },
    {
      type: 'Django',
      img: 'https://cdn.iconscout.com/icon/free/png-256/django-1-282754.png',
      link: 'https://www.djangoproject.com/'
    },
    {
      type: 'SQL',
      img: 'https://cdn-icons-png.flaticon.com/512/2772/2772165.png',
      link: 'https://docs.microsoft.com/en-us/sql/?view=sql-server-ver16'
    },
    {
      type: 'MySQL',
      img: 'https://cdn.iconscout.com/icon/free/png-256/mysql-19-1174939.png',
      link: 'https://www.mysql.com/'
    },
    {
      type: 'PostgreSQL',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
      link: 'https://www.postgresql.org/'
    },
    {
      type: 'MongoDB',
      img: 'https://prismatic.io/docs/assets/images/icon-f6b5484f918980c742825c9aefc9c238.png',
      link: 'https://www.mongodb.com/'
    },
    {
      type: 'Vue.js',
      img: 'https://cdn.iconscout.com/icon/free/png-256/vuejs-1175052.png',
      link: 'https://vuejs.org/'
    },

    {
      type: 'HTML',
      img: 'https://cdn-icons-png.flaticon.com/512/732/732073.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      type: 'CSS',
      img: 'https://cdn-icons-png.flaticon.com/512/5968/5968477.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },

    {
      type: 'Sequelize',
      img: 'https://sequelize.org/img/logo.svg',
      link: 'https://sequelize.org/'
    },
    {
      type: 'Mongoose',
      img: 'https://avatars.githubusercontent.com/u/7552965?s=280&v=4',
      link: 'https://mongoosejs.com/docs/'
    },
    {
      type: 'Express.js',
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
      link: 'https://expressjs.com/'
    },
    {
      type: 'Node.js',
      img: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
      link: 'https://nodejs.org/en/'
    },
    {
      type: 'NumPy',
      img: 'https://codebykelvin.com/learning/python/data-science/numpy-series/cover-numpy.png',
      link: 'https://numpy.org/'
    },
    {
      type: 'Pandas.py',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/2560px-Pandas_logo.svg.png',
      link: 'https://pandas.pydata.org/'
    },
    {
      type: 'Leaflet.js',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/1280px-Leaflet_logo.svg.png',
      link: 'https://leafletjs.com/'
    },

    {
      type: 'P5.js',
      img: 'http://blindedcyclops.neocities.org/p5js-icons/p5-sq-reverse-filled.png',
      link: 'https://p5js.org/'
    },
    {
      type: 'Turf.js',
      img: 'https://pro.guslyon.fr/static/turf-8096e7fa2251c8a157b87597d9634800.png',
      link: 'https://turfjs.org/'
    }
  ]
  let stock = {
    name: 'Stock_Price_Prediction',
    title: 'Stock Price Prediction',
    date: 'May 2021',
    tech: [
      {
        type: 'Python',
        img: 'https://cdn-icons-png.flaticon.com/512/2/2181.png',
        link: 'https://www.python.org/'
      },
      {
        type: 'NumPy',
        img: 'https://codebykelvin.com/learning/python/data-science/numpy-series/cover-numpy.png',
        link: 'https://numpy.org/'
      },
      {
        type: 'Pandas.py',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/2560px-Pandas_logo.svg.png',
        link: 'https://pandas.pydata.org/'
      },
      {
        type: 'Alpha Vantage API',
        img: 'https://miro.medium.com/max/1400/1*hniu4saxhfVhhKdE4aMnMg.png',
        link: 'https://www.alphavantage.co/'
      }
    ],
    short_description:
      'A python script that takes live stock data to predict future stock prices using the WACC financial model',
    long_description:
      'For my Computer Science Capstone Project at American University, I teamed up with another CS student and two finance students  to make a stock price prediction calculator. We automated financial models (WACC model, 5 year financial data forecast, and DCF model) that are able to predict the future prices of stocks. These models usually take analysts 3-4 hours in Excel to create but our calculator can yield a result in about 3 minutes.',
    img: [
      'https://sevensreport.com/wp-content/uploads/2016/07/stock-market-3.jpg'
    ],
    github: 'https://github.com/anovick1/Stock_AI',
    deployed_link: null
  }
  allProjects.push(stock)
  let covid = {
    name: 'Covid_Map',
    title: 'Covid Map',
    date: 'May 2021',
    tech: [
      {
        type: 'HTML',
        img: 'https://cdn-icons-png.flaticon.com/512/732/732073.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      {
        type: 'CSS',
        img: 'https://cdn-icons-png.flaticon.com/512/5968/5968477.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      {
        type: 'JavaScript',
        img: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-15.jpg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        type: 'Leaflet.js',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/1280px-Leaflet_logo.svg.png',
        link: 'https://leafletjs.com/'
      },

      {
        name: 'P5.js',
        img: 'http://blindedcyclops.neocities.org/p5js-icons/p5-sq-reverse-filled.png',
        link: 'https://p5js.org/'
      },
      {
        type: 'Turf.js',
        img: 'https://pro.guslyon.fr/static/turf-8096e7fa2251c8a157b87597d9634800.png',
        link: 'https://turfjs.org/'
      },
      {
        type: 'Disease.sh',
        img: 'https://github.com/disease-sh/API/blob/master/public/assets/img/icon.jpg?raw=true',
        link: 'https://disease.sh/'
      }
    ],
    short_description: 'A map of the US showing Covid tests and Covid cases.',
    long_description:
      'This Covid map was created in May, 2021 as the final project in my Web Programming class at American University. It was a group project with 2 other students and the map allows user to get information on Covid testing and cases by state.',
    img: ['https://github.com/anovick1/Covid-Map/raw/main/screenshot.png'],
    github: 'https://github.com/anovick1/Covid-Map',
    deployed_link: null
  }
  allProjects.push(covid)
  topProjects.push(covid)

  let bj = {
    name: 'Blackjack',
    title: 'Blackjack',
    date: 'July 2022',
    tech: [
      {
        type: 'HTML',
        img: 'https://cdn-icons-png.flaticon.com/512/732/732073.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      {
        type: 'CSS',
        img: 'https://cdn-icons-png.flaticon.com/512/5968/5968477.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      {
        type: 'JavaScript',
        img: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-15.jpg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      }
    ],
    short_description: 'A simple blackjack app using JavaScript, HTML, CSS.',
    long_description:
      'Blackjack was my first project for the General Assembly Software Engineering Immersive program where I had 5 days to create a game using vanilla Javascript, HTML, and CSS.',
    img: [
      'https://github.com/anovick1/Blackjack_Novick/raw/main/images/winner.png'
    ],
    github: 'https://github.com/anovick1/Blackjack_Novick',
    deployed_link: 'https://averynovickblackjack.surge.sh/'
  }
  allProjects.push(bj)
  let theme = {
    name: 'Theme_Park_Review',
    title: 'Theme Park Review',
    date: 'July 2022',
    tech: [
      {
        type: 'HTML',
        img: 'https://cdn-icons-png.flaticon.com/512/732/732073.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      {
        type: 'CSS',
        img: 'https://cdn-icons-png.flaticon.com/512/5968/5968477.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      {
        type: 'JavaScript',
        img: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-15.jpg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        type: 'React',
        img: 'https://cdn.iconscout.com/icon/free/png-256/react-3521666-2945110.png',
        link: 'https://reactjs.org/'
      },
      {
        type: 'MongoDB',
        img: 'https://prismatic.io/docs/assets/images/icon-f6b5484f918980c742825c9aefc9c238.png',
        link: 'https://www.mongodb.com/'
      },

      {
        type: 'Mongoose',
        img: 'https://avatars.githubusercontent.com/u/7552965?s=280&v=4',
        link: 'https://mongoosejs.com/docs/'
      },
      {
        type: 'Express.js',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        link: 'https://expressjs.com/'
      },
      {
        type: 'Node.js',
        img: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
        link: 'https://nodejs.org/en/'
      }
    ],
    short_description:
      'A website where people can share their reviews of theme parks ',
    long_description:
      'Theme Park Review was a day-and-a-half Hackathon with General Assembly. My group of three was tasked with creating a theme park themed Full Stack Application using React, MongoDB, and Mongoose/Express. We created a Theme Park Review Website that includes Yelp reviews.',
    img: [
      'https://github.com/anovick1/Theme_Park/raw/main/Images/DeployedHomepage.png',
      'https://github.com/anovick1/Theme_Park/raw/main/Images/Deployedform.png'
    ],
    github: 'https://github.com/anovick1/Theme_Park',
    deployed_link: null
  }
  allProjects.push(theme)
  let nba = {
    name: 'NBA_Hot_Takes',
    title: 'NBA Hot Takes',
    date: 'July 2022',
    tech: [
      {
        type: 'HTML',
        img: 'https://cdn-icons-png.flaticon.com/512/732/732073.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      {
        type: 'CSS',
        img: 'https://cdn-icons-png.flaticon.com/512/5968/5968477.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      {
        type: 'JavaScript',
        img: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-15.jpg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        type: 'React',
        img: 'https://cdn.iconscout.com/icon/free/png-256/react-3521666-2945110.png',
        link: 'https://reactjs.org/'
      },
      {
        type: 'MongoDB',
        img: 'https://prismatic.io/docs/assets/images/icon-f6b5484f918980c742825c9aefc9c238.png',
        link: 'https://www.mongodb.com/'
      },

      {
        type: 'Mongoose',
        img: 'https://avatars.githubusercontent.com/u/7552965?s=280&v=4',
        link: 'https://mongoosejs.com/docs/'
      },
      {
        type: 'Express.js',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        link: 'https://expressjs.com/'
      },
      {
        type: 'Node.js',
        img: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
        link: 'https://nodejs.org/en/'
      },
      {
        type: 'Twitter API',
        img: 'https://i.pinimg.com/originals/17/6d/17/176d1765db76c4110de844c4b1373e7c.png',
        link: 'https://developer.twitter.com/en'
      }
    ],
    short_description: 'A social media dedicated to NBA hot takes',
    long_description:
      'My second project with General Assembly, I was tasked to construct a full stack MongoDB, Express.js, React, Node (MERN) application over the course of 5 days. As an avid NBA fan who enjoys the sports discussion on Twitter, I created a social media app for NBA fans focused on the NBA . I implemented the Twitter API that will get live tweets each time I reseed the database.',
    img: [
      'https://github.com/anovick1/NBA-HotTakes/raw/main/images/newsfeed.png',
      'https://github.com/anovick1/NBA-HotTakes/raw/main/images/profile.png'
    ],
    github: 'https://github.com/anovick1/NBA-HotTakes',
    deployed_link: 'https://novick-nba-app.herokuapp.com/'
  }
  allProjects.push(nba)
  topProjects.push(nba)

  let techtinder = {
    name: 'Tech_Tinder',
    title: 'Tech Tinder',
    date: 'August 2022',
    tech: [
      {
        type: 'HTML',
        img: 'https://cdn-icons-png.flaticon.com/512/732/732073.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      {
        type: 'CSS',
        img: 'https://cdn-icons-png.flaticon.com/512/5968/5968477.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      {
        type: 'JavaScript',
        img: 'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-15.jpg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        type: 'React',
        img: 'https://cdn.iconscout.com/icon/free/png-256/react-3521666-2945110.png',
        link: 'https://reactjs.org/'
      },
      {
        type: 'PostgreSQL',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
        link: 'https://www.postgresql.org/'
      },

      {
        type: 'Sequelize',
        img: 'https://sequelize.org/img/logo.svg',
        link: 'https://sequelize.org/'
      },
      {
        type: 'Express.js',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        link: 'https://expressjs.com/'
      },
      {
        type: 'Node.js',
        img: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
        link: 'https://nodejs.org/en/'
      }
    ],
    short_description: 'A dating app designed for people in the tech industry',
    long_description:
      'Tech Tinder was my 3rd project at General Assembly, it was a 5 day group project with two others. Formatted for mobile and desktop, Tech Tinder is a full stack application using PostgreSQL, Express.js, React, Node.js (PERN). Tech Tinder is a fully functional mock dating app designed for people in the tech industry. It is just like tinder without the messaging (a future update!).',
    img: [
      './images/techtinder-home-mobile.png',
      'https://github.com/anovick1/Tech-Tinder-Front/raw/main/images/edit.png'
    ],
    github: 'https://github.com/anovick1/Tech-Tinder-Front',
    deployed_link: 'https://tech-tinder-novick.web.app/'
  }
  allProjects.push(techtinder)
  topProjects.push(techtinder)

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home
                topProjects={topProjects}
                skills={skills}
                displayedProject={displayedProject}
                setDisplayedProject={setDisplayedProject}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <Projects
                allProjects={allProjects.reverse()}
                displayedProject={displayedProject}
                setDisplayedProject={setDisplayedProject}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/:name"
          element={
            <>
              <Navbar />
              <Avery />
              <ProjectDetails
                allProjects={allProjects}
                displayedProject={displayedProject}
                setDisplayedProject={setDisplayedProject}
              />
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  )
}

export default App
