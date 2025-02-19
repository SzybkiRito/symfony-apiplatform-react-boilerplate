# Web app boilerplate using Symfony with API Platform as backend and React as frontend
This is a boilerplate code for a web application using Symfony as backend and React as frontend. The backend is built using API Platform and the frontend is built using React. The backend and frontend are separate applications and they communicate using REST API. Mostly created to be used as a starting point for a new project. Feel free to use it as you like.
It's worth to notice that frontend is using [tailwind](https://tailwindcss.com/). Components are mostly created using [shadcn](https://ui.shadcn.com/).

## Requirements
- PHP 8.2
- Composer
- Symfony CLI
- Node.js (created on v20.13.0)
- Docker

## Backend setup
1. Clone the repository
2. Enter to the cloned repository `cd symfony-apiplatform-react-boilerplate`
3. Enter to the backend directory `cd server` and run ``cp .env.example .env``
4. Edit connection string in `.env` file in the backend directory
5. Run docker-compose `docker compose up`
6. Install all of dependencies `composer install`
7. Run migrations `php bin/console doctrine:migrations:migrate`
8. Generate certificates for JWT `php bin/console lexik:jwt:generate-keypair`
9. Run the backend server `symfony serve`
10. Run database fixtures `php bin/console doctrine:fixtures:load --append` (Removing the `--append` flag will remove all data from the database)

## Frontend setup
1. Enter to the frontend directory `cd client` and run `npm install`
2. Run the frontend server `npm run dev`
3. You can edit the backend URL in `src/lib/api.ts`

## API Documentation
All of the routes are documented using Swagger. You can access the documentation by visiting `http://127.0.0.1:8000/api/docs`

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
