import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionOthers = ({ others }) => {
  return (
    <Section title="Others">
      {others.map((others) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
        />
      ))}
    </Section>
  );
};

export default SectionOthers;
