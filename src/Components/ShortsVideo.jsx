import { Link } from "react-router-dom";
import DataBase from "@/DataBase";

function ShortsVideo() {
  let data = DataBase;
  return (
    <div className="shortsWrap">
      <article className="itemList">
        {data.map((_this, i) => {
          return (
            <figure className="item" key={i}>
              <img className="previewImg" src={_this.thumbImg} alt="" />
              <Link to={`/detail/${_this._id}`} className="txtWrap">
                <strong className="title">{_this.title}</strong>
                <span className="tag">{_this.tag}</span>
              </Link>
            </figure>
          );
        })}
      </article>
    </div>
  );
}
export default ShortsVideo;
