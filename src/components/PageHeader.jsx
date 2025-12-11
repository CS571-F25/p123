function PageHeader({ title, subtitle }) {
  return (
    <header className="mb-4">
      <h1 className="mb-2">{title}</h1>
      {subtitle && <p className="lead mb-0">{subtitle}</p>}
    </header>
  );
}

export default PageHeader;
