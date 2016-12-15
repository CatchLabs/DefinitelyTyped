// Type definitions for image-size-catch
// Project: https://github.com/image-size-catch/image-size-catch
// Definitions by: Elisée MAURER <https://github.com/elisee/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "image-size-catch" {

  interface ImageInfo {
    width: number;
    height: number;
    type: string;
  }

  function sizeOf(path: string): ImageInfo;
  function sizeOf(path: string, callback: (err: Error, dimensions: ImageInfo) => void): void;

  function sizeOf(buffer: Buffer): ImageInfo;

  namespace sizeOf {}

  export = sizeOf;
}
