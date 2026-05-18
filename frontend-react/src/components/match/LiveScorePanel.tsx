import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

export const LiveScorePanel = ({ data }: { data: Array<{ over: number; runs: number }> }) => (
  <div className="rounded-xl border border-border p-4">
    <h3 className="mb-3 font-semibold">Run Rate Graph</h3>
    <div className="h-52">
      <ResponsiveContainer>
        <LineChart data={data}><XAxis dataKey="over"/><YAxis/><Tooltip/><Line type="monotone" dataKey="runs" stroke="hsl(var(--primary))" /></LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
