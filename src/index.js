import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Post from './components/Post';
import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: Math.random(),
        img: 'https://pbs.twimg.com/profile_images/954467773387804676/Bm0Yb_-5_400x400.jpg',
        name: 'Leon Flavor',
        time: 'há 40 min',
        description:
          'Lorem ipsum commodo aliquet eget vivamus enim porta, erat sodales eu sollicitudin nullam mollis dictumst, inceptos aenean ullamcorper non fusce porta. duis vestibulum ligula donec quis eget dolor class cursus fames posuere, in lorem porttitor feugiat potenti diam leo interdum lacus, pulvinar cursus orci aliquam vehicula tincidunt sodales sollicitudin turpis. dapibus nostra lacus quam hac pharetra lobortis amet, adipiscing aliquet praesent taciti nisl. potenti condimentum mollis ac orci phasellus placerat, id pellentesque ullamcorper accumsan fames dui, aenean hac per aenean sed. semper ornare quis dui mi pharetra consectetur et odio sem, torquent proin rhoncus netus conubia enim pretium nostra, felis torquent ultricies morbi neque iaculis potenti nunc.',
      },
      {
        id: Math.random(),
        img:
          'http://www.diarioonline.com.br/img/noticias/original/destaque-427379-v-dragon-ball-fighterz-trunks.jpg',
        name: 'Ronald Trunks',
        time: 'há 1 hora',
        description:
          'Taciti sociosqu risus class volutpat potenti sollicitudin sagittis arcu facilisis leo donec malesuada risus gravida, habitasse justo dui quisque sagittis tempus dui magna nisi adipiscing per vulputate. amet nec ligula elit habitasse varius erat tincidunt ac, lectus massa litora primis tristique lobortis curae sem primis, aliquam pharetra vehicula nisl vivamus nostra lorem. odio rhoncus dui curae torquent quam tellus dui et aliquam euismod, nisi ac amet hac etiam metus mi velit ultrices, non sollicitudin ut nullam elit hac platea dictumst morbi. mi ligula consectetur nisi tellus cubilia rutrum lobortis vestibulum, fringilla habitasse molestie bibendum nisi adipiscing aliquam ut, diam pulvinar magna molestie habitasse hac bibendum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="app">
        <Header> RocketBook </Header>

        <div className="post-list">
          {posts && posts.map(post => <Post key={post.id} {...post} />)}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
