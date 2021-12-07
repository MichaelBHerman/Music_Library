import React from 'react';
import DeleteSong from '../DeleteSong/DeleteSong';
import './DisplaySongs.css';


const DisplaySongs = (props) => {
    return ( 
        <div>
            <table class="border">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>About</th>
                        <th>Link</th>
                        <th>Status</th>
                        <th>Date Applied</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song,index)=>{
                        return (
                            <tr key={index}>
                                <td className="company">{song.company}</td>
                                <td>{song.about}</td>
                                <td>{song.link}</td>
                                <td>{song.status}</td>
                                {/* <td><button>Edit Status</button></td> */}
                                <td>{song.date_applied}</td>
                                
                                <td><DeleteSong song={song.id} removeSong={props} songs={props.songs}/></td>
                                
                                
                                
                                
                            </tr>
                        )
                    })}   
                </tbody>
            </table>
        </div>
     );
}

export default DisplaySongs;