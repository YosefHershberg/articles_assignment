# Articles Assignment

This is a React.js application that fetches news articles from the Article API ([newsapi.org](https://newsapi.org/)). The app utilizes local storage to store fetched articles and provides offline access to previously fetched data. It is built Styled Components, and Material-UI for building the user interface.

## Features

- Fetches news articles from the Article API and saves them in local storage.
- Provides offline access to previously fetched articles when there is no internet connection.
- Refresh button to manually trigger a network check and fetch new articles if connected.
- Responsive and visually appealing user interface built with Styled Components and Material-UI.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YosefHershberg/articles_assignment.git
```

2. Navigate to the project directory:

```bash
cd articles_assignment
```

3. Install the dependencies:

```bash
npm install
```

## Configuration

1. Obtain an API key from [newsapi.org](https://newsapi.org/).

2. Create a `.env` file in the root of your project.

3. Add your API key to the `.env` file:

```plaintext
REACT_APP_API_KEY=your-api-key
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and visit the required local-host

3. The app will automatically fetch articles from the API and store them in local storage.

4. Use the refresh button to fetch new articles if you have an internet connection. If not, the app will load articles from the local storage.

