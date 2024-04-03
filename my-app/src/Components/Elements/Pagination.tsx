export const Pagination = ({totalItems,itemsPerPage, setCurrentPage, currentPage}:{totalItems:number,itemsPerPage:number,setCurrentPage:any, currentPage:any}) => {
    let pages=[];
    for(let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        pages.push(i);
    }
    
    return (
    
        
    <div className="ui fluid grid" >
         <div className="ui pagination menu" style={{margin:"2rem 2rem"}}>{
        
        pages.map((page,index)=>{
            return <button key={index} onClick={()=>setCurrentPage(page)} className={`item ${page===currentPage?"active":""}`}> {page}</button>
        })
        }</div></div>
       
    );
    };