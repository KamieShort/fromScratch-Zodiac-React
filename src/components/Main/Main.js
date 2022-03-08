import React from 'react';
import { zodiac } from '../../data';
import './Main.css';

export default function Main() {
  return (
    <main>
      {zodiac.map((item) => (
        <zodiac key={item.name} type={item.name} dates={item.dates} />
      ))}
    </main>
  );
}
