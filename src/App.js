import './Styling/App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ProjectDetails from './pages/ProjectDetails'

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

  let allProjects = []
  let topProjects = []
  let stock = {
    title: 'Stock Price Prediction Calculator',
    date: 'May 2021',
    tech: [
      {
        type: 'Python',
        img: 'https://cdn-icons-png.flaticon.com/512/2/2181.png',
        link: 'https://www.python.org/'
      },
      {
        type: 'Pandas.py',
        img: 'https://www.pinclipart.com/picdir/middle/367-3678882_python-logo-clipart-easy-pandas-python-logo-png.png',
        link: 'https://pandas.pydata.org/'
      },
      {
        type: 'NumPy',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkX54_8TzFQvnJRNzwhgrAQnJDHRW_OVioTm_IOgKExo5Gp3zrHfXNklAaYh8TcBXsWo0&usqp=CAU',
        link: 'https://numpy.org/'
      },
      {
        type: 'Alpha Vantage API',
        img: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mejkuijaczeid9uiosyx',
        link: 'https://www.alphavantage.co/'
      }
    ],
    short_description:
      'A python script that takes live stock data to predict future stock prices using the WACC financial model',
    long_description:
      'For my Computer Science Capstone Project at American University, I teamed up with another CS student and two finance students in order to make this stock price calculator. We automated the financial models (WACC model, 5 year financial data forecast, and DCF model) that were able to predict the future prices of different stocks. These models usually take analysts 3-4 hours in excel to create. Inputting data into this script and getting a result takes about 3 minutes',
    img: [
      'https://sevensreport.com/wp-content/uploads/2016/07/stock-market-3.jpg'
    ],
    github: 'https://github.com/anovick1/Stock_AI',
    deployed_link: 'NA'
  }
  allProjects.push(stock)
  let covid = {
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
        img: 'https://pbs.twimg.com/profile_images/1274055454260412420/ke8CYWAr_400x400.jpg',
        link: 'https://disease.sh/'
      }
    ],
    short_description: 'A map of the US showcasing Covid test and Covid cases.',
    long_description:
      'For my Web Programming class at American, this was my final project. It was a group project with 2 other students. We decided to make a map that can give users information about covid in their state. Note - this was made in May of 2021 so the key is not updated with current numbers. That is why the whole use is dark red for cases.',
    img: ['https://github.com/anovick1/Covid-Map/raw/main/screenshot.png'],
    github: 'https://github.com/anovick1/Covid-Map',
    deployed_link: 'NA'
  }
  allProjects.push(covid)
  topProjects.push(covid)

  let bj = {
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
      'This was my first project for the General Assembly Software Engineering Immersive program. I built this project over the course of 5 days using vanilla Javascript, HTML, and CSS. ',
    img: [
      'https://github.com/anovick1/Blackjack_Novick/raw/main/images/winner.png'
    ],
    github: 'https://github.com/anovick1/Blackjack_Novick',
    deployed_link: 'https://averynovickblackjack.surge.sh/'
  }
  allProjects.push(bj)
  let theme = {
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
        img: 'https://mpng.subpng.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg',
        link: 'https://www.mongodb.com/'
      },

      {
        type: 'Mongoose',
        img: 'https://avatars.githubusercontent.com/u/7552965?s=280&v=4',
        link: 'https://mongoosejs.com/docs/'
      },
      {
        type: 'Express.js',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49CPLVKPAe1cslXaHnF20_Qwt-MiSoRen-vvYNoCmLkKwCQ1GtWdstwiUeDJ03RYu5ik&usqp=CAU',
        link: 'https://expressjs.com/'
      },
      {
        type: 'Node.js',
        img: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
        link: 'https://nodejs.org/en/'
      }
    ],
    short_description: 'A website where you can review different theme parks',
    long_description:
      'This was a Hackathon with General assembly that lasted a day and a half; I was in a group of 3. Our group was tasked with creating a theme park themed Full Stack Application in a day and a half using React, a MongoDB , and a Mongoose/Express. We created a Theme Park Review Website that includes real Yelp reviews',
    img: [
      'https://github.com/anovick1/Theme_Park/raw/main/Images/DeployedHomepage.png',
      'https://github.com/anovick1/Theme_Park/raw/main/Images/Deployedform.png'
    ],
    github: 'https://github.com/anovick1/Theme_Park',
    deployed_link: 'NA'
  }
  allProjects.push(theme)
  let nba = {
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
        img: 'https://mpng.subpng.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg',
        link: 'https://www.mongodb.com/'
      },

      {
        type: 'Mongoose',
        img: 'https://avatars.githubusercontent.com/u/7552965?s=280&v=4',
        link: 'https://mongoosejs.com/docs/'
      },
      {
        type: 'Express.js',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49CPLVKPAe1cslXaHnF20_Qwt-MiSoRen-vvYNoCmLkKwCQ1GtWdstwiUeDJ03RYu5ik&usqp=CAU',
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
    short_description: 'A social media dedicated to NBA Hot takes',
    long_description:
      "For my second project with General Assembly I was tasked to make a full stack MongoDB, Express.js, React, Node (MERN) application. As an avid NBA fan who can't stop checking twitter, I decided to make a social media app focused around the NBA. I have implemented the Twitter API that will get live tweets every time I reseed the database.",
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
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49CPLVKPAe1cslXaHnF20_Qwt-MiSoRen-vvYNoCmLkKwCQ1GtWdstwiUeDJ03RYu5ik&usqp=CAU',
        link: 'https://expressjs.com/'
      },
      {
        type: 'Node.js',
        img: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
        link: 'https://nodejs.org/en/'
      }
    ],
    short_description: 'A dating app targeted at people in the tech industry',
    long_description:
      'This was for my 3rd project at General Assembly, it was a group project with two others. Formatted for mobile and desktop, Tech Tinder is a full stack application using PostgreSQL, Express.js, React, Node.js (PERN). Tech Tinder is a fully functional mock dating app for individuals who are in tech. It is just like tinder without the messaging (a future update!).',
    img: [
      './images/techtinder-home-mobile.png',
      'https://github.com/anovick1/Tech-Tinder-Front/raw/main/images/edit.png'
    ],
    github: 'https://github.com/anovick1/Tech-Tinder-Front',
    deployed_link: 'https://techtinder.herokuapp.com/'
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
              <Home topProjects={topProjects} />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route
          path="/title"
          element={
            <>
              <Navbar />
              <ProjectDetails />
            </>
          }
        />
      </Routes>
    </main>
  )
}

export default App
