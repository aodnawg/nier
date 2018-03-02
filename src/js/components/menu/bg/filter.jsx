import React from 'react';

export default function Filter() {
  return (<defs>
    <filter id="polycleaner" colorInterpolationFilters="sRGB">
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.5 1 1" />
      </feComponentTransfer>
    </filter>
          </defs>);
}
