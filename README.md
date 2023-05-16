##Articles Assignment
This is a React.js application created with Vite that fetches data from the Article API provided by NewsAPI. The application utilizes local storage to store fetched articles and implements a network connection check to determine whether to fetch data from the API or from the local storage.

#Features
Fetches articles from the Article API and saves them in local storage
Checks network connection status on page refresh or when the "Refresh" button is clicked
If network connection is available, fetches articles from the API; otherwise, fetches articles from local storage

#Installation
Clone the repository: git clone https://github.com/your-username/your-repo.git
Navigate to the project directory: cd your-repo
Install dependencies: npm install

#Configuration
Before running the application, make sure to obtain an API key from NewsAPI by signing up for a free account.
Once you have the API key, create a .env file in the project root and add the following line:
VITE_API_KEY=your-api-key
Replace your-api-key with your actual NewsAPI API key.

#Usage
To start the development server, run the following command:

npm run dev
