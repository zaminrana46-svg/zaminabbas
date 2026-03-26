import re

file_path = r'C:\Users\FC SHOP\Documents\New folder\images\index.html'

# Read the file
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove Industries section
content = re.sub(r'\s*<!-- INDUSTRIES WE SERVE -->.*?</section>\s*', '\n\n    ', content, flags=re.DOTALL)

# Remove Case Studies section  
content = re.sub(r'\s*<!-- CASE STUDIES -->.*?</section>\s*', '\n\n    ', content, flags=re.DOTALL)

# Write the file back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Industries and Case Studies sections removed successfully!")
