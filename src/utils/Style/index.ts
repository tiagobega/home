export class StyleUtils {
  /**
   * create an array of classes based in a responsive object;
   * order of class structure: `${className}--${propertyClass}-${breakpoint}-${variant}`
   * @param className
   * @param propertyClass
   * @param variant
   * @returns
   */
  static responsiveClasses(
    className: string,
    propertyClass: string,
    variant: Responsive<any> | undefined
  ) {
    const variantClasses: string[] = [];

    if (!variant) {
      return variantClasses;
    }

    if (typeof variant === 'string' || typeof variant === 'number') {
      return [`${className}--${propertyClass}-xs-${variant}`];
    }

    Object.keys(variant).forEach((key) => {
      variantClasses.push(
        `${className}--${propertyClass}-${key}-${variant[key]}`
      );
    });

    return variantClasses;
  }

  static calculateTransitionDelay(
    index: number,
    delay: number,
    delayBase: number = 100
  ) {
    return delay + index * delayBase;
  }

  static calculateTransitionDelayStyle(
    index: number,
    delay: number,
    delayBase: number = 100
  ) {
    const calc = this.calculateTransitionDelay(index, delay, delayBase);

    return { transitionDelay: `${calc}ms` };
  }
}
