import type { ReactNode } from "react";

export function PageHeader({
  number,
  label,
  title,
  description,
  actions,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="page-header">
      <div>
        <p className="eyebrow">
          {number} / {label}
        </p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {actions && <div className="flex flex-wrap gap-3 shrink-0">{actions}</div>}
    </div>
  );
}

export function SectionTitle({
  children,
  aside,
}: {
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      {aside}
    </div>
  );
}

export function Panel({
  title,
  label,
  children,
  className = "",
}: {
  title: string;
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel-heading">
        <h2>{title}</h2>
        {label && <span className="eyebrow">{label}</span>}
      </div>
      <div className="panel-body">{children}</div>
    </section>
  );
}
