import random
import string

def generate_password(length=12):
    if length < 4:
        print("Password length should be at least 4 characters.")
        return None

    # Define character sets
    lowercase = string.ascii_lowercase
    uppercase = string.ascii_uppercase
    digits = string.digits
    symbols = string.punctuation

    # Ensure the password contains at least one character from each set
    password = [
        random.choice(lowercase),
        random.choice(uppercase),
        random.choice(digits),
        random.choice(symbols)
    ]

    # Fill the remaining length with a random mix of all characters
    all_characters = lowercase + uppercase + digits + symbols
    password += [random.choice(all_characters) for _ in range(length - 4)]

    # Shuffle the characters to ensure randomness
    random.shuffle(password)

    # Convert the list back into a string
    return "".join(password)

# Main program execution
if __name__ == "__main__":
    print("--- Secure Password Generator ---")
    try:
        user_length = int(input("Enter desired password length: "))
        generated_pass = generate_password(user_length)
        if generated_pass:
            print(f"Your generated password is: {generated_pass}")
    except ValueError:
        print("Please enter a valid numeric integer.")
