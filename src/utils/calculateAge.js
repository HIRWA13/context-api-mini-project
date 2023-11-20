export const calculateAge = (day, month, year) => {

    const today = 31;
    const currentYear = new Date().getFullYear();

    const ageYears = currentYear - parseInt(year);
    const ageMonths = new Date().getMonth() - parseInt(month);
    const ageDays = today - parseInt(day);
    
    console.log(today)
    return {ageDays, ageMonths, ageYears}
}

console.log(calculateAge(8, 10, 1998))