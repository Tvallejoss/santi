import React from 'react';
import Songs from './Songs';

export default class SingleAlbum extends React.Component {

  componentDidMount () {
    const {albumId, selectAlbum} = this.props
    selectAlbum(albumId)
  }

  render() {
    const {album, start, selectedSong} = this.props
    return (<div className="album">
    <div>
      <h3>{album.name}</h3>
      <img src={`/api/albums/${album.id}/image`} className="img-thumbnail" />
    </div>
    <Songs 
      songs={album.songs}
      start={start}
      selectedSong={selectedSong}
    />
  </div>)
  }
}

// export default ({ album, start, selectedSong }) => (
//   <div className="album">
//     <div>
//       <h3>{album.name}</h3>
//       <img src={`/api/albums/${album.id}/image`} className="img-thumbnail" />
//     </div>
//     <Songs 
//       songs={album.songs}
//       start={start}
//       selectedSong={selectedSong}
//     />
//   </div>
// );