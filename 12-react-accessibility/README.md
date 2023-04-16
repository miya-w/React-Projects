
### What is  Web accessibility
 Web accessibility is the practice of making websites usable for all visitors, including those with disabilities, impairments, and limitations.
- [Accessibility - W3C](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [ACCESSIBILITY](https://www.w3.org/standards/webdesign/accessibility)

- Extensions-axe DevTools - Web Accessibility Testingaxe DevTools - Web Accessibility Testing
    - [Document- Axe DevTools](https://axe.deque.com/install-success)

### Semantic HTML
- [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning)
- [Semantic HTML](https://web.dev/learn/html/semantic-html/)
// Let's rewrite this code with semantic elements:
```html
<header>
  <h1>Three words</h1>
  <nav>
    <a>one word</a>
    <a>one word</a>
    <a>one word</a>
    <a>one word</a>
  </nav>
</header>
<main>
  <header>
    <h1>five words</h1>
  </header>
  <section>
    <h2>three words</h2>
    <p>forty-six words</p>
    <p>forty-four words</p>
  </section>
  <section>
    <h2>seven words</h2>
    <p>sixty-eight words</p>
    <p>forty-four words</p>
  </section>
</main>
<footer>
  <p>five words</p>
</footer>
```
![html5](https://html5doctor.com/downloads/h5d-sectioning-flowchart.png)


- [7 個你必須知道的semantic elements](https://medium.com/%E7%8B%97%E5%A5%B4%E5%B7%A5%E7%A8%8B%E5%B8%AB/7-%E5%80%8B%E4%BD%A0%E5%BF%85%E9%A0%88%E7%9F%A5%E9%81%93%E7%9A%84semantic-elements-ccc8bbad5d)
- [Introduction to ARIA - Accessible Rich Internet Applications](https://webaim.org/techniques/aria/)
- [Skip Navigation Links](https://webaim.org/techniques/skipnav/)
- [Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

---
# Accessibility practice 1

## Accessible Tabs

Below is the code for a React component that works like a series of tabs. Clicking a tab displays the content for that tab, and only one tab content is visible at a time.

Following the [WAI guidelines for accessible tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/), make this tab component accessible.

In particular:
* Make it so that each of the tabs can be focused and activated by the keyboard using `Space` or `Enter`
* Add the correct `aria-` and `role` attributs for the tab and tab content panel according to the guidelines.
  * Add `role="tablist"`, `role="tab"`, `role="tabpanel"` to the appropriate elements
  * Each tab has `aria-controls=` set to the tab content panel
  * The active tab has `aria-selected` set to true, and all others set to false.
  * The tab content element has `aria-labelledby=` referring to the correct tab heading element.

`Tabs.js`

```js
import { useState } from "react"
import "./Tabs.css"

const headings = [
  'First tab', 'Second tab', 'Third tab'
]
const content = [
  'This is the first tab content',
  'The second tab is much the same as the first tab',
  'But the third tabe does its own thing'
]

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0)
  
  return <div className="Tabs">
    <div>
      { headings.map((text, idx) => {
        return <TabHeading
          key={idx}
          onClick={() => {setSelectedTab(idx)}}
          selected={selectedTab === idx}
          title={headings[idx]}/>
      })}
    </div>
    <div className="tabcontent">{content[selectedTab]}</div>
  </div>
}

function TabHeading(props) {
  return <span
    onClick={props.onClick}
    className={props.selected ? 'tab selected': 'tab'}>
    {props.title}
  </span>
}

export default Tabs
```

`Tabs.css`
```css
.Tabs {
  padding: 10px;
  background-color: lightgray;
}

.Tabs .tab {
  padding: 10px 20px;
  display: inline-block;
  background-color: rgb(203, 236, 247);
  margin-right: 6px;
}

.Tabs .tabcontent {
  padding: 10px;
  background-color: white;
}

.Tabs .tab.selected {
  font-weight: bold;
  background-color: white;
}
```
