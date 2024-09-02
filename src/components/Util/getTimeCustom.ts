import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
export function getRelativeTime(dateString:any) {
    const postDate = dayjs(dateString);
    const now = dayjs();
    const diffInDays = now.diff(postDate, 'day');
    
    if (diffInDays < 1) {
      return postDate.fromNow(); // "x hours ago"
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else if (diffInDays < 30) {
      return `${Math.floor(diffInDays / 7)} weeks ago`;
    } else if (diffInDays < 365) {
      return `${Math.floor(diffInDays / 30)} months ago`;
    } else {
      return `${Math.floor(diffInDays / 365)} years ago`;
    }
  }
  