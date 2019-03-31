import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import SEO from '../components/seo'

const IndexPage = () => (
  <Fragment>
    <SEO
      title='Sean Gibbens Development'
      keywords={[`sean`, `gibbens`, `development`, `gatsby`, `react`]}
    />
    <section>
      <h1>Hello</h1>
      <p>
        My name is Sean Gibbens. I am a developer based in Indianapolis,
        Indiana.
      </p>
      <div className='links'>
        <a
          href='https://www.linkedin.com/in/sean-gibbens-48723099/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedinIn} size='3x' />
        </a>
        <a
          href='https://github.com/seangibbens'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} size='3x' />
        </a>
      </div>
    </section>
    <section>
      <h1>Got work?</h1>
      <p>For development inquiries, please email seangibbensdev@gmail.com.</p>
    </section>
  </Fragment>
)

export default IndexPage
