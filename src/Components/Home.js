import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    state ={
        comments: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then( res => {
            //console.log('Response from API',res);
            this.setState({
                comments: res.data.slice(0, 2)
            })
            //console.log('Our home state',this.state.posts);
        })
    }

    render() {
        const { comments } = this.state;
        const commentList = comments.length ? (
            comments.map(comment => {
                return (
                    <div className='comment card' key={comment.id} style={{backgroundColor: 'lightblue  '}}>

                        <div className='card-content'>
                            <Link to = {'/' + comment.id} >
                                <span className='card-title'>{comment.name}</span>
                            </Link>

                            <ul>
                                <li>{comment.id}</li>
                                <li>{comment.email}</li>
                                <li>{comment.body}</li>
                            </ul>
                            {comment.id % 2===0 ? <img className="image1" src="https://cdn.vox-cdn.com/thumbor/mGsDgU2JoyHyRJFaeVh9K5eKdTc=/0x0:1800x1013/1200x800/filters:focal(756x363:1044x651)/cdn.vox-cdn.com/uploads/chorus_image/image/60154183/Webp.net_resizeimage__5_.0.jpg" alt="oops! not found!" /> : <img className="image1" src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/03/dragon-ball-super-goku-ultra-instinct-mastered-01.jpg" alt="oops! not found!" />}
                        </div>
                    </div>
                )
            })
        ) : (
            <p className='center'> No comments yet </p>
        )

        return(
            <div className='center'>
                <h4 className='container'>Homepage</h4>
                { commentList }
            </div>
        )
    }
}

export default Home;
