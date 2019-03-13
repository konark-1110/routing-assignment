import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class post extends Component {
        state={
            post: [ ]
        }
        componentDidMount(){
            console.log(this.props);
            let id = this.props.match.params.post_id;
            axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res =>{
             this.setState({
                 post: res.data
             })
//                console.log(this.state);
            })
        }

    render() {
        const comment = this.state.post ? (
            <div className='post card'>
                <div className='center card-title'>{this.state.post.title} </div>

                <ul className='center'>
                    <li>{this.state.post.id}</li>
                    <li>{this.state.post.email}</li>
                    <li>{this.state.post.body}</li>
                </ul>

            </div>
        ) : ( <p> Loading posts.........</p> )

        return(
            <div className='container'>
                {post}
            </div>
        )
    }
}
export default post;
