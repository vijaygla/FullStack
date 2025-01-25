import json

# Step 3: Read the resume.json file  and print all the data in resume file 
with open('resume.json') as file:
    resume = json.load(file)
    for key, value in resume.items():
        print(key, value,"\n")
        print("\n")

# # Step 4: Function to recursively print all keys and values
# def print_json(data, index=0):
#     for key, value in data.items():
#         print(' ' * index + f"{key}: ", end="")
#         if isinstance(value, dict):
#             print()
#             print_json(value, index + 2)
#         elif isinstance(value, list):
#             print()
#             for item in value:
#                 if isinstance(item, dict):
#                     print_json(item, index + 2)
#                 else:
#                     print(' ' * (index + 2) + str(item))
#         else:
#             print(value)

# # Print the entire resume data
# print_json(resume)



# Task 6:  Create a function and move this code innside the function and call for 5 times using loop 

def read_resume():
    with open("resume.json") as file:
        resume = json.load(file)
        for key, value in resume.items():
            print(key, value)

for i in range(5):
    read_resume()


print("\n")
variable = print()
print("Print Return:",variable)
print("Resume file types:",type(resume))