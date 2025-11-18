import json

# Open the JSON file
with open('books.json') as file:
    data = json.load(file)

# --- Fixed Section ---

# Access the information for the first book
print("--- First Book Details ---")
book1 = data['Books'][0]
print("Title:", book1['title'])
print("Author:", book1['author'])
print("Year:", book1['publicationYear'])
print("Genres:", book1['genres'])

print("\n--- All Books ---")
# Loop through all books in the list
for book in data['Books']:
    print(f"Title: {book['title']} by {book['author']}")