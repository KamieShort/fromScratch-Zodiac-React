import React from 'react';
import './Signs.css';

export default function Signs(props) {
  return (
    <div className="signs">
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/signs/${props.name}.png`} />
      <span className="name">{props.name}</span>
      <span className="date">{props.dates}</span>
    </div>
  );
}
