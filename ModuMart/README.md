# ModuMart

ModuMart is a responsive frontend storefront for computer systems and accessories. It is built with React and Vite and uses browser storage to keep a shopping cart between visits.

## Run the project

From the project folder:

```bash
npm install
npm run dev
```

You can also run `npm run dev` from the parent `ModuMart1` folder. The parent package forwards the app commands into this folder.

## Features

- Browse computers, displays, components, peripherals, storage, power protection, networking, cables, desk accessories, and printers
- Search, filter by category, and sort by price
- Add products to a cart and change quantities immediately
- Keep the cart in local storage
- Complete a delivery and payment selection flow in a clearly marked frontend checkout demo
- Use the layout on mobile and desktop

## Project structure

- `src/data/products.js` contains product details and currency formatting.
- `src/pages` contains the home, shop, cart, and about pages.
- `src/component` contains shared navigation, footer, and product card components.
- `src/providers` contains the shared cart state.

## Frontend-only note

There is no server, account system, payment processing, or order submission. Checkout is a visual demo and does not send or save delivery details. Connect a backend and payment provider before accepting real orders.
