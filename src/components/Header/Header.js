import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCisco, DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { SectionDivider } from '../../styles/GlobalComponents';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{display: "flex", alignItems: "center", color:"white", marginBottom:"20px"}}>
            <DiCisco size="3rem"/><Span>Vincent</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
      <SocialIcons href='https://facebook.com/gmcenti123'>
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://github.com/AishteruVincent'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://linkedin.com/in/vincentcunanan'>
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        
      </Div3>
      </Container>
  </div>
);

export default Header;
