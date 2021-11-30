import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionOthers = ({ others }) => {
  return (
    <Section title="Others">
      {others.map((others) => (
        <SummaryItem
          key={other.name}
          name={other.name}
          description={other.description}
        />
      ))}
    </Section>
  );
};

export default SectionOthers;
