'use client'
import Link from "next/link"
import { H3, H4 } from "../common/Typography"
import { usePathname } from "next/navigation"


const EpisodsCategory = [
    {
        title:'All',
        path:'/'
    },
    {
        title:'Design',
        path:'/design'
    },
    {
        title:'Development',
        path:'/development'
    },
    {
        title:'Business',
        path:'/dusiness'
    },
    {
        title:'Technology',
        path:'/technology'
    }
]

function CategoryHeader() {
    const pathname = usePathname()
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                <H3>All of our latest episodes</H3>
                <div>
                    <ul className="flex flex-wrap items-center space-x-6 space-y-3">
                    {
                        EpisodsCategory?.map((category, index)=>{
                            return(
                                <li key={index} className={`${pathname == category.path ? 'bg-yellow rounded-full p-4' : ''} hover:bg-yellow hover:rounded-full p-4 text-base`}>
                                    <Link href={category.path}>{category.title}</Link>
                                </li>
                            )
                        })
                        
                    }
                    </ul>

                </div>
            </div>

         </section>
    )
}

export default CategoryHeader