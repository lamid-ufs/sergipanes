function getDeviceType(): string {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width <= 599) {
    return 'smartphone';
  } else if (width >= 600 && width <= 801 && height <= 1341) {
    if (width > height) {
      return 'tablet-landscape';
    } else {
      return 'tablet-portrait';
    }
  } else {
    return 'desktop';
  }
}

export default getDeviceType;
