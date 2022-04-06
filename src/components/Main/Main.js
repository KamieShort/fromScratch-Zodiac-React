import React from 'react';
import { zodiac } from '../../data';
import './Main.css';
import Signs from '../Signs/Signs';

import background from '../../background.jpg';

export default function Main() {
  return (
    <main className="maindiv" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((item) => (
        <Signs key={item.name} name={item.name} dates={item.dates} />
      ))}
    </main>
  );
}
