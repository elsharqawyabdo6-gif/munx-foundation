export function withLazyImport<T extends object>(factory: () => Promise<T>) {
  return factory;
}

export function imageLoader(src: string) {
  return src;
}
