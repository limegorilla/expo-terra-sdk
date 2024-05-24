import * as React from 'react';

import { ExpoTerraSdkViewProps } from './ExpoTerraSdk.types';

export default function ExpoTerraSdkView(props: ExpoTerraSdkViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
