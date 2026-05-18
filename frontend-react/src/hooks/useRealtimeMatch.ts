import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { useEffect } from 'react';

export const useRealtimeMatch = (matchId: string, handlers: Record<string, () => void>) => {
  useEffect(() => {
    if (!matchId) return;
    const echo = new Echo({
      broadcaster: 'pusher',
      client: new Pusher(import.meta.env.VITE_WS_KEY, { cluster: import.meta.env.VITE_WS_CLUSTER })
    });

    const channel = echo.channel(`match.${matchId}`);
    channel.listen('ScoreUpdated', handlers.ScoreUpdated || (() => undefined));
    channel.listen('WicketFallen', handlers.WicketFallen || (() => undefined));
    channel.listen('OverCompleted', handlers.OverCompleted || (() => undefined));
    channel.listen('MatchFinished', handlers.MatchFinished || (() => undefined));

    return () => { echo.leave(`match.${matchId}`); echo.disconnect(); };
  }, [matchId, handlers]);
};
