import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/starfruit.jpg'
import pic02 from '../images/blueberries.jpg'
import pic03 from '../images/foraged-mushrooms.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            In 2017, I left a corporate engineering job in Washington, DC and set out to reconnect
            with the Earth and learn how I could apply my technical skills to solving our most
            pressing planetary challenges. My journey took me to Northern California, Mexico, Costa Rica,
            and sailing up the coast of Central America all the way to Hawaii.
          </p>
          <p>
            Along the way, I fell in love with permaculture, regenerative agriculture,
            and traditional ecological knowledge, traditions with profound leverage to
            restore balance to our biosphere. Over the last few years, I've had the pleasure
            of helping land projects in Costa Rica and California by sharing my
            skills in communications, software engineering, and getting my hands in the soil.
            I've learned from incredible teachers about the wisdom of plants, the paramount
            importance of soil, the Earth's capacity to regenerate herself, and our responsibility to help.
          </p>
          <p>
            I'm now making a home in San Francisco and stewarding <a href="https://www.terran.io/" target="_blank">Terran Collective</a>, a
             community of care and practice building systems and tools for a regenerative future.
             I accept contracts in software engineering, communications, and corporate strategy.
             Please reach out to collaborate with me. We're in this together.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            <ul>
              <li>Software Engineering</li>
              <li>Regenerative Business Strategy</li>
              <li>Permaculture Design</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Clare is an eco-social entrepreneur and movement artist whose mission is channeling resources to healing. She has worked in architecture, refugee resettlement, yoga, nutrition, and regenerative agriculture contributing her skills in design, communications, and software engineering. She is creating a future where humans remember our destiny as responsible stewards of the Earth, living in reciprocal partnership with the land and the more-than-human community.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            To get in touch, please drop me a line at clare [at] terran [dot] io.
          </p>
          <ul className="icons">
            <li>
              <a href="https://www.instagram.com/claritymangolapa/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cpolitano"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
