import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionTest = ({ test }) => {
  return (
     <Section title="test">
      {test.map((stuff) => (
        <SummaryItem
          key={stuff.name}
          name={stuff.name}
          description={stuff.description}
        />
      ))}
    </Section>
  );
};

export default SectionTest;
