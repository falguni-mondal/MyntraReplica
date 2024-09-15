import React from 'react'
import { Link } from 'react-router-dom';


const NavDropdown = ({ data, visibility }) => {
  const categoryColor = data[0].color;
  const categories = data[1];
  const [visible, setVisible] = visibility
  // const efgh = (e)=>{
  //   e.target.id === 'navcategory-bg' && setVisible(false)
  // }

  return (
    <div className={`navcategory-bg fixed ${visible ? 'visible' : 'invisible'} h-[86.8vh] top-[80px] left-0 w-full flex justify-center bg-[rgba(0,0,0,0.1)]`}>
      <div className="navcategory w-[85%] h-[70vh] bg-white p-4 px-8 rounded-sm">
        <ul className='category-list-container w-full h-full flex flex-col flex-wrap gap-1.5'>
          {
            categories.map(category => (
              <li key={category.cate_path.slice(1, category.cate_path.length)} className='w-1/5 px-2 mb-1.5 leading-none'>
                <Link className={`${categoryColor} font-bold text-[0.88rem] tracking-tight w-full inline-block pb-1.5`} to={category.cate_path}>
                  {category.cate_title}
                </Link>
                {
                  category.subCategory &&
                  <>
                    <ul className='mb-1.5 w-full'>
                      {
                        category.subCategory.map(subCat => (
                          <li className='w-full leading-none font-[assistant-regular]' key={subCat.subc_path.slice(1, subCat.subc_path.length)}>
                            <Link className='text-[0.88rem] py-1 w-full inline-block' to={subCat.subc_path}>{subCat.subc_title}</Link>
                          </li>
                        ))
                      }
                    </ul>
                    <span className='h-[1px] w-[50%] bg-[#0000003d] inline-block'></span>
                  </>
                }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default NavDropdown