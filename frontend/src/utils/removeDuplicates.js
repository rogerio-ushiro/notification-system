export default function removeDuplicates(arr) {
    return arr.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === arr.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        });
    });
}