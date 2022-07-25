import Loader from 'react-loader-spinner'
import './index.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {isData: [], isLogged: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const UpdatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))

    this.setState({isData: UpdatedData, isLogged: false})
  }

  render() {
    const {isData, isLogged} = this.state
    // console.log(isData)
    return (
      <div>
        {isLogged ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <ul>
            {isData.map(each => (
              <BlogItem key={each.id} dataFormatDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
