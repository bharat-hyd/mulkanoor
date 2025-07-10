import React from 'react'
import one from '../assets/consumer/one.JPG'
import two from '../assets/consumer/two.JPG'
import three from '../assets/consumer/three.JPG'

const Consumer = () => {
  return (
    <div className="p-10 pt-20 px-5 max-w-7xl mx-auto">
      {/* Title Section */}
      <div className="text-center mt-10 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Consumer Services</h1>
      </div>
      <div className="flex flex-col gap-8">
        {/* Two images in a row below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={one} 
              alt="Consumer Image 1" 
              className="w-full h-auto block" 
            />
            <p className="mt-4 text-left px-3 pb-4 text-gray-700 text-base">
              
              <span class="font-bold">Petrol and diesel bunk:</span> Society has been operating the petrol and diesel bunk with IOCL dealership since 1980. The petrol bunk is known for providing quality fuel

            </p>
          </div>          
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={two} 
              alt="Consumer Image 2" 
              className="w-full h-auto block" 
            />
            <p className="mt-4 text-left px-3 pb-4 text-gray-700 text-base">
              <span class="font-bold">Bharath gas:</span> As there was a problem for women in procuring firewood and its effects on women's health, society took bharat gas dealership in 2000 to provide safe cooking gas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consumer