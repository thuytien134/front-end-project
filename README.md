# Welcome to my Pizza Project.
## 1. Introduction:
 On this page you can sign in (imagine you already have an account), build your own pizza, and write a message to customer service.

## 2. Notes:
- I deployed the back-end on [heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs). It created a link https://fast-inlet-56401.herokuapp.com/pizzas to fetch my data.
- I deployed the front-end on [github](https://github.com/gitname/react-gh-pages). You can simply visit this link  https://thuytien134.github.io/front-end-project with a browser on any device to see my React app.
- For styling my App , i have used react-Bootstrap and Inline Styles.
## 3. Page Structure:
### - In `sign in` tab:
A `react-router` navigates the user to a `Welcome` component. He/she will get a welcome message.
### - In `Build Your Pizza` tab, I created 3 components :
- `PizzaList`: `GET` request to get data from my back-end link https://fast-inlet-56401.herokuapp.com/pizzas
- `PizzaForm`:  Control component with a `POST` request when the user builds his pizza.
- `Pizza`: this component is rendered by `PizzaList` and has a `DELETE` request for the user to delete toppings.
### - In the `Customer Support` tab.
 A `react-router` navigates the user to a `Thankyou` component. He or she will get a thank you message for sending a request or feedback.

