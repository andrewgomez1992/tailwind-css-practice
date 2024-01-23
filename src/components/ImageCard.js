import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="container mx-auto">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by John Doe
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              3499
            </li>
            <li>
              <strong>Downloads: </strong>
              230
            </li>
            <li>
              <strong>Likes: </strong>
              2300
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
