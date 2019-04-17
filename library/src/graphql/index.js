const itemTemplate = `{
    listLibraries
}`

const bookData = `
query listLibraries {
  listLibraries {
    items {
      id
      title
      number
      author
      publisher
    }
  }
}`;
const add_update_book = `
mutation createLibrary($createlibraryinput: CreateLibraryInput!) {
  createLibrary(input: $createlibraryinput) {
    id
    title
    number
    author
    publisher
  }
}`;

export default {
    bookData,
    add_update_book
}