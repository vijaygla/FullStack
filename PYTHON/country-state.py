import json

import json 
with open("country-state.json") as file:
    countries = json.load(file)


# Iterate the properties of states
# Task 1
for country in countries:
    print(country["name"])
    for num,state in enumerate(country["states"]):
        print(num+1,".")
        print("     State id: ", state["id"])
        print("     State name: ", state["name"])
        print("     State State Code: ", state["state_code"])
        print("     State Latitude: ", state["latitude"])
        print("     State Longitude: ", state["longitude"])


# Task 2
for country in countries:
    print("Country: ", country["name"])
    for key , value in country ["translations".countries()]:
        print(key , value)
        print("\n")


# Task 3

while index < len()