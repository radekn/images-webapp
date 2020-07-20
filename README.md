# Image search web app

## Building and running
In order to start the application in development mode:

1. Install dependencies with `yarn` (or `npm install`).
2. To start the backend:
    1. First ensure that these environment variables are set:
        - `GIPHY_API_KEY`
        - `PIXABAY_API_KEY`
    2. Optionally, you can also set `HOST` and `PORT` - by default, backend binds to `localhost:8000`.
    3. Run `yarn start` (or `npm start`).
3. To start the frontend:
    1. Optionally, set `API_URL` environment variable to the backend base URL. The default value is `http://localhost:8000`.
    2. Run `yarn frontend-dev` (or `npm run frontend-dev`) - this will run Webpack Dev Server on port `8080`.
4. Point your browser at `http://localhost:8080`.

For production mode (not that the code is in any way production-ready), the frontend application can be bundled into static files by running `yarn frontend-build` (or `npm run frontend-build`), with `API_URL` environment set to the backend base URL.
The generated bundle will be created in `dist/frontend` directory.

## Developer's comments

### Styling
I have to admit, I rarely deal with CSS directly - not that I'm opposed to it, it just happens that usually, it's somebody else's responsibility.
What I'd have done normally, is use Bootstrap framework, customise it with variables, and try to create my own semantic classes based on mixins it provides - this would give me a reasonable baseline easy to expand upon.
However, since the task description specifically called for custom CSS, I included only styles written from scratch.
As a result, the styling is very rudimentary, and might not be consistent across browsers - I'd definitely say it's the weakest part.

### Build
Many parts of the build setup could use improvement.
Currently, React and other external libraries are bundled together with application code - it would be good to at least split them off into a separate bundle, or alternatively, load them from CDN, with local fallback.

### Project structure
In a real project, it might make sense to have separate NPM packages for frontend and backend, but that would complicate sharing code (especially types) between the two, so for simplicity, I went with a single package.

### Other potential improvements
- error handling is not consistent
- some loading indicator, when the results are being fetched, would be nice
- responsive images for thumbnails, with resolution depending on screen size
