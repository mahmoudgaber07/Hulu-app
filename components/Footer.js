import React from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <footer className="my-5">
        <div className="container">
          <h3 className="contact my-5 text-2xl text-center">Contact me</h3>
          <section className="flex flex-grow justify-center my-10">      
            <a className="mx-5 hover:animate-bounce" href="https://www.linkedin.com/in/mahmoudgaber07/" target="_blank" rel="noopener noreferrer" role="button" 
              ><FontAwesomeIcon icon={faLinkedin} className="text-3xl"/></a>
      
            <a className="mx-5 hover:animate-bounce" href="https://github.com/mahmoudgaber07" target="_blank" rel="noopener noreferrer" role="button" 
            ><FontAwesomeIcon icon={faGithub} className="text-3xl"/></a>
      
            <a className="mx-5 hover:animate-bounce" href="https://www.behance.net/mahmoudgaber16" target="_blank" rel="noopener noreferrer" role="button" 
            ><FontAwesomeIcon icon={faBehance} className="text-3xl"/></a>
            
            <a className="mx-5 hover:animate-bounce" href="https://www.facebook.com/MahmoudGaber07/" target="_blank" rel="noopener noreferrer" role="button" 
              ><FontAwesomeIcon icon={faFacebook} className="text-3xl"/></a>
      
            <a className="mx-5 hover:animate-bounce" href = "mailto: mahmoudgaber94@gmail.com" role="button" 
            ><FontAwesomeIcon icon={faEnvelope} className="text-3xl" /></a>
          </section>
        </div>
      
        <div className="text-center my-5">
        All Copyright © : Mahmoud Gaber 2022 
        </div>
      </footer>
  )
}
