import React from 'react';
import CodeSnipet from 'components/CodeSnipet';

const code = `
{
  "name": "Elvis Gastelum",
  "developer", true,
  "twitter": "@ElvisGastelum",
  "github": "@ElvisGastelum"
}
`.trim();

const AboutSnipet = () => {
  return (
    <figure>
      <figcaption>elvis-gastelum.json</figcaption>
      <CodeSnipet code={code} language={'json'} />
    </figure>
  );
};

export default AboutSnipet;
