# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework


### What I learned

Learnt how to create a custom hook in React to detect a click outside a component.

```js
export default function ReactComponent() {
    const [show, setShow] = useState(false)

    const useOutsideClick = (callback) => {
        const ref = useRef()

        useEffect(() => {
            const handleClick = (e) => {
                if (ref.current && !ref.current.contains(e.target))
                callback()
            }

            document.addEventListener('click', handleClick)

            return document.removeEventListener('click', handleClick)
        }, [ref])

        return ref
    }

    const handleShowDiv = () => setShow(true)
    const handleCloseDiv = () => setShow(false)

    const ref = useOutsideClick(handleCloseDiv)

    return (
        <div classname='container'>
            <button onClick={handleShowDiv}>
            {show ? <div ref={ref} className='component'>Component showed</div> : null}
        </div>
    )
}
```

Also learnt how to fetch data using an array.

```js
const array = [some items]
async function fetchDataFromArray() {

const data = await Promise.all(
    array.map(async(arr) => await fetch(url).then(res => res.json()))
)
}
```

### Continued development

I would like to continue building web apps with nextjs, focusing on getting the best out of the frameworks capabilities.

### Useful resources

- [Detect click outside component](https://www.robinwieruch.de/react-hook-detect-click-outside-component/) - Learnt how to create a custom hook to detect click outside component.
- [Make API calls for each element in an array](https://stackoverflow.com/questions/66505445/how-to-make-api-calls-for-each-element-in-array) - Helped me find a better way to make api calls from an array, brilliant solution with regards to what I came up with.

## Author

- Frontend Mentor - [@ubonisrael](https://www.frontendmentor.io/profile/ubonisrael)
- Twitter - [@jakpanudoh](https://www.twitter.com/jakpanudoh)