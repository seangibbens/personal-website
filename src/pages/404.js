import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Fragment>
    <SEO title='Whoops' />
    <h1>NOT FOUND ¯\_(ツ)_/¯</h1>
    <p>
      <Link to='/'>Go back to the homepage</Link>
    </p>
  </Fragment>
)

export default NotFoundPage
