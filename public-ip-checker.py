import requests

def get_public_ip():
    try:
        # Method 1: Using ipify
        response = requests.get('https://api.ipify.org?format=json')
        return response.json()['ip']
    except requests.RequestException:
        try:
            # Method 2: Alternative API
            response = requests.get('https://api.myip.com')
            return response.json()['ip']
        except requests.RequestException:
            print("Failed to retrieve public IP")
            return None

# Example usage
public_ip = get_public_ip()
if public_ip:
    print(f"Public IP Address: {public_ip}")