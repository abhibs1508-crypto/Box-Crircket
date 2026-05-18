import { ScoringControls } from '@/components/scoring/ScoringControls';

export const ScoringPanelPage = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="border border-border rounded-lg p-3">Striker: --</div>
      <div className="border border-border rounded-lg p-3">Bowler: --</div>
      <div className="border border-border rounded-lg p-3">Over: --</div>
    </div>
    <ScoringControls onAction={() => undefined} />
  </div>
);
