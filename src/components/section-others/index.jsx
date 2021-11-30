import React from 'react';

import Section from '../section';

const SectionOthers = ({ others }) => {
  return (
    <Section title="Others">
      <div className="mb-9">
        <p>{others}</p>
      </div>
    </Section>
  );
};

export default SectionOthers;
