export default function LineupView(){
    const imgs = ['VALORANT-Win64-Shipping_4yQlm3D62u.jpg','VALORANT-Win64-Shipping_4yQlm3D62u.jpg']
    return(
        <div className="lineup_view_container">
            {
                imgs.map((value, index) => {
                    return <img className="lineup_img" src={"./images/" + value}></img>
                })
            }
        </div>
    )
}