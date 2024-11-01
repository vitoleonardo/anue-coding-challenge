import { toast } from 'react-toastify';

interface Alert {
  state: 'success' | 'error' | 'info' | 'warning'; // Assuming these are the possible states
  note: string;
}

export const handleSetLSItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
  notify({ state: 'success', note: 'Successfully set item' });
};

export const handleGetLSItem = (key: string): string | null => {
  try {
    const item = localStorage.getItem(key);
    notify({ state: 'success', note: 'Successfully retrieved item' });
    return item;
  } catch (error) {
    console.error('Error getting item from localStorage:', error);
    notify({ state: 'error', note: 'There was an error retrieving item' });
    return null;
  }
};

export const handleRemoveLSItem = (key: string) => {
  localStorage.removeItem(key);
  notify({ state: 'success', note: 'Successfully deleted item' });
};

export const notify = (alert: Alert) => {
  if (alert) {
    const { state, note } = alert;
    if (state && note && toast[state]) {
      console.log(alert);
      toast[state](note, {
        position: 'bottom-center',
        closeOnClick: true,
      });
    } else {
      toast.error('Error displaying notification'); // Default to an error toast
    }
  }
};
