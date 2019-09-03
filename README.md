# typeahead-react-express

### TO RUN
Make sure you have `yarn` and `node v10.6.0+` installed.  
Run `yarn` at project root.  
Run `yarn build && yarn start`.  
Open http://localhost:3000  

### ABOUT
This project was a challenge for making a typeahead in React & Redux.  
Here are some key features of the application:  
* debounced infinite scroll for pagination
* aborts unfinished network requests during new network requests
* implements express server as a proxy
  * adapts response to only necessary data which reduces computation/memory strain on end user's computer
  * slightly reduces bundle size
* utilizes redux thunk middleware to handle async network requests
* utilizes webpack for bundling and out-of-the-box optimizations
