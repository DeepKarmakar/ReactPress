import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const PostEditor = ({ newPostData, setFormData }) => {

	const { content } = newPostData;

	const modules = {
		toolbar: [
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
			['link', 'image'],
			['clean']
		],
	}

	const formats = [
		'header',
		'bold', 'italic', 'underline', 'strike', 'blockquote',
		'list', 'bullet', 'indent',
		'link', 'image'
	]

	const setEditorValue = (content) => {
		setFormData({ ...newPostData, content })
	};

	return (
		<div>
			<ReactQuill
				theme="snow"
				value={content}
				onChange={setEditorValue}
				modules={modules}
				formats={formats}
				className='newPostEditorWrapper'
				placeholder="Write your story" />
		</div>
	)

}

export default PostEditor;