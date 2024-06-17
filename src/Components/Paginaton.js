import React, { useEffect,useState } from 'react'
import axios from 'axios'
import _ from "lodash"
function Pagination() {
    const pageSize=10;
    const [posts,setPosts]=useState([])
    const [paginatedposts,setPaginatedPosts]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [order,setOrder]=useState(['DSC'])
    const sorting1 = (col) => {
  if (col === 'title') {
    const sorted = _.orderBy(posts, [col], [order === 'DSC' ? 'asc' : 'desc']);
    setPosts(sorted);
    setPaginatedPosts(_.slice(sorted, (currentPage - 1) * pageSize, currentPage * pageSize));
    setOrder(order === 'DSC' ? 'ASC' : 'DSC');
    

  }
  else{
    const sorted = _.orderBy(posts,[col],[order==='ASC'?'desc':'asc'])
    setPosts(sorted)
    setPaginatedPosts(_.slice(sorted,(currentPage-1)*pageSize,currentPage*pageSize))
    setOrder(order==='ASC'?'DSC':'ASC')

  }
 
  

};
     

    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/todos')
.then((response)=>{
    setPosts(response.data)

    setPaginatedPosts(_(response.data).slice(0).take(pageSize).value())
    console.log(response.data)
})},[])
const pageCount=posts?Math.ceil(posts.length/pageSize):0
if(pageCount===1)return null
const pages=_.range(1 , pageCount+1)

const Pagination=(pageNo)=>{
    setCurrentPage(pageNo)
    const startIndex=(pageNo-1)*pageSize
    const paginatedPost=_(posts).slice(startIndex).take(pageSize).value()
    setPaginatedPosts(paginatedPost)
    

}




  return (
      <div>{
          !paginatedposts ? ("Data Not Found") : (
            <table className='table'>

                <thead>
                    <tr>
                        <th >ID</th>
                        <th >UserID</th>
                        <th onClick={()=>sorting1('title')}>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                     {
                     paginatedposts.map((post,index)=>(
                     <tr key={index}>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>
                            <p className={post.completed?"btn btn-success":"btn btn-danger"}
                             >
                                {post.completed?"Completed":"Pending"}
                            </p>
                        </td>
                     </tr>
                     ))}

                </tbody>

                   
            
            </table>
            )}
            <nav className='d-flex justify-content-center'>
                <ul className="pagination">
                    {
                        pages.map((page)=>(
                            <li className={
                                page=== currentPage?"page-item active":"page-item"
                            }
                            >
                                <p className='page-link'onClick={()=>{Pagination(page)}}>{page}</p>
                            </li>

                        ))
                    }

                </ul>
                </nav>                  
    </div>
  );
}
export default Pagination
