import { motion } from 'framer-motion';

export const HomePage = () => (
  <div className="space-y-8">
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl bg-card p-8">
      <h1 className="text-3xl font-bold">CricCombo Smart Box Cricket OS</h1>
      <p className="text-sm mt-2">Book turfs, follow live matches, manage teams, and run operations at scale.</p>
    </motion.section>
  </div>
);
