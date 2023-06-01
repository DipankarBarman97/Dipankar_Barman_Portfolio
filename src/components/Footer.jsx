import React from 'react'
import { AiOutlineArrowUp, AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={"https://avatars.githubusercontent.com/u/133434769?v=4"} alt="Founder" />
        <h2>Dipankar Barman</h2>
        <p>Take Risks in Your Life If you Win, U Can Lead! If You Lose, You can Guide!</p>
      </div>

      <aside>
        <h2>Social Handles</h2>
        <article>
            <a href="https://instagram.com/dipankar.db37" target={'blank'}><AiFillInstagram /></a>
            <a href="https://github.com/DipankarBarman97" target={'blank'}><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/dipankarbarman2607/" target={'blank'}><AiFillLinkedin /></a>
        </article>
      </aside>
      <a href="#home"><AiOutlineArrowUp /></a>
    </footer>
  )
}

export default Footer
