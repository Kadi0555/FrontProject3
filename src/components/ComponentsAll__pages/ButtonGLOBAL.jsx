export default function ButtonGLOBAL(props){
    return (
        <form action="">
            <button type="button" style={{width:"204px",height:"56px",backgroundColor:props.color,cursor:'pointer'}} onClick={props.onClick}>{props.Children}</button>
        </form>
    )  
};