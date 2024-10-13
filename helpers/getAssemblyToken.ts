export async function getAssemblyToken(): Promise<string | undefined> {
  try {
    const response = await fetch('/api/assemblyToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    
    if (!response.ok) {
      throw new Error(`Failed to fetch token: ${response.statusText}`);
    }

    const responseBody = await response.json();

    
    if (!responseBody.token) {
      throw new Error('Token is missing in the response body');
    }

    return responseBody.token;

  } catch (error) {
    console.error('Error fetching Assembly token:', error);
    return undefined;  
  }
}
