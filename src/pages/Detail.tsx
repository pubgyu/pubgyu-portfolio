import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Redirect, useParams } from "react-router-dom";

import PageUtil from "components/PageUtil";
import DataBase from "DataBase";
import { _lenis } from "script/Scroll";
import "styles/Detail.scss";

interface DetailParams {
  id: string;
}

export default function Detail() {
  const { id } = useParams<DetailParams>();
  const data = DataBase;
  const targetId = Number(id);
  const currentIndex = data.findIndex((item) => item._id === targetId);
  const currentItem = currentIndex >= 0 ? data[currentIndex] : undefined;
  const prevIndex = currentIndex <= 0 ? data.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex >= data.length - 1 ? 0 : currentIndex + 1;
  const prevItem = data[prevIndex];
  const nextItem = data[nextIndex];

  useEffect(() => {
    _lenis?.scrollTo(0);

    const timer = window.setTimeout(() => {
      _lenis?.resize();
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [targetId]);

  if (!currentItem) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8
        }}
        className="detailWrap"
      >
        <h3 className="pageTitle">Work Detail</h3>
        <article>
          <span className="titleWrap">
            <span className="img">
              <img src={currentItem.thumbImg} alt={currentItem.title} />
            </span>
            <h4 className="title">{currentItem.title}</h4>
          </span>
          <div className="tagWrap">
            {currentItem.tag.split(",").map((tagItem) => (
              <span className="tag" key={tagItem.trim()}>
                {tagItem.trim()}
              </span>
            ))}
          </div>
          {currentItem.url ? (
            <a href={currentItem.url} target="_blank" rel="noreferrer" className="url">
              {currentItem.url}
            </a>
          ) : null}

          <div className="descWrap">
            <p className="desc">{currentItem.mainDesc}</p>

            <div className="imgWrap">
              {currentItem.images.map((image, imageIndex) => (
                <div key={image}>
                  <img className="img" src={image} alt={`${currentItem.title} 이미지 ${imageIndex + 1}`} />
                  {currentItem.desc[imageIndex] ? (
                    <p className="desc">{currentItem.desc[imageIndex]}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </article>

        <span className="btnWrap">
          <Link to={`/detail/${prevItem._id}`} className="thumbBtn">
            <span className="imgWrap">
              <img src={prevItem.thumbImg} alt="이전 작업 썸네일" />
            </span>
            <span className="txt">PREV WORK</span>
          </Link>
          <Link to="/#work" className="pBtn">
            뒤로가기
          </Link>
          <Link to={`/detail/${nextItem._id}`} className="thumbBtn">
            <span className="imgWrap">
              <img src={nextItem.thumbImg} alt="다음 작업 썸네일" />
            </span>
            <span className="txt">NEXT WORK</span>
          </Link>
        </span>
      </motion.section>

      <PageUtil />
    </>
  );
}
