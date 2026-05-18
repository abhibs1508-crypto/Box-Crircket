const actions = ['0', '1', '2', '3', '4', '6', 'WICKET', 'WIDE', 'NO BALL', 'BYE', 'LEG BYE', 'UNDO'];
export const ScoringControls = ({ onAction }: { onAction: (action: string) => void }) => (
  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">{actions.map((a) => <button key={a} onClick={() => onAction(a)} className="rounded-lg border border-border p-3 font-semibold hover:bg-card">{a}</button>)}</div>
);
