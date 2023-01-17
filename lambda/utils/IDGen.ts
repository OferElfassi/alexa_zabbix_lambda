export const IDGen = (length = 6, chars = 'aA#!')=> {
    let mask = '0123456789';
    let result = '';
    for (let i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result + 0;
}
