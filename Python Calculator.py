# Basic terminal calculator implementation
def calculator():
    try:
        n1 = float(input("First number: "))
        op = input("Operator (+, -, *, /): ")
        n2 = float(input("Second number: "))
        if op == '+': print(n1 + n2)
        elif op == '-': print(n1 - n2)
        elif op == '*': print(n1 * n2)
        elif op == '/': print(n1 / n2 if n2 != 0 else "Error")
    except ValueError: print("Invalid input.")

calculator()
