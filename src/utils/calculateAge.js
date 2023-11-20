const calculateAge = (day, month, year) => {
    const days = parseInt(day);
    const months = parseInt(month);
    const years = parseInt(year);

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    const ageYears = currentYear - years;
    const ageMonths = currentMonth - months;
    const ageDays = today.getDate() - days;

    return {ageDays, ageMonths, ageYears}
}

console.log(calculateAge(1, 1, 1990))