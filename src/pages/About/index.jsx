import React from 'react';
import ActivitiesList from '../../components/ActivitiesList';
import Subscription from '../../components/Subscription';
import aboutList from '../../config/aboutConfig';
import { Container } from 'react-bootstrap'

export default function About() {
  return (
    <div className="mt-5 pt-5">
      <ActivitiesList data = {aboutList} />
      <Container>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.545551500031!2d121.45396561478933!3d25.04949204382485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a87d26404add%3A0xa60fee26712a10c4!2zMjQy5paw5YyX5biC5paw6I6K5Y2A5bm456aP6LevNTIw6Jmf!5e0!3m2!1szh-TW!2stw!4v1630411558574!5m2!1szh-TW!2stw" width="100%" height="450" className="p-5" loading="lazy"></iframe>
      </Container>
      <Subscription />
    </div>
  )
}
