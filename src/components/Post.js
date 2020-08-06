import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePosts } from ".././actions/social-media-app";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
  //   this.state ={
  //   translated: '...'
  // }
}

  render() {
    return (
      <>
        <h3>{this.props.postData.title}</h3>
        <p>{this.props.postData.body}</p>

        <button
          onClick={() => {
            console.log("button clicked");

            let updatedPostList = this.props.someRandomName.posts.filter(
              (post) => {
                return post.id !== this.props.postData.id;
              }
            );

            this.props.dispatch(updatePosts(updatedPostList));
             // use a put request to send updated list to our json stroage api after deleting the post.
 
  
    axios
      .put(
        "https://jsonstorage.net/api/items/f2c563c1-bff6-469b-a954-0dab52edc4c3",
        { "posts":updatedPostList }
      )
 
          }}
        >
          {" "}
          Delete
        </button>
        translate(){
          axios.post(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=$la&tl=en&dt=t&q={}`)
          .then(data => {
            this.setState()
          })

        }

        <button
          onClick={() => {
          
          }}
        >
          Translate Button
        </button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    someRandomName: state,
  };
}

export default connect(mapStateToProps)(Post);
