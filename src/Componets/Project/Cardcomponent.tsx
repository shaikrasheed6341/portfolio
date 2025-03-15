import React from "react";

interface CardcomponentProps {
  imgs?: string[]; 
  title?: string;
}

function Cardcomponent({ imgs, title }: CardcomponentProps) {
  return (
    <div className="bg-border-2  rounded-xl bg-gradient-to-tl from-violet-600 to-violet-200 p-3">
      <div className="flex justify-center gap-2">
        {imgs && imgs.length > 0 ? (
          imgs.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title ? title : "project"} image ${index + 1}`}
              width={150}
              height={52}
            />
            
          ))
        ) : (
          <img
            src="./invoice.svg"
            alt="Default invoice image"
            width={120}
            height={62}
          />
          
        )}
      </div>
      <div className="text-center mt-2">
        <p className="text-2xl font-bold text-gray-200">
          {title}
        </p>
      </div>
    </div>
  );
}

export default Cardcomponent;
