import ICON_MONEY from "@public/assets/icon-money.svg";
import ICON_BUILDING from "@public/assets/icon-building.svg";
import ICON_ANALYTICS from "@public/assets/icon-analytics.svg";
import ICON_SECURITY from "@public/assets/icon-security.svg";
import type {IDocumentsListProps} from "@utils/types";

export const lendingDocumentsList: IDocumentsListProps[] = [
	{
		title: 'Базові умови, ціна/тарифи',
		link: 'https://1drv.ms/b/s!ArUg779vc_bucN5PtUMkPV26JIc?e=w8q4Vb'
	}
]

export const advantagesList = [
	{
		icon: ICON_MONEY,
		desc:
			'Порушення провадження у справі про банкрутство,' +
			' застосування процедури санації фінансової установи - відсутні',
	},
	{icon: ICON_BUILDING, desc: 'Товариство не має відокремлених підрозділів'},
	{
		icon: ICON_ANALYTICS,
		desc: 'Рішення про ліквідацію фінансової установи - не' + ' приймалось',
	},
	{icon: ICON_SECURITY, desc: 'Наглядова рада товариства - відсутня'},
];
