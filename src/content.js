'use strict'

const contentful = require('contentful')

require('dotenv').config()

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.REACT_APP_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

// Entry point of the boilerplate, called at the end.
export default function runBoilerplate (cb) {
  displayContentTypes()
  .then(entries => displayEntries(entries, cb))
  .catch((error) => {
    if (error.stack) {
      console.error(error.stack)
      return
    }
    console.error(error)
  })
}

function displayContentTypes () {
  return fetchContentTypes()
  .then((contentTypes) => {
    return contentTypes
  })
}

function displayEntries (contentTypes, cb) {

  return Promise.all(contentTypes.map((contentType) => {
    return fetchEntriesForContentType(contentType)
    .then((entries) => {
      cb(entries)
    })
  }))
}

// Load all Content Types in your space from Contentful
function fetchContentTypes () {
  return client.getContentTypes()
  .then((response) => response.items)
  .catch((error) => {
    console.error(error)
  })
}

// Load all entries for a given Content Type from Contentful
function fetchEntriesForContentType (contentType) {
  return client.getEntries({
      content_type: contentType.sys.id
    })
  .then((response) => response.items)
  .catch((error) => {
    console.error(error)
  })
}

