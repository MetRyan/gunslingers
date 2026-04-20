/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 
        A geometric "G" inspired by the Juventus J.
        Sharp angles, 45/90 degrees.
        Negative space silhouette of a stylized revolver.
      */}
      <path d="M10,10 H90 V30 H30 V70 H70 V50 H50 V40 H90 V90 H10 Z" />
      {/* Minimalist revolver cutout in the middle */}
      <path 
        fill="black" 
        d="M55,55 H80 V62 H65 V75 H58 L55,70 Z" 
        className="mix-blend-difference"
      />
      {/* Or more likely just a sharp G shape with vertical stripes like Juve's logo */}
      <rect x="15" y="15" width="10" height="70" />
      <rect x="35" y="15" width="10" height="70" />
      <path d="M15,15 H85 V25 H45 V85 H15 Z" />
      <path d="M60,15 H85 V85 H75 V25 H60 Z" />
    </svg>
  );
};

export const GeometricG: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 
        Ultra-minimalist G:
        Two vertical bars joined by a sharp angular header.
        Basically a modified mirror of the Juve J.
      */}
      <path
        d="M20 20 H80 V40 H40 V60 H80 V90 H20 V20"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export const GunslingersLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Juventus inspired 'G' */}
        {/* Vertical stripes essence */}
        <rect x="25" y="10" width="12" height="80" />
        <rect x="45" y="10" width="12" height="80" />
        {/* Sharp G connecting elements */}
        <path d="M25 10 H80 V22 H37 V80 H25 Z" />
        <path d="M65 50 H80 V90 H45 V78 H65 Z" />
        {/* Stylized Revolver detail as a negative punch-out or sharp line */}
        <path d="M80 50 L90 50 L90 55 L80 55 Z" />
      </svg>
    </div>
  );
};
