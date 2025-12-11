function AccessibilityStatement() {
  return (
    <section aria-label="Accessibility information" className="mt-4">
      <h2 className="h4 mb-3">Accessibility</h2>
      <ul>
        <li>No heading levels are skipped on any page.</li>
        <li>All images include descriptive alt text or are marked as decorative.</li>
        <li>
          Color choices are taken from the default React Bootstrap theme, which
          meets WCAG AA contrast guidelines for text and key UI elements.
        </li>
        <li>All inputs have associated labels and helper text.</li>
        <li>
          All forms and interactive elements can be reached and used with a
          keyboard (Tab, Shift+Tab, and Enter).
        </li>
      </ul>
    </section>
  );
}

export default AccessibilityStatement;
