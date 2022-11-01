const DropComp = (props) => {
    const DropMenu=(
        <ul className="dropdown-menu">
            {props.Drop.map((post)=>(
                <li key={post.id}>{post.text}</li>
            ))}
        </ul>
    )
    return (
        <>
            {DropMenu}
        </>
        
    );
}
const DropdownComp=()=>{
    return (
    <DropComp Drop={Drop}/>
    )
}
const Drop=[
    {
        id:1,
        text: "   복지카드 회원"  
    },
    {
        id:2,
        text:'   웰프로카드 회원'
    },
    {
        id:3,
        text:'   신한금융그룹 패밀리'
    },
    {
        id:4,
        text:'   LG/LX/GS/LS/LIG패밀리'    
    }
]
export default DropdownComp;