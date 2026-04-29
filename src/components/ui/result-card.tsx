type ResultCardProps = {
  category: string;
  challenge: string;
  change: string;
  metric: string;
};

export function ResultCard({
  category,
  challenge,
  change,
  metric,
}: ResultCardProps) {
  return (
    <article className="rounded-[2rem] border border-border bg-white p-8 shadow-card">
      <p className="text-base font-semibold uppercase tracking-[0.16em] text-accent">
        {category}
      </p>
      <h3 className="mt-6 font-heading text-[2rem] font-semibold tracking-tight text-fg">
        {metric}
      </h3>
      <div className="mt-6 space-y-4 text-base leading-8 text-fg/75">
        <p>
          <span className="font-semibold text-fg">문제:</span> {challenge}
        </p>
        <p>
          <span className="font-semibold text-fg">개선:</span> {change}
        </p>
      </div>
    </article>
  );
}
