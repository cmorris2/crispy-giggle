import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import Footer from "./Footer"
import MediaPlayer from "./components/MediaPlayer"
import Note from "./components/Note"
import TodoItem from "./components/TodoItem"


function App() {

  return (
    <div className="App">
      <MediaPlayer beginAt="55"/>
      <AmplifySignOut />
      <Footer  />
    </div>
  );
}

export default withAuthenticator(App);