import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ArticleList extends Component {

  render() {
    if(this.props.articles.length) {
      return (
        <div>
          <h4>Articles</h4>
          {this.props.articles.map(article => {
            return (
              <div key={ article.id }>
                <hr/>          
                <h4><Link to={`/articles/${article.id}`}>{article.id}: {article.title}</Link></h4>
                <p>{article.content}</p>
              </div>
            );
          })}
        </div>
      )    
    } else {
      return (<div>No Articles</div>)
    }
  }
}

const mapStateToProps = (state) => ({ articles: state.articles });

export default connect(mapStateToProps)(ArticleList);