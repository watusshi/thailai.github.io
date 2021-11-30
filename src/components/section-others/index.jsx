import React from 'react';

import Section from '../section';

const SectionOthers = ({ others }) => {
  return (
    <Section title="Others">
      <div className="mb-6">
        <p>{others}</p>
      </div>
    </Section>
  );
};

export default SectionOthers;
