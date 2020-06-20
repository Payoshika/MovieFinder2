import React from "react";
import Article from "./article"
import * as Foobaa from "./components/FooBaa"
import Hoge from "./components/Hoge"

class Blog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isPublished: true,
      title: "oanshi",
      blogTitle: "panshi's web",
      subscribe: "subscribe",
      count: 0
    }
  }

  componentDidMount(){
    document.getElementById("counter").addEventListener("click", this.countUp)
  }

  componentDidUpdate(){
    if(this.state.count >= 10){
      this.setState({
        count : 0
      })
    }
  }

  componentWillUnmount(){
    document.getElementById("counter").removeEventListener("click", this.countUp)

  }

  togglePublished = () => {
    this.setState ({
      isPublished: !this.state.isPublished
    })
  }

  titleChange = () => {
    this.setState({
      title: "panshi"
    })
  }

  subscribed = () => {
    this.setState({
      blogTitle: "you are now Member!",
      subscribe: "subscribed"
    })
  }

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    const authorName = "panshi"
    return(
      <div>
        <Article
        title={this.state.title}
        isPublished = {this.state.isPublished}
        toggle= {() => this.togglePublished()}
        titleChange = {() => this.titleChange()}
        blogTitle = {this.state.blogTitle}
        subscriptionMessage = {this.state.subscribe}
        subscribed ={() => this.subscribed()}
        count = {this.state.count}
        />
        <Foobaa.Foo />
        <Foobaa.Bar />
        <Hoge />
      </div>
    )
  }
}

export default Blog
