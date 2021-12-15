import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export default function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(null);
  return (
    <div class="container mx-auto py-2">
      {title && <h1 class="text-xl font-bold mx-auto pt-10 pb-4">{title}</h1>}
      <div>
        {content.map((e, i) => (
          <div key={i}>
            <div
              className={`cursor-pointer flex flex-row justify-between items-center p-2 pb-0 font-bold ${
                expanded === i ? "bg-gray-200" : "bg-gray-100"
              }`}
              onClick={() =>
                setExpanded((currExpanded) => (currExpanded === i ? null : i))
              }
            >
              <p className="pb-0">{e.title}</p>
              {expanded === i ? <MdExpandLess /> : <MdExpandMore />}
            </div>
            <div
              className={`transition-height ease-in-out overflow-hidden ${
                expanded === i ? "h-full" : "h-0"
              }`}
            >
              <div className="p-2">
                <p dangerouslySetInnerHTML={{ __html: e.body }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
