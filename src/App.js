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
  //   short_descripton: '',
  //   long_description:
  //     '',
  //   img: [''],
  //   github: '',
  //   deployed_link: ''
  // }

  let projects = []
  let stock = {
    title: 'Stock Price Prediction Calculator',
    date: 'May 2021',
    tech: ['Python', 'Pandas', 'Numpy', 'Alpha Vantage API'],
    short_descripton:
      'A python script that takes live stock data to predict future stock prices using the WACC financial model',
    long_description:
      'For my Computer Science Capstone Project at American University, I teamed up with another CS student and two finance students in order to make this stock price calculator. We automated the financial models (WACC model, 5 year financial data forecast, and DCF model) that were able to predict the future prices of different stocks. These models usually take analysts 3-4 hours in excel to create. Inputting data into this script and getting a result takes about 3 minutes',
    img: [
      'https://sevensreport.com/wp-content/uploads/2016/07/stock-market-3.jpg'
    ],
    github: 'https://github.com/anovick1/Stock_AI',
    deployed_link: 'NA'
  }
  projects.push(stock)
  let covid = {
    title: 'Covid Map',
    date: 'May 2021',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'Leaflet.js',
      'P5.js',
      'Turf.js',
      'Disease.sh'
    ],
    short_descripton: 'A map of the US showcasing Covid test and Covid cases.',
    long_description:
      'For my Web Programming class at American, this was my final project. It was a group project with 2 other students. We decided to make a map that can give users information about covid in their state. Note - this was made in May of 2021 so the key is not updated with current numbers. That is why the whole use is dark red for cases.',
    img: ['https://github.com/anovick1/Covid-Map/raw/main/screenshot.png'],
    github: 'https://github.com/anovick1/Covid-Map',
    deployed_link: 'NA'
  }
  projects.push(covid)
  let bj = {
    title: 'Blackjack',
    date: 'July 2022',
    tech: ['HTML', 'Javascript', 'CSS'],
    short_descripton: 'A simple blackjack app using JavaScript, HTML, CSS.',
    long_description:
      'This was my first project for the General Assembly Software Engineering Immersive program. I built this project over the course of 5 days using vanilla Javascript, HTML, and CSS. ',
    img: [
      'https://github.com/anovick1/Blackjack_Novick/raw/main/images/winner.png'
    ],
    github: 'https://github.com/anovick1/Blackjack_Novick',
    deployed_link: 'https://averynovickblackjack.surge.sh/'
  }
  projects.push(bj)
  let theme = {
    title: 'Theme Park Review',
    date: 'July 2022',
    tech: [
      'HTML',
      'Javascript',
      'CSS',
      'React',
      'MongoDB',
      'Express.js',
      'Node.js'
    ],
    short_descripton: 'A website where you can review different theme parks',
    long_description:
      'This was a Hackathon with General assembly that lasted a day and a half; I was in a group of 3. Our group was tasked with creating a theme park themed Full Stack Application in a day and a half using React, a MongoDB , and a Mongoose/Express. We created a Theme Park Review Website that includes real Yelp reviews',
    img: [
      'https://github.com/anovick1/Theme_Park/raw/main/Images/DeployedHomepage.png',
      'https://github.com/anovick1/Theme_Park/raw/main/Images/Deployedform.png'
    ],
    github: 'https://github.com/anovick1/Theme_Park',
    deployed_link: 'NA'
  }
  projects.push(theme)
  let nba = {
    title: 'NBA Hot Takes',
    date: 'July 2022',
    tech: [
      'HTML',
      'Javascript',
      'CSS',
      'React',
      'MongoDB',
      'Express.js',
      'Node.js',
      'Twitter API'
    ],
    short_descripton: 'A social media dedicated to NBA Hot takes',
    long_description:
      "For my second project with General Assembly I was tasked to make a full stack MongoDB, Express.js, React, Node (MERN) application. As an avid NBA fan who can't stop checking twitter, I decided to make a social media app focused around the NBA. I have implemented the Twitter API that will get live tweets every time I reseed the database.",
    img: [
      'https://github.com/anovick1/NBA-HotTakes/raw/main/images/newsfeed.png',
      'https://github.com/anovick1/NBA-HotTakes/raw/main/images/profile.png'
    ],
    github: 'https://github.com/anovick1/NBA-HotTakes',
    deployed_link: 'https://novick-nba-app.herokuapp.com/'
  }
  projects.push(nba)
  let techtinder = {
    title: 'Tech Tinder',
    date: 'August 2022',
    tech: [
      'HTML',
      'Javascript',
      'CSS',
      'React',
      'MongoDB',
      'Express.js',
      'Node.js',
      'Twitter API'
    ],
    short_descripton: 'A dating app targeted at people in the tech industry',
    long_description:
      'This was for my 3rd project at General Assembly, it was a group project with two others. Formatted for mobile and desktop, Tech Tinder is a full stack application using PostgreSQL, Express.js, React, Node.js (PERN). Tech Tinder is a fully functional mock dating app for individuals who are in tech. It is just like tinder without the messaging (a future update!).',
    img: [
      './public/imagestechtinder-home-mobile.png',
      'https://github.com/anovick1/Tech-Tinder-Front/raw/main/images/edit.png'
    ],
    github: 'https://github.com/anovick1/Tech-Tinder-Front',
    deployed_link: 'https://techtinder.herokuapp.com/'
  }
  projects.push(techtinder)

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home projects={projects} />
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
