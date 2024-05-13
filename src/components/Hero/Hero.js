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
    <SectionText> Enthusiastic and motivated individual eager to kickstart a
career in mobile development, with a particular focus on
Flutter technology. Possesses a strong foundation in
software development principles and a keen interest in
learning and mastering Flutter for creating innovative
mobile applications.

    </SectionText>
    <Button onClick={() => window.location = "https://github.com/AishteruVincent"}>Learn More</Button>
  </LeftSection>

  </Section>
);

export default Hero;