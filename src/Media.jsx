import img1 from "./assets/react.svg"
function Media(){
    return(
        <div>
            <h1>Media</h1>
            <img src={img1}/>

            <video controls>
                <source src="https://res.cloudinary.com/dir0f6ufp/video/upload/v1767470416/media_user/1/post_1_1767470403795_raviteja.mp4.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}

export default Media;