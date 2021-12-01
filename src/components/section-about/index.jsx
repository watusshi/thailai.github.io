import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
     <Section title="About me">
      {about.map((stuff) => (
        <SummaryItem
          key={stuff.name}
          name={stuff.name}
          description={stuff.description}
        />
      ))}
    </Section>
  );
};

export default SectionAbout;
