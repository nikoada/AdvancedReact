import React from 'react'

import Article from './Article'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

class ArticleList extends React.PureComponent {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map( article =>
          <Article
            key={article.id}
            article={article}
          />
        )}
      </div>
    )

  }
}

export default ArticleList
