import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DataBase from '@/DataBase';
import '@/Styles/Detail.scss';
import {_lenis} from '@/Script/Scroll.js';
import { motion } from "framer-motion"
import PageUtil from '@/Components/PageUtil';

export default function Detail() {
	let params = useParams();
	let idx = Number(params.id);
	let data = DataBase;
	let [prevIdx, setPrevIdx] = useState(0);
	let [nextIdx, setNextIdx] = useState(0);
	
	useEffect(() => {
		_lenis.scrollTo(0);
		(idx <= 0) ? setPrevIdx(data.length-1) : setPrevIdx(idx-1);
		(idx >= data.length-1) ? setNextIdx(0) : setNextIdx(idx+1);
		setTimeout(()=>{ _lenis.resize(); },10);
    });
	if (!data[idx]) {
		return <Redirect to="/" />
	}else {
		return (
			<>
			<motion.section 
			initial={{ opacity: 0,y : -100}}
            animate={{ opacity: 1,y : 0}}
            transition={{
                duration: 0.8,
                delay: 0.8,
            }} className="detailWrap">
				<h3 className="pageTitle">Work Detail</h3>
				<article>
					<span className="titleWrap">
						<span className="img">
							<img src={data[idx].thumbImg} alt="" />
						</span>
						<h4 className="title">{data[idx].title}</h4>
					</span>
					<span className="tag">{data[idx].tag}</span>
					<a href={data[idx].url} target="_blank" className="url">{data[idx].url}</a>
	
					<div className="descWrap">
						<p className="desc">{data[idx].mainDesc}</p>
						
						<div className="imgWrap">
							{	
								data[idx].images.map((_this,i)=>{
									return (
										<div key={i}>
											<img className="img" src={_this} alt="" />
											{ (data[idx].desc[i]) ? <p className="desc">{data[idx].desc[i]}</p> : '' }
										</div>
									)
								})
							}
						</div>
					</div>
				</article>
				
				<span className="btnWrap">
					<Link to={`/detail/${prevIdx}`} className="thumbBtn">
						<span className="imgWrap">
							<img src={data[prevIdx].thumbImg} />
						</span>
						<span className="txt">PREV WORK</span>
					</Link>
					<Link to="/#work" className="pBtn">뒤로가기</Link>
					<Link to={`/detail/${nextIdx}`} className="thumbBtn">
						<span className="imgWrap">
							<img src={data[nextIdx].thumbImg} />
						</span>
						<span className="txt">NEXT WORK</span>
					</Link>
				</span>
			</motion.section>

			<PageUtil />
			</>
		)
	}
}