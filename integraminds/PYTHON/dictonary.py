students = {
    "name": "Vijay",
    "age": 20,
    "isStudent": True,
    "hobbies": ["reading", "coding","playing"],
    "sampleTuple":(1,2,3),
    "sampleDict": {"name": "SampleName", "age":20},
    "sampleSet": {"vijay" , 1 ,202}
}


print("Student:",students)

#Accending the student name 
print("Accending Student:",students["name"])

#Accending the student age
print("Accending Student:",students["age"])


#Accending the student's hobbies and itterte and list with index
for index , hobby in enumerate(students["hobbies"]):
    print(index , hobby)

#Accending the student's Sample tuple and itterte and list with index
for index, item in enumerate(students["sampleTuple"]):
    print(index , item)


#Accending the student's Sample Set and itterte and list with index
for index, item in enumerate(students["sampleSet"]):
    print(index , item)


keys = ["name", "age", "isStudent", "hobbies", "sampleTuple", "sampleSet", "sampleDict"]

for key in keys:
    if key in students:
        print(key, students[key])
    else:
        print(f"{key} is not in students")


