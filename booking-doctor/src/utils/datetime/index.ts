/**
 * Check if a given datetime has expired (is in the past)
 * @param dateTime - The datetime to check (can be Date object, timestamp, or date string)
 * @returns boolean - True if expired, false if not expired
 */
export const checkTimeIsExpired = (dateTime: Date | number | string): boolean => {
    // Convert input to Date object
    const targetDate = new Date(dateTime);

    // Get current time
    const currentDate = new Date();

    // Compare target date with current date
    // Returns true if target date is in the past
    return targetDate.getTime() < currentDate.getTime();
};
