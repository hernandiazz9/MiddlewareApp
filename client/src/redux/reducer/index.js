import {
	LOGIN_OKEY,
	LOGOUT_OKEY,
	GET_JUNIORS,
	GET_COMPANIES,
	GET_LANGUAGES,
	GET_TECHNOLOGIES,
	GET_COMPANY_DETAILS,
	GET_PUBLICATIONS,
	GET_PUBLICATIONS_BY_ID,
} from '../types';

const inicialState = {
	loading: false,
	user: null,
	details: {},
	languages: [],
	technologies: [],
	juniors: [],
	companies: [],
	publications: [],
	publication: {},
	jobs: {
		data: [
			{
				img: 'https://www.reportur.com/wp-content/uploads/2020/09/desp-e1599536919110.jpg',
				company: 'despegar',
				title: 'frontend',
				country: 'argentina',
				city: 'buenos aires',
				dollar: false,
				salary: '60000',
				tech: ['javascript', 'react'],
				date: '10/31/2021',
			},
			{
				img: 'https://www.globant.com/sites/default/files/2021-04/Globant_.png',
				company: 'globant',
				title: 'backend',
				country: 'argentina',
				city: 'mendoza',
				dollar: false,
				salary: '60000',
				tech: ['node'],
				date: '10/30/2021',
			},
			{
				img: 'https://i.blogs.es/ba4666/emele/1366_2000.jpg',
				company: 'mercalibre',
				title: 'frontend',
				country: 'argentina',
				city: 'buenos aires',
				dollar: false,
				salary: '60000',
				tech: ['javascript', 'react', 'node'],
				date: '10/28/2021',
			},
			{
				img: 'https://www.globant.com/sites/default/files/2021-04/Globant_.png',
				company: 'globant',
				title: 'fullstack',
				country: 'argentina',
				city: 'cordoba',
				dollar: false,
				salary: '120000',
				tech: ['javascript', 'react', 'node'],
				date: '10/28/2021',
			},
			{
				img: 'https://i.blogs.es/ba4666/emele/1366_2000.jpg',
				company: 'mercadolibre',
				title: 'frontend',
				country: 'remote',
				city: '',
				dollar: true,
				salary: '1000',
				tech: ['javascript', 'react', 'node'],
				date: '10/28/2021',
			},
			{
				img: 'https://www.reportur.com/wp-content/uploads/2020/09/desp-e1599536919110.jpg',
				company: 'despegar',
				title: 'frontend',
				country: 'argentina',
				city: 'buenos aires',
				dollar: false,
				salary: '60000',
				tech: ['javascript', 'react'],
				date: '10/28/2021',
			},
			{
				img: 'https://i.blogs.es/ba4666/emele/1366_2000.jpg',
				company: 'Mercadolibre',
				title: 'backend',
				country: 'argentina',
				city: 'mendoza',
				dollar: false,
				salary: '60000',
				tech: ['node'],
				date: '10/25/2021',
			},
			{
				img: 'https://www.globant.com/sites/default/files/2021-04/Globant_.png',
				company: 'globant',
				title: 'frontend',
				country: 'argentina',
				city: 'buenos aires',
				dollar: false,
				salary: '60000',
				tech: ['javascript', 'react', 'node'],
				date: '10/28/2021',
			},
			{
				img: 'https://i.blogs.es/ba4666/emele/1366_2000.jpg',
				company: 'mercadolibre',
				title: 'fullstack',
				country: 'argentina',
				city: 'cordoba',
				dollar: false,
				salary: '120000',
				tech: ['javascript', 'react', 'node'],
				date: '10/25/2021',
			},
			{
				img: 'https://www.globant.com/sites/default/files/2021-04/Globant_.png',
				company: 'globant',
				title: 'frontend',
				country: 'remote',
				city: '',
				dollar: true,
				salary: '1000',
				tech: ['javascript', 'react', 'node'],
				date: '10/31/2021',
			},
		],
		filterData: [
			{
				img: 'https://www.reportur.com/wp-content/uploads/2020/09/desp-e1599536919110.jpg',
				company: 'despegar',
				title: 'frontend',
				country: 'argentina',
				city: 'buenos aires',
				dollar: false,
				salary: '60000',
				tech: ['javascript', 'react'],
				date: '10/31/2021',
			},
			{
				img: 'https://www.globant.com/sites/default/files/2021-04/Globant_.png',
				company: 'globant',
				title: 'backend',
				country: 'argentina',
				city: 'mendoza',
				dollar: false,
				salary: '60000',
				tech: ['node'],
				date: '10/30/2021',
			},
			{
				img: 'https://i.blogs.es/ba4666/emele/1366_2000.jpg',
				company: 'mercalibre',
				title: 'frontend',
				country: 'argentina',
				city: 'buenos aires',
				dollar: false,
				salary: '60000',
				tech: ['javascript', 'react', 'node'],
				date: '10/28/2021',
			},
			{
				img: 'https://www.globant.com/sites/default/files/2021-04/Globant_.png',
				company: 'globant',
				title: 'fullstack',
				country: 'argentina',
				city: 'cordoba',
				dollar: false,
				salary: '120000',
				tech: ['javascript', 'react', 'node'],
				date: '10/28/2021',
			},
			{
				img: 'https://i.blogs.es/ba4666/emele/1366_2000.jpg',
				company: 'mercadolibre',
				title: 'frontend',
				country: 'remote',
				city: '',
				dollar: true,
				salary: '1000',
				tech: ['javascript', 'react', 'node'],
				date: '10/28/2021',
			},
			{
				img: 'https://www.reportur.com/wp-content/uploads/2020/09/desp-e1599536919110.jpg',
				company: 'despegar',
				title: 'frontend',
				country: 'argentina',
				city: 'buenos aires',
				dollar: false,
				salary: '60000',
				tech: ['javascript', 'react'],
				date: '10/28/2021',
			},
			{
				img: 'https://i.blogs.es/ba4666/emele/1366_2000.jpg',
				company: 'Mercadolibre',
				title: 'backend',
				country: 'argentina',
				city: 'mendoza',
				dollar: false,
				salary: '60000',
				tech: ['node'],
				date: '10/25/2021',
			},
			{
				img: 'https://www.globant.com/sites/default/files/2021-04/Globant_.png',
				company: 'globant',
				title: 'frontend',
				country: 'argentina',
				city: 'buenos aires',
				dollar: false,
				salary: '60000',
				tech: ['javascript', 'react', 'node'],
				date: '10/28/2021',
			},
			{
				img: 'https://i.blogs.es/ba4666/emele/1366_2000.jpg',
				company: 'mercadolibre',
				title: 'fullstack',
				country: 'argentina',
				city: 'cordoba',
				dollar: false,
				salary: '120000',
				tech: ['javascript', 'react', 'node'],
				date: '10/25/2021',
			},
			{
				img: 'https://www.globant.com/sites/default/files/2021-04/Globant_.png',
				company: 'globant',
				title: 'frontend',
				country: 'remote',
				city: '',
				dollar: true,
				salary: '1000',
				tech: ['javascript', 'react', 'node'],
				date: '10/31/2021',
			},
		],
		activeFilters: {
			type: [],
			date: [],
			city: [],

			salary: [],
			tech: [],
		},
	},
};
const rootReducer = (state = inicialState, action) => {
	switch (action.type) {
		case LOGIN_OKEY:
			return { ...state, user: action.payload };

		case LOGOUT_OKEY:
			return { ...state, user: null };

		case GET_LANGUAGES:
			return { ...state, languages: action.payload };

		case GET_TECHNOLOGIES:
			return { ...state, technologies: action.payload };

		case GET_COMPANY_DETAILS:
			return {
				...state,
				details: action.payload,
			};

		case GET_JUNIORS:
			return {
				...state,
				juniors: action.payload,
			};

		case GET_COMPANIES:
			return {
				...state,
				companies: action.payload,
			};

		case GET_PUBLICATIONS:
			return {
				...state,
				publications: action.payload,
			};

		case GET_PUBLICATIONS_BY_ID:
			return {
				...state,
				publication: action.payload,
			};

		default:
			return state;
	}
};

export default rootReducer;
