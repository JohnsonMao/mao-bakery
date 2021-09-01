import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Banner from '../../components/Banner';
import ActivitiesList from '../../components/ActivitiesList';
import Subscription from '../../components/Subscription';
import Course from './Course';
import Knowledge from './Knowledge';
import Promotion from './Promotion';
import { Container, Nav } from 'react-bootstrap';
import bannerData from '../../data/bannerData.json';
import newsData from '../../data/newsData.json';
import newsMenu from '../../config/newsMenuConfig';

export default function News() {
  const getNewsMenu = ( menu ) => {
    return menu.map((item, index) => {
      return (
        <Nav.Item as={'li'} key={ index }>
          <NavLink className="d-block text-light fs-4 px-3 py-2" to={`/news/${ item.to }`}>
            { item.title }
          </NavLink>
        </Nav.Item>
      )
    })
  }
  return (
    <>
      <Banner data = {bannerData} />
      <nav className="sticky-navbar bg-primary mb-5">
        <Container>
          <Nav as={'ul'} className="justify-content-around">
            { getNewsMenu( newsMenu ) }
          </Nav>
        </Container>
      </nav>
      <Switch>
        <Route path="/news/course" component={ Course } />
        <Route path="/news/knowledge" component={ Knowledge } />
        <Route path="/news/promotion" component={ Promotion } />
        <Route path="/news" component={ All } />
        <Redirect to="/news/promotion" />
      </Switch>
      <Container className="mb-5">
      </Container>
      <Subscription />
    </>
  )
}

const All = () => {
  return (
    <>
      <ActivitiesList data = {newsData} />
    </>
  )
}
