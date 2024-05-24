# React Router Practice

https://fake-windows.netlify.app/

## Summary
A project to practice the setup and use of React Router.

## Problems

### Responsive Menu
I have been separating out each react component into its own folder with an index.jsx and where necessary, an index.css file. Using the name of index means you can import the react component just by providing the path of the folder. However, when it came to creating the responsive header menu, I wanted certain elements to appear at certain screen sizes but disappear at others. For example, in the mobile version I wanted the company telephone number and menu to stick to the top of the page, but for the desktop version I wanted the layout to change and for the company logo to also be visible and stick to the top of the page along with the telephone number and header menu as the user scrolls around. 

In hindsight, it might have been better to contain all of this logic within the header component and decide what to render in there. What I did instead was use media queries to adjust the layout and make the non-sticky company logo set to display: none, while a hidden logo in the sticky div is set to come out of hiding and display. This means that the responsiveness is spread between multiple components: header and headerMenu, and multiple css files. 

This posed another problem: it turns out you can't use var() within media queries. I wanted to define the layout breakpoints once and only once, not repeat the same magic numbers through numerous css files, forget what the breakpoints were, wonder why the layout wasn't working as expected, etc. etc., so I started using SASS. The scss files worked on the dev server without installing sass, for some reason. I assume this is some built-in feature of Vite but even their documentation says the dev dependency must be installed. Anyway, it broke when I deployed to netlify, so I installed the dependency. Still confused as to why it was working on the dev server without the dependency installed.

It would surely be better to keep all of the responsive logic in one place - the css or the js. I ended up going with the css as you can do lots of other things very easily with media queries, little alterations to padding, centering, etc. etc. but in the above example it felt like I wasn't "thinking in react". The "react" thing to do feels like it would be to render a mobile version of the menu and replace it with a desktop version when the screen exceeds a particular width. 

### Remembering Scroll Position
As the user navigates between the about-us page to individual staff profiles, I wanted the browser to remember the scroll position the user was last at on the about-us page, so they didn't have to scroll back down from the top every time the page was loaded. This would have been especially grating on mobile devices, where the user would have to scroll quite far to get back to their previous position. This is normal browser behaviour on a traditional web site but doesn't work in a single-page-application, as obviously the action is all happening on a single page. After looking around and finding the browser scrollTo() API and fiddling with that for a bit, I realised that react-router-dom already has a ScrollRestoration component for this exact purpose. Nice one!

### Logo
I made a basic logo in Inkscape. While there are a lot of free icons available online, it would be good to get more practice with Inkscape, so I can make my practice projects look better and create custom icons where necessary. At first, I turned the main text ("FAKE") from text into a path, but didn't change the subheading "WINDOWS & DOORS" into a path. When I used the logo in the project, as the font used within Inkscape wasn't available in the browser it used some other font and looked terrible. 

Lesson: Always turn the svg text into a path!

## To Do
- Do react router tutorial again, as there were many topics and hooks that weren't covered by this practice project and I don't feel like they have really sunk in yet
- Learn SASS as it has already been very useful just with the addition of variables that can be used in media queries
- Learn more Inkscape as it is a very powerful tool!
