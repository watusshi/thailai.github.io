import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionOthers = ({ others }) => {
  return (
    <Section title="Others">
      {skills.map((others) => (
        <SummaryItem
          key={skill.name}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </Section>
  );
};

export default SectionOthers;
