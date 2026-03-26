import re

file_path = r'C:\Users\FC SHOP\Documents\New folder\images\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

output = []
skip = False
skip_count = 0

for i, line in enumerate(lines):
    if '<!-- INDUSTRIES WE SERVE -->' in line:
        skip = True
        skip_count = 0
    
    if skip:
        skip_count += 1
        if '</section>' in line and skip_count > 5:
            skip = False
        continue
    
    if line.strip() == '<!-- CASE STUDIES -->':
        skip = True
        skip_count = 0
        continue
    
    if skip:
        skip_count += 1
        if '</section>' in line:
            skip = False
        continue
        
    output.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(output)

print("Done!")
