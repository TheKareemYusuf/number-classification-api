import axios from 'axios';
import AppError from './appError';
import { NextFunction } from 'express';
import { CONFIG } from '../config/config';

export const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}; 

export const isPerfect = (num: number): boolean => {
    if (num < 2) return false;
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num;
};

export const numberProperties = (num: number): string[] => {
    const isArmstrong = (n: number): boolean => {
        const digits = n.toString().split('').map(Number);
        const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0);
        return sum === n;
    };

    const result: string[] = [];
    if (isArmstrong(num)) {
        result.push("armstrong");
    }
    result.push(num % 2 === 0 ? "even" : "odd");
    return result;
};

export const digitSum = (num: number): number => {
    return num
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc + digit, 0);
};


export const funFact = async (num: number, next: NextFunction): Promise<void> => {
    try {
        const response = await axios.get(`${CONFIG.NUMBERS_API_URL}${num}/`);
        // console.log(response.data);
        return response.data;


    } catch (error) {
        console.error('Error fetching fun fact:', error);
        return next(new AppError('Could not fetch fun fact', 500));
    }
};