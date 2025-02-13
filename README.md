# GitHub Issues Explorer with GraphQL

## Setup

1. Create a GitHub Personal Access Token:

   - Go to GitHub Settings > Developer Settings > Personal Access Tokens > Tokens (classic)
   - Generate a new token with `repo` scope
   - Copy the token

2. Create a `.env` file in the root directory and add your token:

   ```
   VITE_GITHUB_TOKEN=<your_token>
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`
