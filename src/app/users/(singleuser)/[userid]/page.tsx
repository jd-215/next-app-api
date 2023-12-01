import PageModal from "../../@modal/(..)user_info/[userid]/page"


function PageText({ params }: { params: { userid: string } }): React.ReactNode {
    console.log(params)

  return (
    <div>
        <PageModal params={params} />
      <div className="p-4 space-x-8 bg-gray-300">page {params.userid}</div>
        {/* <Counter /> */}
    </div>
  )
}

export default PageText
