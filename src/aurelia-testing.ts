import { FrameworkConfiguration } from 'aurelia-framework';
import { CompileSpy } from './compile-spy';
import { ViewSpy } from './view-spy';
export * from './component-tester';
export * from './wait';
export * from './update-bindings';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([CompileSpy, ViewSpy]);
}

export { CompileSpy, ViewSpy };
