## Deployed:[ NextJS Responsive Page](https://nextjs-responsive.vercel.app/)
*by: Omar Ong*

___
### Highlights

- Built on NextJS framework - Deployed to Vercel
- **"Custom" Build**: only dependencies are Next, React, SASS and Styled-Components. I created my own hooks for viewport observer and context api to manage viewport state
- Modern React:
  >hooks, statelful/less functional components ("no-class" approach, just like facebook wants us to do...) and fetch api used
- CSS Frameworks: 
  >I used `styled-components` for the components and a global SCSS file for styles in the remaining items in the main index file, mainly using flexbox as layout model.  
- **Responsive Design**:   
  >Mobile optimized components for mobile utilizing 
  > - Context API to update viewport state 
  > - Custom hooks to implement a viewport observer
- API
  > - used NextJS method `getServerSideProps`, which fetches data every request time. I imagine that SKUS inventory and other datapoints can change dynamically, otherwise if the data would be more static, I will use `getStaticProps` as the cached static props will be more economical on the api side. 
  > - *[Created New Endpoint](https://demo4893163.mockable.io/)* : The original demo api only had non-"quickship" items, so I tweaked it to set some SKUs to `is_quick_ship: true` so you can confirm that my...
- **Quickship Filter Toggle** is implemented (useEffect hook)
- enabled three row line for product description, append ellipses for concatenated lengthier descriptions, see `ProductDescription.js`
- **Show More / Show Less** button functionality implemented w/ quickship
- crucial feature (favicon...)

---
### What Could Be Done Further (*time permitting*)

- implement dropdown multi checkbox select filter, and clear all button functionality (!)
- cleanup CSS and layout
- further componentize `products.js` into stateless functional components styled with styled-components
- improved UX, e.g. animated cues (mobile modal ease, scroll up/down onclick Show More, button hover states, etc)
- create unit tests (Jest)
- annotate or build components in bit.dev or Storybook

---
### Instructions: Make App Run Locally

1. Clone this repository `git@github.com:jetsetPanda/fe-assignment.git`.
2. In your terminal - navigate to root folder and enter `npm install` to install dependencies.
3. Enter `next dev` in terminal to open a live dev server.
4. Further information can be found in the NextJS documentation: `https://nextjs.org/docs/getting-started`