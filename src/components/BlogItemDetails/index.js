import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {newData: {}, isLog: true}

  componentDidMount() {
    this.getDataDetails()
  }

  getDataDetails = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const UpdatedDetails = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({newData: UpdatedDetails, isLog: false})
  }

  onGetDataDetails = () => {
    const {newData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = newData
    return (
      <div className="text-center">
        <h1 className="heading">{title}</h1>
        <div className="row-msg">
          <img className="author-img" src={avatarUrl} alt={author} />
          <p className="author text">{author}</p>
        </div>
        <div className="text-center">
          <img className="img-title" src={imageUrl} alt={title} />
          <p className="text">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLog} = this.state
    return (
      <div>
        {isLog ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.onGetDataDetails()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
