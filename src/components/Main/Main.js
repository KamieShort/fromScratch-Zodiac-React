import React from 'react';
import { zodiac } from '../../data';
import './Main.css';
import Signs from '../Signs/Signs';

export default function Main() {
  return (
    <main className="maindiv">
      {zodiac.map((item) => (
        <Signs key={item.name} name={item.name} dates={item.dates} />
      ))}
    </main>
  );
}
