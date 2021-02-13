export default function MapSelector(){

    const maps = ['Split', 'Bind', 'Haven', 'Icebox', 'Ascent']

    return(
        <div className="map_selector">
            {
                maps.map((value, index) => {
                    return <button className="button is-dark">{ value }</button>
                })
            }
        </div>
    )
}