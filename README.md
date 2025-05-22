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

## Technical Architecture

### Backend Architecture
The backend of this project is built using Express, a minimal and flexible Node.js web application framework. It uses body-parser middleware to parse incoming request bodies in a middleware before your handlers, available under the `req.body` property.

The backend also uses Mongoose, an elegant MongoDB object modeling for Node.js, to interact with a MongoDB database. The database connection is configured in `backend/config/database.js`, and the tenant schema and model are defined in `backend/models/tenant.js`. CRUD operations for tenants are provided in `backend/routes/tenants.js`.

### Frontend Architecture
The frontend of this project is built using HTML, CSS, and JavaScript. The main HTML file is `frontend/index.html`, which contains a form for tenant creation. The form submission is handled by `frontend/js/app.js`, which sends the tenant data to the backend.

### Directory Structure
- `backend/`: Contains the backend code.
  - `app.js`: Sets up the Express server.
  - `config/`: Contains configuration files.
    - `database.js`: Configures the MongoDB connection.
  - `models/`: Contains Mongoose schemas and models.
    - `tenant.js`: Defines the tenant schema and model.
  - `routes/`: Contains route handlers.
    - `tenants.js`: Provides CRUD operations for tenants.
- `frontend/`: Contains the frontend code.
  - `index.html`: The main HTML file.
  - `css/`: Contains CSS files.
    - `styles.css`: The main CSS file.
  - `js/`: Contains JavaScript files.
    - `app.js`: Handles form submission and sends tenant data to the backend.
