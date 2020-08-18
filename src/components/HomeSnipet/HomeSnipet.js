import React from 'react';
import CodeSnipet from 'components/CodeSnipet';

const code = `
# This template is for create a basic custom configuration of any project of Reactjs

With this repo you can:
> Code a react app in minutes
> Set absolute paths, or use the '@'
>> Example:
\`\`\`js
// 'src/components' set
import Header from 'components/Header';

// and not
import Header from '../../../components/Header';

// 'src/' set
import Header from '@/pages/Home';

// and not
import Header from '../../../pages/Home';
\`\`\`
>> The paths set are
>>> '@' to src folder
>>> 'components' to src/components
>>> 'pages' to src/pages
`.trim();

const HomeSnipet = () => {
  return (
    <figure>
      <figcaption>README.md</figcaption>
      <CodeSnipet code={code} language={'markdown'} data-dependencies="markdown!" />
    </figure>
  );
};

export default HomeSnipet;
