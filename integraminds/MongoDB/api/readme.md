# Some guideline for better coding practice
1. create a root folder `project` in a root directory c or d drive
2. pin a favourite section 
3. create a new folder for a project with minimal later 
preferbly 3 to 5 character with all lower case 
4. pin the current/frequently working project in the favorite section `root folder` 


# Start the working of backend for project
1. mkdir api
2. cd api
3. python3 -m venv .venv
4. .venv\Scripts\activate

# Package for install 
5. pip install Flask 
6. pip install Flask-RESTful
7. pip install Flask-Cors
8. pip install pymongo

# write the requirement of project 
9. pip freeze >requirement.txt

# read and install from reaquirement.txt
10. pip install -r requirement.txt

# Go to flask-restful documnetation 
https://flask-restful.readthedocs.io/en/latest/quickstart.html#a-minimal-api

# 
1. Take a minimal sample code 
2. create a file called api.py and copy the minimal code into api.py 
3. run the file 
    - flask --app api run --host=0.0.0.0 --debug
    - download the extention rest client 
    - set the local host url into a new file main.http
    - write this in main.http file
        - @host=http://127.0.0.1:5000
        - GET {{host}}/
    - click on send request 