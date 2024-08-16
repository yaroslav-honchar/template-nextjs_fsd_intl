export class Document {
  /**
   * Sets the value of a CSS variable.
   *
   * @param {string} property - The name of the CSS variable.
   * @param {string} value - The value to set the CSS variable to.
   * @returns {void}
   */
  static setCSSVar(property: string, value: string | null | undefined) {
    if (typeof document === "undefined" || !value) {
      return
    }

    document.documentElement.style.setProperty(`--${property}`, value)
  }
}
