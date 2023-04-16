
# Flickr Search - Part 1
[Source-katie/Flickr Search Part 1.md](https://gist.git.generalassemb.ly/katie/36bfce0b5eca10af859ea99ecd0f5a55)
Apply the Flicker api: [Flicker api](https://www.flickr.com/services/apps/create/apply)

The goal of this activity is to build an app as close to a professional level as you can build.

This means:
 - Do not store your API Key in your code (use `process.env` and an `.env.local` file)
 - Think about accessibility - form elements, labels on forms, alt-text etc.
 - Make it look good! (use a component library)
 - Add tests!

## Goals

We got through some of these together, but see how far you can get yourself!

1. Make it so that `/` shows a search box and search button (using good accessibility principles)
2. When searching, the URL should change to `/search/<search query text here>` to start the search (the search box should stay where it is though)
3. The search results are shown as a list of images with alt-text - consider using the [MUI Image List Component](https://mui.com/material-ui/react-image-list/)
4. Clicking on an image in the search results takes you to a new page `/photo/<photo id>` which shows more information about the specific photo.

## Component Libraries

You are welcome to use another component library if you wish! Here are some good ones:
 - [Material UI](https://mui.com/)
 - [Chakra UI](https://chakra-ui.com/)
 - [Ant Design](https://ant.design/)
 - [React Bootstap](https://react-bootstrap.github.io/)

## Using the Flickr API

The Flickr API is a bit more complex than the ones we've used so far. So here are some tips.

If it doubt, [read the Flickr Search API documentation](https://www.flickr.com/services/api/flickr.photos.search.html)

All flickr API requests go to the same base URL: `https://api.flickr.com/services/rest`

You specify what action to do with a `method` parameter. E.g. `https://api.flickr.com/services/rest?method=flickr.photos.search`

You will also need these additional parameters: `format=json&nojsoncallback=1` to get it to return a JSON object for the results (instead of XML).

## Flickr Image URLs

You may noticed that the search results don't return whole image URLs. Here is the [documentation for assembling a photo URL](https://www.flickr.com/services/api/misc.urls.html)

## Extension

Add pagination to the search results so that the user can navigate through the pages of search results.

You may want to use a Pagination component such as [the MUI Pagination component](https://mui.com/material-ui/react-pagination/)


----
' index ' 
Determines if the route is an index route. Index routes render into their parent's Outlet at their parent's URL (like a default child route).['index'](https://reactrouter.com/en/main/route/route#index)
```javascript
<Route path="/teams" element={<Teams />}>
  <Route index element={<TeamsIndex />} />
  <Route path=":teamId" element={<Team />} />
</Route>
```


### MUI (Material UI)
```bash
npm install @mui/material @emotion/react @emotion/styled
```