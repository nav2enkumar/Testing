// Method 1: Using an external API
async function getPublicIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching public IP:', error);
    return null;
  }
}

// Method 2: Alternative API option
async function getPublicIPAlternative() {
  try {
    const response = await fetch('https://api.myip.com');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching public IP:', error);
    return null;
  }
}

// Example usage
async function displayPublicIP() {
  const ip = await getPublicIP();
  if (ip) {
    console.log('Public IP Address:', ip);
  }
}

// Call the function
displayPublicIP();