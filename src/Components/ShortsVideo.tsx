import { Link } from "react-router-dom";

import DataBase from "@/DataBase";

export default function ShortsVideo() {
  return (
    <div className="shortsWrap">
      <article className="itemList">
        {DataBase.map((item) => (
          <figure className="item" key={item._id}>
            <img className="previewImg" src={item.thumbImg} alt={item.title} />
            <Link to={`/detail/${item._id}`}>
              <span className="txtWrap">
                <strong className="title">{item.title}</strong>
                <span className="tag">{item.tag}</span>
              </span>
            </Link>
          </figure>
        ))}
      </article>
    </div>
  );
}
