<!-- To run the markdown file use the command vim filename or nano file name -->

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6



**Bold**

*Italic*

***Bold Italic***

-------UnOrder List------
- list item 
    - item 1
    - item 2
- list item 
    - item 1
    - item 2


-------Order List -------
1. List Item 1
2. List Item 2 
    - List Item 1 
    - List Item 2
3. List Item 3
4. List Item 4


# CSE 
1. Section H
    - Student 1
    - Student 2

2. Section V
    - Student 3
    - Student 4

- Notes - Gla Student are advance .




| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Row 1    | Row 1    |
| Row 2    | Row 2    | Row 2    |
| Row 3    | Row 3    | Row 3    |




## Tip To remember 
- Element 
- Tag -> openning and closing tag 
- Attribute 
    - Madatory attribiute 
    - optional attributes
- Whenever we opening the tag we need to close 



## ***Table Tag***
1. <u>table</u> - Which is use to make the table in html
2. tr - Which is use to make the row of table 
3. th - which is use to fill the heading of table
4. caption - tittle of table is given using this
5. td - Which is use o insert the data into the table 
6. rowspan - use to merge the row 
7. colspan - use to merge column 
8. sub - use to write in subscript 
9. sup - use to write the super script 


# **CSS**->Cascading Style sheet
- Some important Properties and their value which can apply on any selector 
    - text-align: center;
    - text-decoration: underline;
    - text-transform: capitalize;
    - height: 100px;
    - text-align: center;
    - width: 10px;
    - background-color: violet;
    - color: green;
    - border-width: 5px;
    - border-color: turquoise;
    - border-style: solid;
    - line-height: 100px;
    - color: red;
    - background-color: blue;
    - border-width: 100px;
    - text-decoration: red underline;
    - text-transform: uppercase;
    - font-weight: 900;
    - text-align: center;
    - text-align: start;
    - font-size:10px;

- Selector 
    - Id selector 
    - class selector 
    - tag selector 
    

# Responsive Website

![Resize the screen](./screeshot/s1.png "Working with Responsive Website")

This is my first line of code in the sample file.

Line 2 of code 
<<<<<<< HEAD
line 3 of code 






# **JS** --> Java Script


## Naming Coverntion 
- hyphen-case 
    - url
    - 
- camelCase 
- snake_case 
- pascalcase
- lowercase 
- Uppercase




# JSON

- "" -> String -> "Name" : "John"

- [] -> Array -> 
"name" : ["Vijay" , "john"]

- {} -> object -> "name" : {"Vijay", "John", "lam"}

- , -> Separator -> "name" : "Vijay" , "age" : 20

- : -> key-Value -> "Name" : "john"

### Truthy 
- Open Link to know more:
[(https://developer.mozilla.org/en-US/docs/Glossary/Truthy)]

- some value which return **truthy**
    - if (true)
    - if ({})
    - if ([])
    - if (42)
    - if ("0")
    - if ("false")
    - if (new Date())
    - if (-42)
    - if (12n)
    - if (3.14)
    - if (-3.14)
    - if (Infinity)
    - if (-Infinity)


## To take input as image
- <label for="profile_pic">Profile Picture</label>
- <input type="file" id="profile_pic" name="profile_pic" accept="image/*">





# **React JS**

- Why React is introduce ?
    - React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time.
    - React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.



## Error in React

## Error in React
- [plugin:vite:import-analysis] Failed to resolve import "./App.jsx" from "src/main.jsx". Does the file exist?
    - Failed to resolve import “./App.jsx” and “./Sample.jsx”:



- [plugin:vite:import-analysis] Failed to resolve import "./Sample.jsx" from "src/main.jsx". Does the file exist?
 <u>class Name</u>: Strict Mode
    - Ensure that the files App.jsx and Sample.jsx exist in the src directory.
    - Check for any typos in the file names or import statements.

- [plugin:vite:react-babel] D:\GLA\REACT_JS\src\main.jsx: Unterminated JSX contents. (9:15)
    - This error usually occurs when there is an unclosed JSX tag. Double-check your JSX code in main.jsx around line 9 to ensure all tags are properly closed.

- [plugin:vite:react-babel] D:\GLA\REACT_JS\src\main.jsx: Unexpected token (10:0)
    - This error might be related to the unterminated JSX contents. Fixing the JSX syntax error should resolve this issue as well.




## React Basic Error with initial file
- Import Resolution Errors:
    - The system is unable to resolve the imports for ./App.jsx and ./Sample.jsx from src/main.jsx. This usually means that the files App.jsx and Sample.jsx might not exist in the specified path.
- Strict Mode Class Name:
    - There’s a mention of “Strict Mode” in your class name, but it doesn’t seem to be directly related to the errors.
- JSX Syntax Errors:
    - There are syntax errors in your main.jsx file:
- Unterminated JSX contents at line 9, column 15.
- Unexpected token at line 10, column 0.



- # case 1

1. Export default with any name and default import any name -> No error
25
2. Export named with any name and named import any name -> Error
26
3. In a file, only one default export is possible, same only one default import is possible
27
28
4. In a file, multiple named exports are possible, same multiple named imports are possible 5. named export two ways:

    a. export const XXXX = () => {}
    b. const XXXX = () => {}; export { XXXX }


# Functional Component VS Normal Function 

|Functional Component   |  Normal Function  |
|-----------------------|-------------------|
|
|
|
|
|
|


**Destructurnig**
- in js null but same in python called None 
- object -> Dictionary 
- array -> list , tupple , set
- tupple is Imutable 


----------------------------------------

# FLASK
1. Run and Install
    - mkdir myproject
    - cd myproject
    - py -3 -m venv .venv
    - .venv\Scripts\activate
    - pip install Flask
    - flask --app fileName.extention run --debug
2. To again run after delete terminal
    - .venv\Scripts\activate
    - flask --app fileName.extention run --debug

# Flask set up 
> mkdir myproject
> cd myproject
> py -3 -m venv .venv

> .venv\Scripts\activate
$ pip install Flask



3. Installation of Mongo db 
    - pip install pymongo
    - pip freeze >requirement.txt
    - flask --app fileName.extention run


