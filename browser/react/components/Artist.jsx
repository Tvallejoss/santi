import React from "react";

export default class Artist extends React.Component {
    componentDidMount() {
        const { artistId, selectArtist } = this.props;
        selectArtist(artistId);
    }

    render() {
        const {selectedArtist , albums} = this.props
        console.log(albums)
       return (
            <div>
                <h3>{selectedArtist.name}</h3>
                <h4>ALBUMS</h4>
                <h4>SONGS</h4>
            </div>
        );
    }
}
