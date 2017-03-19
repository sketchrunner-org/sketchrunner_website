import React, { Component, Children, PropTypes } from 'react';
import './githubRelease.scss';
import axios from 'axios';

// const token = '?access_token=25d154b009014c74cd3b51fe7d74aaca59e5e099';
const url = 'https://api.github.com/repos/sketchrunner/sketchrunner_releases/releases'; // + token;

export default class GithubRelease extends Component {

	constructor(props) {
		super(props);
		this.state = {
			releases: []
		}
		// this.createNewRelease = this.createNewRelease.bind(this);
		// this.uploadAssets = this.uploadAssets.bind(this);
		this.getReleases = this.getReleases.bind(this);
		this.getReleases();
	}


	getReleases() {
		var self = this;
		axios.get(url)
		.then(function(response){
			for (var i = 0; i <= response.data.length ; i++) { // TODO: This throws an error, it must be something really basic but I can't figure it out -.-
					var releases = self.state.releases.slice();
					self.setState({ releases: releases });
					releases.push(
						<div className="release-item" key={response.data[i].id}>
							<h2>{response.data[i].name}</h2>
							<p>published on {response.data[i].published_at}</p>
							<p>tag: {response.data[i].tag_name}</p>
							<p>description: {response.data[i].body}</p>
							<a href={response.data[i].html_url}>{response.data[i].html_url}</a>
						</div>
					);
			}
		});
	}

	// createNewRelease(e) {
	// 	e.preventDefault();
	// 	const self = this;
	// 	axios.post(url, {
	// 	  "tag_name": this.refs.tag_name.value, // ex.: v0.8.1
	// 	  "target_commitish": "master",
	// 	  "name": this.refs.tag_name.value + " - " +this.refs.name.value, // ex.: The Fuzzy Search Apocalypse (it will append version number automatically)
	// 	  "body": this.refs.body.value,
	// 	  "draft": false,
	// 	  "prerelease": true
	// 	})
	//   .then(function(response){
	//     console.log('Saved successfully');
	//   });
	// 	this.uploadAssets();
	// }

	// uploadAssets() {
	// 	const asset = this.refs.asset;
	// 	const assetValue = this.refs.asset.value;
	// 	const assetName = this.refs.asset.files[0].name;
	// 	axios.get(url)
	// 	.then(function(response){
	// 		const releaseId = response.data[0].id
	// 		const upload_url = 'https://uploads.github.com/repos/sketchrunner/sketchrunner_releases/releases/' + releaseId + '/assets?name=' + assetName + token;
	// 		var config = {
	// 		  headers: {
	// 				"content_type": "application/zip",
	// 				"Access-Control-Allow-Origin": "*",
	// 	 			"Access-Control-Allow-Credentials": "true",
	// 	 			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
	// 	 			"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
	// 			}
	// 		};
	// 		axios.post(upload_url, {
	// 			"name": assetValue
	// 		}, config).then(function(response){
	// 			respo.header("Access-Control-Allow-Origin", "*");
	// 			respo.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	// 			console.log('Uploaded successfully');
	// 	  });
	// 	})
	// }


  render () {
    return (
      <div className="github-release">
				{/* <form id="submitplugin" onSubmit={this.createNewRelease}>
					<input ref="tag_name" type="text" placeholder="tag_name (ex.: v0.0)" autoComplete="off" required="required" />
					<input ref="name" type="text" placeholder="name" autoComplete="off" required="required" />
					<input ref="body" type="textarea" placeholder="body" autoComplete="off" required="required" />
					<input ref="asset" type="file" placeholder="zip" autoComplete="off" required="required" />
				<button htmlFor="submitplugin" type="submit">Release! 🐙</button>
				</form> */}
				{this.state.releases}
      </div>
    )
  }
}
