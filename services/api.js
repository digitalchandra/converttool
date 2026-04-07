const BASE_URL = process.env.NEXT_PUBLIC_API_URL
export async function getConverterContent(endpoint){

  try{

    const res = await fetch(`${BASE_URL}/${endpoint}`,{
      next:{ revalidate:60 }
    })

    if(!res.ok){
      throw new Error("Failed to fetch data")
    }

    return await res.json()

  }catch(error){

    console.error(error)

    return []

  }

}