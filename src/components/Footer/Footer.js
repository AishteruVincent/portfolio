import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call/Text</LinkTitle>
          <LinkItem href="tel:09569834138">09569834138</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vincentcunanan53@gmail.com">vincentcunanan53@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Start small and do one thing at a time.</Slogan>
        </CompanyContainer>
      <SocialIconsContainer>
      <SocialIcons href='https://facebook.com/gmcenti123'>
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://github.com/AishteruVincent'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://linkedin.com/in/vincentcunanan'>
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
