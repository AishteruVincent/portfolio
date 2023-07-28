import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome to <br/>
      My Personal Portfolio
    </SectionTitle>
    <SectionText> I want to be a part of a progressive and highly dynamic
company and to excel in all of the company's activities while
also continuing to learn and grow my knowledge, abilities,
and experience.
    </SectionText>
    <Button onClick={() => window.location = "https://google.com"}>Learn More</Button>
  </LeftSection>

  </Section>
);

export default Hero;