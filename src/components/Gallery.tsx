import GalleryItem from './GalleryItem'

function Gallery(props: any){
    console.log("type of props is " + typeof props) //console.log shows pops is object, but changing it produces an error
    const display = props.data.map((item: object, index: number) => {
        //console.log("type of item is " + typeof item)
        //console.log("type of index is " + typeof index)
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
