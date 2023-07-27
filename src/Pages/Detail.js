import { useParams } from 'react-router-dom';
import DataBase from '../DataBase';

export default function Detail() {
	let params = useParams();
	let idx = params.id;
	let data = DataBase;
	// console.log(params.id);
	return (
		<section className="detailWrap">
			<article>
				<span className="coverImgWrap">
					<h3>{data[idx].title}</h3>
					<img src={data[idx].thumbImg} alt="" />
				</span>
			</article>
        </section>
	);
}
