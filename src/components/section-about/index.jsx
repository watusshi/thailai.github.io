import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
     <Section title="About me">
      {others.map((about) => (
        <SummaryItem
          key={about.name}
          name={about.name}
          description={about.description}
        />
      ))}
    </Section>
  );
};

export default SectionAbout;
