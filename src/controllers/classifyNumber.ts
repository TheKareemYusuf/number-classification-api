import { NextFunction, Request, Response } from "express";
import { isPrime, isPerfect, numberProperties, digitSum, funFact } from "../utils/utils";


  const classifyNumber = async ( req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { number } = req.params;
    const num = parseFloat(number);
    if (isNaN(num) || !Number.isInteger(num)) {
      res.status(400).json({ error: true, number });
      return;
    }

    const is_prime = isPrime(num);
    const is_perfect = isPerfect(num);
    const properties = numberProperties(num);
    const digit_sum = digitSum(num);
    const fun_fact = await funFact(num, next);

    
    res
      .status(200)
      .json({
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
