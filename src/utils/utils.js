export const queries = [
    "apple", "banana", "car", "dog", "elephant", "flower", "guitar", "house", "internet", "jazz",
    "kite", "lemon", "moon", "notebook", "ocean", "pizza", "queen", "rain", "sun", "tree",
    "umbrella", "violin", "water", "xylophone", "yoga", "zebra", "airplane", "ball", "cat", "desk",
    "ear", "fire", "globe", "hat", "island", "jungle", "key", "lion", "mountain", "nest",
    "orange", "pencil", "quilt", "river", "snake", "table", "unicorn", "vase", "whale", "xylophone",
    "yacht", "zeppelin", "ant", "bee", "cookie", "donut", "elephant", "fox", "giraffe", "hippo",
    "ice cream", "jellyfish", "kangaroo", "leopard", "monkey", "narwhal", "octopus", "panda", "quokka", "rhino",
    "star", "turtle", "unicorn", "volcano", "waterfall", "x-ray", "yawn", "zebra"
];

export function zipperMerge(arr1, arr2) {
    const merged = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            merged.push(arr1[i]);
        }

        if (i < arr2.length) {
            merged.push(arr2[i]);
        }
    }
    return merged;
}

export function getRandomNumbers() {
    const randomNumber1 = Math.floor(Math.random() * 78);
    const randomNumber2 = Math.floor(Math.random() * 78);
    return [randomNumber1, randomNumber2];
}

export function getPreviousDate() {
    const date = new Date();
    date.setDate(date.getDate() - 1);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}