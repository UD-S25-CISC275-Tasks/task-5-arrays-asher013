/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let bookEnd: number[] = [];
    if (numbers.length === 0) {
        return bookEnd;
    }
    if (numbers.length === 1) {
        bookEnd.push(numbers[0]);
        bookEnd.push(numbers[0]);
        return bookEnd;
    }
    bookEnd.push(numbers[0]);
    bookEnd.push(numbers[numbers.length - 1]);
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let triples: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        triples.push(numbers[i] * 3);
    }
    return triples;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let ints: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        let convert = parseInt(numbers[i]);
        if (!isNaN(convert)) {
            ints.push(convert);
        } else {
            ints.push(0);
        }
    }
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let noDollars = amounts.map((amount: string): number =>
        amount.includes("$") ? parseInt(amount.slice(1)) : parseInt(amount),
    );
    let ints = noDollars.map((amount: number): number =>
        isNaN(amount) ? 0 : amount,
    );
    return ints;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let noQuestions = messages.filter(
        (message: string): boolean => !message.includes("?"),
    );
    let exclamations = noQuestions.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message,
    );
    return exclamations;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords = 0;
    for (let word of words) {
        if (word.length < 4) {
            shortWords++;
        }
    }
    return shortWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let noRGB = colors.filter(
        (color: string): boolean =>
            color !== "red" && color != "blue" && color !== "green",
    );
    if (noRGB.length > 0) {
        return false;
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let equation: string = "";
    let ints: number[] = [];
    let sum: number = 0;
    for (let num of addends) {
        sum += num;
        ints.push(num);
    }
    equation = sum.toString() + "=";
    if (ints.length === 0) {
        equation += "0";
    }
    for (let i = 0; i < ints.length; i++) {
        if (i === ints.length - 1) {
            equation += ints[i].toString();
        } else {
            equation += ints[i].toString() + "+";
        }
    }
    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let ints: number[] = [];
    let sum: number = 0;
    let previousNegative: boolean = false;
    let negativeCounter: number = 0;
    if (values.length === 0) {
        ints.push(0);
    }
    for (let i = 0; i < values.length; i++) {
        if (previousNegative) {
            ints.push(sum);
            sum = 0;
            negativeCounter++;
            previousNegative = false;
        }
        if (values[i] >= 0) {
            sum += values[i];
            ints.push(values[i]);
        } else {
            if (negativeCounter > 0 && sum === 0) {
                ints.push(values[i]);
            } else {
                ints.push(values[i]);
                previousNegative = true;
            }
        }
        if (i === values.length - 1 && negativeCounter === 0 && sum > 0) {
            ints.push(sum);
        }
    }
    return ints;
}
