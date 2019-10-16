class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this. mapIntoObject(rawData.authors),
    }
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr
      return acc
    }, {})
  }
  lookupAuthor = (authorIs) => {
    return this.data.authors[authorIs]
  }
  getState = () => {
    return this.data
  }
}

export default StateApi
