import csv

# Open the CSV file
with open('example.csv', 'r') as file:
    reader = csv.reader(file)
    
    # Iterate over each row in the CSV file
    for row in reader:
        print(row)

