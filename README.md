# aitest

## Description
This project is a multi-tenant SAAS system management backend. It allows for the management of multiple tenants, each with their own data and settings.

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/sudischotmail/aitest.git
   ```
2. Navigate to the project directory:
   ```
   cd aitest
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables to the `.env` file:
     ```
     MONGODB_URI=<your_mongodb_uri>
     PORT=<your_port>
     ```

## Deployment Instructions
1. Build the project:
   ```
   npm run build
   ```
2. Start the server:
   ```
   npm start
   ```

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```
   git commit -m "Description of your changes"
   ```
4. Push to the branch:
   ```
   git push origin feature-branch
   ```
5. Create a pull request.
