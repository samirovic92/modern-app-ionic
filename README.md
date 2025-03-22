# Movie App

This project is a Movie App built with Angular & Ionic. It fetches data from The Movie Database (TMDb) API to display top-rated movies and movie details.

## Technologies Used

- **Angular**
- **Ionic**
- **TypeScript**
- **NPM**

## Project Structure

- `src/app/services/movie.service.ts`: Contains the `MovieService` which handles API calls to TMDb.
- `src/environments/environment.ts`: Contains environment-specific configurations for development.
- `src/environments/environment.prod.ts`: Contains environment-specific configurations for production.

## Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd <repository-directory>
 ``` 
   
2. **Install dependencies:**  
```bash
npm install
```
3. **Run the application:**  
```bash
ng serve
```

4. **Build the application:**  
```bash  
ng build
```
 
5. **Environment Configuration:**
The API key is configured in the environment files:  
- **Development:** src/environments/environment.ts
- **Production:** src/environments/environment.prod.ts
