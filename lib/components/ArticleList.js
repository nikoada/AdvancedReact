import React from 'react'

import Article from './Article'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const ArticleList = (props) => {
  return (
    <div>
      {Object.values(props.articles).map( article =>
        <Article
          key={article.id}
          article={article}
        />
      )}
    </div>
  )
}

export default ArticleList
