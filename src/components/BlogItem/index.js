import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {dataFormatDetails} = props
  const {id, title, author, imageUrl, avatarUrl, topic} = dataFormatDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-list">
      <li className="list">
        <div>
          <img className="img" src={imageUrl} alt={`item${id}`} />
        </div>
        <div className="margin-space-between-container">
          <p className="para">{topic}</p>
          <p>{title}</p>
          <div className="arrange-name">
            <img className="img1" src={avatarUrl} alt={`avatar${id}`} />
            <p className="para text">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
