// src/utils/dateUtils.ts

/**
 * Formats a date string or Date object into a specified format.
 * @param date - The date to format (string or Date object)
 * @param format - The desired format (default: 'MMMM d, yyyy')
 * @returns Formatted date string
 */
export function formatDate(date: string | Date, format: string = 'MMMM d, yyyy'): string {
    const d = new Date(date);

    if (isNaN(d.getTime())) {
        console.error('Invalid date provided to formatDate');
        return 'Invalid Date';
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const formatTokens: { [key: string]: () => string } = {
        yyyy: () => d.getFullYear().toString(),
        yy: () => d.getFullYear().toString().slice(-2),
        MMMM: () => months[d.getMonth()],
        MMM: () => months[d.getMonth()].slice(0, 3),
        MM: () => (d.getMonth() + 1).toString().padStart(2, '0'),
        M: () => (d.getMonth() + 1).toString(),
        dd: () => d.getDate().toString().padStart(2, '0'),
        d: () => d.getDate().toString(),
        EEEE: () => days[d.getDay()],
        EEE: () => days[d.getDay()].slice(0, 3),
        HH: () => d.getHours().toString().padStart(2, '0'),
        H: () => d.getHours().toString(),
        hh: () => (d.getHours() % 12 || 12).toString().padStart(2, '0'),
        h: () => (d.getHours() % 12 || 12).toString(),
        mm: () => d.getMinutes().toString().padStart(2, '0'),
        m: () => d.getMinutes().toString(),
        ss: () => d.getSeconds().toString().padStart(2, '0'),
        s: () => d.getSeconds().toString(),
        a: () => d.getHours() < 12 ? 'am' : 'pm',
        A: () => d.getHours() < 12 ? 'AM' : 'PM',
    };

    return format.replace(/yyyy|yy|MMMM|MMM|MM|M|dd|d|EEEE|EEE|HH|H|hh|h|mm|m|ss|s|a|A/g, match => formatTokens[match]());
}

// Usage examples:
// console.log(formatDate('2024-09-17T12:30:17.765Z')); // Output: September 17, 2024
// console.log(formatDate('2024-09-17T12:30:17.765Z', 'MMM d, yyyy')); // Output: Sep 17, 2024
// console.log(formatDate('2024-09-17T12:30:17.765Z', 'yyyy-MM-dd HH:mm:ss')); // Output: 2024-09-17 12:30:17