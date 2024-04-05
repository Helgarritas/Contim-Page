import React from 'react'
import PropTypes from 'prop-types'

import BannerHome from './BannerHome';
import AboutHome from './AboutHome';
import SolutionsHome from './SolutionsHome';
import ProjectsHome from './ProjectsHome';
import ClientsHome from './ClientsHome';
import CommmentsHome from './CommmentsHome';
import NoticeHome from './NoticeHome';

function Home(props) {
  return (
    <>
      <BannerHome></BannerHome>
      <AboutHome></AboutHome>
      <SolutionsHome></SolutionsHome>
      <ProjectsHome></ProjectsHome>
      <ClientsHome></ClientsHome>
      <CommmentsHome></CommmentsHome>
      <NoticeHome></NoticeHome>
    </>
  )
}

Home.propTypes = {}

export default Home
