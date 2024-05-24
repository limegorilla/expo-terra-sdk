import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoTerraSdk.web.ts
// and on native platforms to ExpoTerraSdk.ts
import ExpoTerraSdkModule from './ExpoTerraSdkModule';
import ExpoTerraSdkView from './ExpoTerraSdkView';
import { ChangeEventPayload, ExpoTerraSdkViewProps } from './ExpoTerraSdk.types';

// Get the native constant value.
export const PI = ExpoTerraSdkModule.PI;

export function hello(): string {
  return ExpoTerraSdkModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoTerraSdkModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoTerraSdkModule ?? NativeModulesProxy.ExpoTerraSdk);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoTerraSdkView, ExpoTerraSdkViewProps, ChangeEventPayload };
