import React from 'react';
import { DiAndroid, DiDart, DiFirebase, DiGithub, DiJava, DiJavascript, DiJavascript1, DiLaravel, DiPhp, DiReact, DiWindows, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText> Things that I have experience with
      
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Experience with <br/> React.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhp size="3rem"/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Experience with <br/> PHP, MySQL and Laravel</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWindows size="3rem"/>
        <ListContainer>
          <ListTitle>Operating Systems</ListTitle>
          <ListParagraph>Experience with <br/> Windows Server 2003, 2008</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size="3rem"/>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>Experience with <br/> Flutter to create Android apps</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem"/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Experience with <br/> Java</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithub size="3rem"/>
        <ListContainer>
          <ListTitle>Repository</ListTitle>
          <ListParagraph>Experience with <br/> GitHub</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;