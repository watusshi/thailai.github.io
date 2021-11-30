import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionOthers = ({ others }) => {
  return (
    <Section title="Others">
      {skills.map((others) => (
        <SummaryItem
          key={test.name}
          name={test.name}
          description={test.description}
        />
      ))}
    </Section>
  );
};

export default SectionOthers;
