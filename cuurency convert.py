import requests

def get_exchange_rate(base_currency, target_currency):
    # Using a free, public exchange rate API
    url = f"https://er-api.com{base_currency.upper()}"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_status == 200 or data.get("result") == "success":
            rates = data.get("rates", {})
            return rates.get(target_currency.upper())
        else:
            print("Error: Unable to fetch rates for that currency.")
            return None
    except Exception as e:
        print(f"Network error: {e}")
        return None

def main():
    print("--- Real-Time Currency Converter ---")
    base = input("Enter base currency (e.g., USD, EUR, GBP): ").strip().upper()
    target = input("Enter target currency (e.g., INR, CAD, JPY): ").strip().upper()
    
    try:
        amount = float(input(f"Enter amount in {base}: "))
        rate = get_exchange_rate(base, target)
        
        if rate:
            converted_amount = amount * rate
            print(f"\n{amount} {base} = {converted_amount:.2f} {target} (Rate: {rate})")
    except ValueError:
        print("Please enter a valid numeric value for the amount.")

if __name__ == "__main__":
    main()
