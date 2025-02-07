import { NextFunction, Request, Response } from "express";
import { isPrime, isPerfect, numberProperties, digitSum, funFact } from "../utils/utils";

const classifyNumber = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const number = req.query.number as string;
    
    // Input validation
    if (!number) {
      res.status(400).json({ 
        number: "",
        error: true 
      });
      return;
    }

    const num = parseFloat(number);
    if (isNaN(num) || !Number.isInteger(num)) {
      res.status(400).json({ 
        number: number,
        error: true 
      });
      return;
    }

    const is_prime = isPrime(num);
    const is_perfect = isPerfect(num);
    const properties = numberProperties(num);
    const digit_sum = digitSum(num);
    const fun_fact = await funFact(num, next);

    res.status(200).json({
      number: num,
      is_prime,
      is_perfect,
      properties,
      digit_sum,
      fun_fact,
    });
  } catch (error) {
    next(error);
  }
};

export default classifyNumber;
