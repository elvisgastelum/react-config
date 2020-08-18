import React, { useEffect } from 'react';
import '@/util/prism/prism';
import '@/util/prism/prism-default.css';

const CodeSnipet = (props) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const { code, language, className } = props;
  return (
    <pre className={`language-${language} line-numbers ${className}`} {...props}>
      <code>{code}</code>
    </pre>
  );
};

export default CodeSnipet;
