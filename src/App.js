import React from 'react';
import Talents from './components/Talents'
import Talent from './components/Talent'
import List from './components/List'
import Item from './components/Item'
import Header from './components/Header'
import Video from './components/Video'
import './App.css';
import Bananaman from './assets/img/talent_1.jpg'
import Odory from './assets/img/talent_2.jpg'
import Shimohuri from './assets/img/talent_3.jpg'
import Ogiyahagi from './assets/img/talent_4.jpg'
import Search from 'youtube-api-search'

const youtube_api_key = 'youtubeのAPIkeyが入ります'

const talents =  [
  {img: Bananaman, name: 'バナナマン'},
  {img: Odory, name: 'オードリー'},
  {img: Shimohuri, name: '霜降り明星'},
  {img: Ogiyahagi, name: 'おぎやはぎ'},
]


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      talents: talents,
      videos: [],
      selectedVideo: null,
    }
  }

  componentDidMount(){
    Search({ key: youtube_api_key, term: 'お笑い'}, (data) => {
      console.log(data);
　    this.setState({ videos: data, selectedVideo: data[1] })
　  });
  }

  talentClickedHandler = (keyword) => {
    Search({ key: youtube_api_key, term: keyword}, (data) => {
      　    this.setState({ videos: data })
      　  });
  }

  itemClickedHandler = (video) => {
    this.setState({ selectedVideo: video })
  }

  keywordChangeHandler = (keyword) => {
    let newTerm = keyword;
    　if (keyword === '') {
          newTerm = ''
      }

    Search({ key: youtube_api_key, term: newTerm}, (data) => {
　    this.setState({ videos: data })
　  });
  }
  


  render() {
    return (
        <div className="c-section">
            <div className="c-box">
              <h1 className="title">MY BEST COMEDIAN</h1>
                <Talents talents={this.state.talents} talentClicked={this.talentClickedHandler}/>
                <Header keywordChangeHandler={this.keywordChangeHandler}/>
                <Video selectedVideo={this.state.selectedVideo}/>
                <List videos={this.state.videos} itemClicked={this.itemClickedHandler}/>
            </div>
        </div>
      )
  }
}

export default App;
