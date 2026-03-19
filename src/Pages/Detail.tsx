import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Redirect, useParams } from "react-router-dom";

import PageUtil from "Components/PageUtil";
import DataBase from "DataBase";
import { _lenis } from "Script/Scroll";
import "Styles/Detail.scss";

interface DetailParams {
  id: string;
}

export default function Detail() {
  const { id } = useParams<DetailParams>();
  const idx = Number(id);
  const data = DataBase;
  const currentItem = data[idx];
  const prevIdx = idx <= 0 ? data.length - 1 : idx - 1;
  const nextIdx = idx >= data.length - 1 ? 0 : idx + 1;

  useEffect(() => {
    _lenis?.scrollTo(0);

    const timer = window.setTimeout(() => {
      _lenis?.resize();
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [idx]);

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
          <span className="tag">{currentItem.tag}</span>
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
          <Link to={`/detail/${prevIdx}`} className="thumbBtn">
            <span className="imgWrap">
              <img src={data[prevIdx].thumbImg} alt="이전 작업 썸네일" />
            </span>
            <span className="txt">PREV WORK</span>
          </Link>
          <Link to="/#work" className="pBtn">
            뒤로가기
          </Link>
          <Link to={`/detail/${nextIdx}`} className="thumbBtn">
            <span className="imgWrap">
              <img src={data[nextIdx].thumbImg} alt="다음 작업 썸네일" />
            </span>
            <span className="txt">NEXT WORK</span>
          </Link>
        </span>
      </motion.section>

      <PageUtil />
    </>
  );
}
