# Insatllation 
npm init
npm i express
npm i hbs
npm i mongose

**Important files to understand project go to rest-api-men100**
## partial 
- Just like components


## Validator in schemas
1. String
    - lowercase: boolean, whether to always call .toLowerCase() on the value
    - uppercase: boolean, whether to always call .toUpperCase() on the value
    - trim: boolean, whether to always call .trim() on the value
    - match: RegExp, creates a validator that checks if the value matches the given regular expression
    - enum: Array, creates a validator that checks if the value is in the given array.
    - minLength: Number, creates a validator that checks if the value length is not less than the given number
    - maxLength: Number, creates a validator that checks if the value length is not greater than the given number
    - populate: Object, sets default populate options
2. Number
    - min: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
    - max: Number, creates a validator that checks if the value is less than or equal to the given maximum.
    - enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.
    - populate: Object, sets default populate options
3. Date
    - min: Date, creates a validator that checks if the value is greater than or equal to the given minimum.
    - max: Date, creates a validator that checks if the value is less than or equal to the given maximum.
    - expires: Number or String, creates a TTL index with the value expressed in seconds.



# Postman 
- is an interactive and automatic tool for verifying the APIs of your project.
Postman is a Google Chrome app for interacting with HTTP APIs.
- It presents you with a friendly GUI for constructing requests and reading responses. It
works on the backend, and makes sure that each API is working as intended.


