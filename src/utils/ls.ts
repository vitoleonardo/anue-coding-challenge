import { toast } from 'react-toastify';

interface Alert {
  state: 'success' | 'error' | 'info' | 'warning'; // Assuming these are the possible states
  note: string;
}

export const handleSetLSItem = (itemName: string, content: string) => {
  localStorage.setItem(itemName, content);
  notify({ state: 'success', note: 'Successfully set item' });
};

export const handleRemoveLSItem = (itemName: string) => {
  localStorage.removeItem(itemName);
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
