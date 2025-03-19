interface CardcomponentProps {
  imgs?: string[];
  title?: string;
  github?: string;
  live?: string;
}

function Cardcomponent({ imgs, title, github, live }: CardcomponentProps) {
  return (
    <div className="border-2 rounded-xl bg-gradient-to-tl from-violet-600 to-violet-200 p-3">
      <div className="flex justify-center gap-2">
        {imgs && imgs.length > 0 ? (
          imgs.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title ? title : "project"} image ${index + 1}`}
              width={250}
              height={72}
              className="cursor-pointer pointer-events-none" // Prevents image from blocking clicks
            />
          ))
        ) : (
          <img
            src="/invoice.svg"
            alt="Default invoice image"
            width={120}
            height={62}
          />
        )}
      </div>
      <div className="text-center mt-2">
        <p className="text-3xl mb-3 font-bold text-gray-200">{title}</p>
      </div>
      <div className="flex space-x-6 justify-center relative z-10 pointer-events-auto">
        {github && (
          <div>
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">
              Github
            </a>
          </div>
        )}
        {github && live && <span>|</span>}
        {live && (
          <div>
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:underline">
              Live
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cardcomponent;