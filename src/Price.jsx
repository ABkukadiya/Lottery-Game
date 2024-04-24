export default function Price({oldPrice ,newPrice}) {
    let styles = {
        textDecorationLine : "line-through",
        // backgroundcolor : "#e0c367" ,
        // height : "30px",
        // borderBottomLeftRadious : "14px",
    }
    return (
        <div>
            <span style={styles}>{oldPrice}</span>
            &nbsp;
            &nbsp;
            &nbsp;
            <span>{newPrice}</span>
        </div>
    );
}