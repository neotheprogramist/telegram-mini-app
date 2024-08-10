import { writable } from 'svelte/store';
import type { WebAppUser } from '@twa-dev/types';

// Define the user store with an initial undefined value
export const userStore = writable<WebAppUser | undefined>(undefined);