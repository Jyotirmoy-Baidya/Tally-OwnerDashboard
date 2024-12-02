// Return month name when month number is input 
export function getMonthName(monthNumber: number): string {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Ensure the month number is valid
    if (monthNumber < 1 || monthNumber > 12) {
        return 'XX';
    }

    // Return the month name
    return months[monthNumber - 1];
}


//Extract the month from the date give in the format mm-yyyy
export function extractMonthNumber(dateString: string): [number, string] {
    // Split the string by the dash
    const [month, year] = dateString.split("-");

    // Parse the month as a number
    const monthNumber = parseInt(month, 10);

    // Ensure the month is valid
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        return [0, year];
    }

    return [monthNumber, year];
}