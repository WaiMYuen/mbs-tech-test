# mbs-tech-test

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)


## To start

- `npm install`
- `npm run dev` - to start the app
- `npm run test` - to run test suite

## Introduction
App is a currency conversion app that uses `https://www.floatrates.com/daily/[code].json` as the endpoint to grab the conversion rate and currency code/info. 
The app allows a user to convert any dispalyed currency to anyother currency, it uses redux to store the `baseCurrency` and `targetCurency` as well as the `amount` of currency wanting to be converted.
[shadcn](https://ui.shadcn.com/) is used as a component library, along with [Tailwind CSS](https://tailwindcss.com/), Shadcn is built with Tailwind so it makes composing the styles easier. For form valdiation I used the [Zod](https://zod.dev/) library, this is due to it being a Typescript-first library that is well supported.

## Architecture & Decisions
### Data and redux
- Data fetching is encapsulated in `currencyApi.ts` and mocked to avoid network calls in unit testing
- Redux toolkit and RTK query handles state update (`conversionSlice`) and the currency rate fetching alongside error and loading states.

### Form handling
- `Zod` and `react-hook-form` for ease of validation as well as ensuring type sage validation for `amountForm`

### Component Design
- Each element has been seperated out when in makes sense to ensure API logic is kept isolated, making testing for UI much easier. Ensured to communicate the loading of the currency list from within the button (`currencySelect`) to ensure CLS is low

### Testing
- Tested components with a `Provider` to match redux context
- Avoided mocking `useDispatch` to ensure we test against rendered state vs Redux iteself

### Notes
-  Had I more time, i would've liked to include more accessibility options in such as aria-labels to better enable screen-readers and assistive technologies. Also would've liked to have the differences between smaller and larger screen sizes to be more pronounced.