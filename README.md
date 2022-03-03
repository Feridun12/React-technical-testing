### React Technical Test NASA API Image Search App

This React web application allows to search for images from NASA's image database, based on a query related to space. The application uses third-party NASA API to function.

The users can search for anything space related like "Sun", "Moon" and "Mars". After clicking the search button, the search results will be displayed in a masonry-style grid on desktop. In mobile, search results are positioned in a single line to prevent users from zooming in for every picture and create a more user friendly experience overall.

During the development process, the app was fully tested using Jest and React Testing Library to write unit tests, following Test-Driven Development (TDD) methodology.

## Screenshots


## Technologies 

- React
- Jest
- React testing library
- Third-party NASA API

## Other packages used

- Axios
- Proptypes


## Instructions to run app locally 

You can either view the live site by [clicking here](https://sad-curran-82905e.netlify.app/) or to run it locally:

1. Clone this repository into your terminal:

```bash git clone git@github.com:Feridun12/React-technical-testing.git```

2. Change directory into the newly created folder and install the project dependencies:

```bash cd tech-test``` 
```bash npm install```

3. Start the react app:

```bash npm start```

A browser window should automatically open with a live version of the app. If this does not happen, navigate to a new browser window and type ```bash http://localhost:3000/``` into the address bar.

## Additional features for future development

1. The images could be programmed to open on another tab displaying the image and a brief description provided by the NASA API.

2. Search button activation when the user presses enter key on the keyboard.

3. Error message when a user enters a invalid query.

4. Improve the loading experience by implementing a loading screen/spinning icon whilst all images are being retrieved from the API and loaded, to avoid jerky loading as at present.

## Contact 

Created by [Feridun12](https://www.linkedin.com/in/feridun-canselen-73666b200/). - Feel free to contact me about the project.



