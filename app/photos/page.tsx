import Image from 'next/image'

export async function getAllImages() {
  const res = await fetch(`https://api.slingacademy.com/v1/sample-data/photos`)
  return res.json()
}

export default async function Images() {
  const {photos} = await getAllImages();

  return (
      <div className="container mx-auto p-4">
        <ul className="divide-y divide-gray-300">
          {photos.map((photo: any) => (
              <li key={photo.id} className="py-4">
                <div className="flex">
                  <Image src={photo.url}
                         width={265}
                         height={120}
                         className="w-24 h-24 object-cover rounded-lg" alt={''} />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">Image 1</h2>
                    <p className="text-gray-500">Description of Image 1</p>
                  </div>
                </div>
              </li>
          ))}
        </ul>
      </div>
  )
}
