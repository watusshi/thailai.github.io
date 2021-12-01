import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

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