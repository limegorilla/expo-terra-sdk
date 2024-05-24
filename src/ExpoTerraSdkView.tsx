import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoTerraSdkViewProps } from './ExpoTerraSdk.types';

const NativeView: React.ComponentType<ExpoTerraSdkViewProps> =
  requireNativeViewManager('ExpoTerraSdk');

export default function ExpoTerraSdkView(props: ExpoTerraSdkViewProps) {
  return <NativeView {...props} />;
}
