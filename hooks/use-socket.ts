import { useEffect, useState } from 'react';

// STUB: Socket.IO has been removed for Vercel/Serverless compatibility.
// If realtime features are needed in the future, consider using Supabase Realtime.

export function useSocket(userId?: string) {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState('N/A');

  useEffect(() => {
    // Stub implementation
    setIsConnected(false);
    setTransport('none');
  }, [userId]);

  return {
    socket: null,
    isConnected,
    transport,
  };
}

export function useSocketEvent<T = any>(
  event: string,
  callback: (data: T) => void
) {
  useEffect(() => {
    // Stub implementation - do nothing
  }, [event, callback]);
}

export function emitSocketEvent(event: string, data: any) {
  // Stub implementation - do nothing
  console.log(`[Socket Stub] Event ${event} would have been emitted with:`, data);
}

// Specific hooks for common events
export function useNotifications(callback: (notification: any) => void) {
  useSocketEvent('notification', callback);
}

export function useActivityUpdates(callback: (activity: any) => void) {
  useSocketEvent('activity', callback);
}

export function useTeamUpdates(callback: (update: any) => void) {
  useSocketEvent('team-update', callback);
}

export function useUserPresence(callback: (presence: any) => void) {
  useSocketEvent('user-presence', callback);
}

export function useTypingIndicator(callback: (data: { userId: string; isTyping: boolean }) => void) {
  useSocketEvent('user-typing', callback);
}
