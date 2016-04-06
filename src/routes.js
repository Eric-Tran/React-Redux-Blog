//mapping of url to components
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';


//IndexRoute helps you render the root path component PostsIndex when app is loaded.
export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="/posts/:id" component={PostsShow} />
	</Route>
);

//this.props.params.id
