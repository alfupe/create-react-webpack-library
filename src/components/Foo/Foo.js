import React, { Component, useState } from 'react';
import './foo.scss';

const Foo = ({ message = 'Hello world' }) => {
  const [active, setActive] = useState(true);

  return (
    <button onClick={(event) => setActive(!active)}>
      {active ? message : 'off'}
    </button>
  );
};

export default Foo;
