export function days_difference(date1, date2){
    const diffTime = Math.abs(date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export const typeTagColor = {
    Reward: 'success',
    Debt: 'warning',
    Donation: 'blue'
}