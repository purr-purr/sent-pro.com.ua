import Image from 'next/image';

import { COMPANY_CATCHPHRASE } from '@utils/const';

import s from './Intro.module.scss';

import INTRO_IMAGE from '@modules/home/assets/intro-poster.jpg';

const Intro = () => {
	return (
		<section className={s.container}>
			<article className={s.info}>
				<h1 className={s.infoTitle}>
					Перетворіть ваші <br />
					фінансові цілі у реальність
				</h1>
				<p className={s.infoDesc}>{COMPANY_CATCHPHRASE}</p>
			</article>

			<div className={s.poster}>
				<Image src={INTRO_IMAGE} alt="Home intro" />
			</div>
		</section>
	);
};

export default Intro;
