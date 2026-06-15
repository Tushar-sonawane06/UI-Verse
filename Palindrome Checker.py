# A function that checks if a string reads the same backward
def is_palindrome(text):
    cleaned_text = text.lower()
    return cleaned_text == cleaned_text[::-1]

print(is_palindrome("racecar"))  # Outputs: True
print(is_palindrome("hello"))    # Outputs: False
