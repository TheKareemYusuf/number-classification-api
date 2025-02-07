# Number Classification API

A RESTful API that provides interesting mathematical properties and fun facts about numbers. This API analyzes numbers for various properties including primality, perfectness, Armstrong numbers, and provides fun mathematical facts.

## Features

- Number classification and analysis
- Mathematical properties detection
- Fun facts about numbers
- Cross-Origin Resource Sharing (CORS) enabled
- JSON response format
- Input validation and error handling

## Tech Stack

- Node.js
- TypeScript
- Express.js

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/TheKareemYusuf/number-classification-api.git
cd number-classification-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
NUMBERS_API_URL=http://numbersapi.com/
NUMBERS_API_TYPE=math
```


4. Build the project:
```bash
npm run build
```

5. Start the server:
```bash
npm start
```

## API Documentation

### Classify Number

Returns mathematical properties and fun facts about a given number.

- **URL**: `/api/classify-number`
- **Method**: `GET`
- **URL Query Parameters**: 
  - `number=[integer]` (required)

#### Success Response

- **Code**: 200 OK
- **Content Example**:
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### Error Response

- **Code**: 400 BAD REQUEST
- **Content Example**:
```json
{
    "number": "abc",
    "error": true
}
```

### Property Definitions

- **Prime Number**: A number that has exactly two factors: 1 and itself
- **Perfect Number**: A number that is equal to the sum of its proper divisors
- **Armstrong Number**: A number that is the sum of its own digits each raised to the power of the number of digits
- **Digit Sum**: The sum of all digits in the number
- **Properties Array**: Can contain combinations of ["armstrong", "odd"] or ["armstrong", "even"] or ["odd"] or ["even"]

## Response Time

The API is optimized to respond within 500ms for all valid requests.

## Error Handling

- Invalid input types return a 400 Bad Request
- Server errors return appropriate 5xx status codes
- All errors return JSON formatted responses

## Development

1. Run in development mode:
```bash
npm run dev
```

2. Run tests:
```bash
npm test
```

3. Lint code:
```bash
npm run lint
```

## Deployment

The API can be deployed to any Node.js hosting platform. Some recommended options:
- Heroku
- DigitalOcean
- Render



## Acknowledgments

- [Numbers API](http://numbersapi.com) for providing mathematical fun facts
