import React from 'react'
import PropTypes from 'prop-types'

import BannerHome from './BannerHome';
import AboutHome from './AboutHome';
import SolutionsHome from './SolutionsHome';
import ProjectsHome from './ProjectsHome';
import ClientsHome from './ClientsHome';
import CommmentsHome from './CommmentsHome';
import NoticeHome from './NoticeHome';

function Home({changeLoading}) {
  return (
    <>
      <BannerHome changeLoading={changeLoading}></BannerHome>
      <AboutHome changeLoading={changeLoading}></AboutHome>
      <SolutionsHome></SolutionsHome>
      <ProjectsHome changeLoading={changeLoading}></ProjectsHome>
      <ClientsHome></ClientsHome>
      <CommmentsHome></CommmentsHome>
      <NoticeHome changeLoading={changeLoading}></NoticeHome>
    </>
  )
}

Home.propTypes = {}

export default Home
