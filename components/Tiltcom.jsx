'use client';

import React from 'react';
import Tilt from "react-parallax-tilt";

export default function Tiltcom({title,className}) {
  return (
    <Tilt className={className}>{title}</Tilt>
  )
}
