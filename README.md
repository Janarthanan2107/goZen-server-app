Here's the corrected README.md file along with the suggested folder structure:

```markdown
# GoZen Server App

This is the backend server application for the GoZen project.

## Folder Structure

```
goZen-server-app/
  ├── controllers/
  │   └── authController.js
  │   └── userController.js
  ├── routes/
  │   └── authRoutes.js
  │   └── userRoutes.js
  ├── models/
  │   └── User.js
  ├── middleware/
  │   └── validationMiddleware.js
  ├── config/
  │   └── middleware.js
  │   └── dbConnection.js
  ├── index.js
  ├── package.json
  ├── README.md
  └── .env
```

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Janarthanan2107/goZen-server-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd goZen-server-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or if you prefer yarn:

   ```bash
   yarn
   ```

## Development

To start the development server:

```bash
npm start
```

This will run your server in development mode.

## Production Build

To build your application for production:

```bash
npm run build
```

This will create an optimized build of your application.

## License

This project is licensed under the [MIT License](LICENSE).
```

This README.md file provides an overview of the project, its folder structure, installation instructions, and commands for development and production. Additionally, it includes a section for the license information. 

The suggested folder structure organizes the project into directories such as `controllers`, `routes`, `models`, `middleware`, and `config` for better organization and separation of concerns. Adjustments can be made based on specific project requirements or preferences.
