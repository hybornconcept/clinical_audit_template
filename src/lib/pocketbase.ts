

import PocketBase from 'pocketbase';

// Create a singleton instance
export const pb = new PocketBase('https://clinical-audit.pockethost.io');

// Disable auto-cancellation globally
pb.autoCancellation(false); 