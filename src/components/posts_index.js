import React, { Component } from 'react';
//needs to be a container since it needs to access action creator fetch posts.
//Step 1: import connect, bindActionCreators, import fetch posts, our action creator.
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; // not needed.
import { fetchPosts } from '../actions/index'
//used to add a links to the page.
import { Link } from 'react-router';

//This is a functional component. not needed since we upgraded to class based component.
// export default () => {
// 	return <div>List of blog posts</div>
// }

class PostsIndex extends Component {
	//need native react componentWillMount nethod to call action creator when the component is loaded.
	//componentWillMount is only called the first time when the component is about to load.
	componentWillMount() {
		this.props.fetchPosts();
	}
	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
				<Link to={"posts/" + post.id}>
					<span className="pull-sm-right">{post.categories}</span>
					<strong>{post.title}</strong>
				</Link>
				</li>
			);
		});
	}
	render() {
		return (
			<div>
				<div className="text-sm-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}


//Step 2: mapdDispatchToProps and dispatch to all reducers.
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ fetchPosts }, dispatch);
// }

//Step 3: export connect. gives us access to fetchPosts.
//ES6: shortcut to mapStateToProps {fetchPosts: fetchPosts}, shorthand { fetchPosts }
export default connect (mapStateToProps, { fetchPosts })(PostsIndex);