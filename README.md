# react-redux-cart

ReduxCart is a simple React application that demonstrates the use of Redux for state management. This application allows users to view a list of products and add them to a shopping cart. It also includes features for fetching and sending cart data to a server and displaying notifications.

## Getting Started

To run ReduxCart locally, follow these steps:

1. Clone the repository to your local machine:
git clone https://github.com/SarahKatherineFrancis/react-redux-cart.git

2. Navigate to the project directory: 
cd react-redux-cart

3. Install the required dependencies using npm:
npm install

4. Start the development server:
npm start

## Application Structure
ReduxCart is organized into several components and Redux slices for managing state. Here's a brief overview of the main parts of the application:

### Components

1. App: The main application component that serves as the entry point. It wraps the entire application and includes the Redux Provider.
2. Cart: Displays the items in the shopping cart. It uses Redux to fetch cart data and render cart items.
3. CartButton: A button in the header that allows users to toggle the visibility of the shopping cart. It uses Redux to manage cart visibility.
4. CartItem: Represents an individual item in the shopping cart. Users can increment or decrement the quantity of items in the cart.
5. Layout: A higher-order component that defines the overall layout structure of the application.
6. MainHeader: The application's header, including the title and the CartButton component.
7. ProductItem: Represents an individual product that users can add to the shopping cart.
8. Products: Displays a list of products available for purchase.
9. Notification: A component for displaying success or error notifications.

### Redux Slices

1. ui-slice: Manages UI-related state, including cart visibility and notifications.
2. cart-slice: Manages shopping cart-related state, including cart items and quantities.

### Redux Store

The Redux store is configured in the store/index.js file, combining the reducers from the ui-slice and cart-slice.

## State Management

Redux is used for state management in ReduxCart. The application demonstrates how to use Redux to manage global state for features like the shopping cart, cart visibility, and notifications.

## Fetching and Sending Data

ReduxCart includes functionality to fetch initial cart data from a server when the application loads and send updated cart data to the server when the cart changes. This is achieved using asynchronous Redux actions defined in cart-actions.js. The server URLs are hardcoded in the actions and can be customized to point to your backend server.

## Feedback and Contributions

Feel free to explore, modify, and enhance ReduxCart as needed. If you have any feedback or would like to contribute to the project, please create an issue or submit a pull request.

Happy coding!
