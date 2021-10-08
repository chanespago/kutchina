import Adobo from '../assets/images/adobo.jpg';
import Arozcaldo from '../assets/images/arozcaldo.jpg'
import BBQ from '../assets/images/bbq.jpg';
import BistekTagalog from '../assets/images/bistektagalog.jpg';
import Bulalo from '../assets/images/bulalo.jpg';
import ChickenInasal from '../assets/images/chickeninasal.jpg';
import Dinuguan from '../assets/images/dinuguan.jpg';
import GinataangGulay from '../assets/images/ginataanggulay.jpg';
import LiempoInihaw from '../assets/images/inihawnaliempo.jpg';
import Kaldereta from '../assets/images/kaldereta.jpg';
import KareKare from '../assets/images/karekare.jpg';
import Kilawin from '../assets/images/kilawin.jpg';
import KrispiPata from '../assets/images/krispipata.jpg';
import LechonKawali from '../assets/images/lechonkawali.jpg';
import Lumpia from '../assets/images/lumpia.jpg';
import Palabok from '../assets/images/palabok.jpg';
import PancitGuisado from '../assets/images/pancitguisado.jpg';
import Sinigang from '../assets/images/sinigang.jpg';
import Sisig from '../assets/images/sisig.jpg';
import Sopas from '../assets/images/sopas.jpg';
import Tinola from '../assets/images/tinola.jpg';

const data = {
	products: [
		{
			key: 'adobo',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679617/kutchinarapp/adobo_f7szti.jpg',
			prodAlt: 'Adobo',
			prodName: 'Chicken Adobo',
			prodType: 'main' ,
			prodPrice: '130.00' ,
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false
		},
		{
			key: 'arozcaldo',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679620/kutchinarapp/arozcaldo_wijif1.jpg',
			prodAlt: 'Arozcaldo',
			prodName: 'Arozcaldo',
			prodType: 'siesta' ,
			prodPrice: '60.00',
			prodQTY: 1 ,
			transPrice: 60,
			triggered: false
		},
		{
			key: 'bbq',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679620/kutchinarapp/bbq_mdoer3.jpg',
			prodAlt: 'BBQ',
			prodName: 'BBQ (3 sticks)',
			prodType: 'main' ,
			prodPrice: '90.00',
			prodQTY: 1 ,
			transPrice: 90,
			triggered: false
		},
		{
			key: 'bistektagalog',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679620/kutchinarapp/bistektagalog_eysurc.jpg',
			prodAlt: 'BistekTagalog',
			prodName: 'Bistek Tagalog',
			prodType: 'main' ,
			prodPrice: '130.00',
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false
		},
		{
			key: 'bulalo',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679618/kutchinarapp/bulalo_ujp6hi.jpg',
			prodAlt: 'Bulalo',
			prodName: 'Bulalo',
			prodType: 'main' ,
			prodPrice: '130.00',
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false
		},
		{
			key: 'chickeninasal',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679621/kutchinarapp/chickeninasal_jpyfjf.jpg',
			prodAlt: 'ChickenInasal',
			prodName: 'Chicken Inasal',
			prodType: 'main' ,
			prodPrice: '130.00',
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false
		},
		{
			key: 'dinuguan',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679621/kutchinarapp/dinuguan_mxkqls.jpg',
			prodAlt: 'Dinuguan',
			prodName: 'Dinuguan',
			prodType: 'main' ,
			prodPrice: '130.00',
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false
		},
		{
			key: 'ginataanggulay',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679630/kutchinarapp/ginataanggulay_hpq9lf.jpg',
			prodAlt: 'GinataangGulay',
			prodName: 'Ginataang Gulay',
			prodType: 'main' ,
			prodPrice: '90.00',
			prodQTY: 1 ,
			transPrice: 90,
			triggered: false
		},
		{
			key: 'liempoinihaw',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679622/kutchinarapp/inihawnaliempo_bkycbh.jpg',
			prodAlt: 'LiempoInihaw',
			prodName: 'Liempo Inihaw',
			prodType: 'main' ,
			prodPrice: '170.00',
			prodQTY: 1 ,
			transPrice: 170,
			triggered: false
		},
		{
			key: 'kaldereta',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679629/kutchinarapp/kaldereta_hrjo1o.jpg',
			prodAlt: 'Kaldereta',
			prodName: 'Kaldereta',
			prodType: 'main' ,
			prodPrice: '180.00',
			prodQTY: 1 ,
			transPrice: 180,
			triggered: false
		},
		{
			key: 'karekare',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679625/kutchinarapp/karekare_dz49b5.jpg',
			prodAlt: 'KareKare',
			prodName: 'Kare-kare',
			prodType: 'main' ,
			prodPrice: '180.00',
			prodQTY: 1 ,
			transPrice: 180,
			triggered: false
		},
		{
			key: 'kilawin',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679625/kutchinarapp/kilawin_sqpkvr.jpg',
			prodAlt: 'Kilawin',
			prodName: 'Kilawin',
			prodType: 'main' ,
			prodPrice: '90.00',
			prodQTY: 1 ,
			transPrice: 90,
			triggered: false
		},
		{
			key: 'krispipata',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679636/kutchinarapp/krispipata_m7xqth.jpg',
			prodAlt: 'KrispiPata',
			prodName: 'Krispi Pata',
			prodType: 'main' ,
			prodPrice: '170.00',
			prodQTY: 1 ,
			transPrice: 170,
			triggered: false
		},
		{
			key: 'lechonkawali',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679633/kutchinarapp/lechonkawali_wanqbj.jpg',
			prodAlt: 'LechonKawali',
			prodName: 'Lechon Kawali',
			prodType: 'main' ,
			prodPrice: '210.00',
			prodQTY: 1 ,
			transPrice: 210,
			triggered: false
		},
		{
			key: 'lumpia',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679628/kutchinarapp/lumpia_gdapxo.jpg',
			prodAlt: 'Lumpia',
			prodName: 'Lumpia (4 pcs)',
			prodType: 'siesta' ,
			prodPrice: '120.00',
			prodQTY: 1 ,
			transPrice: 120,
			triggered: false
		},
		{
			key: 'palabok',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679627/kutchinarapp/palabok_lrjex5.jpg',
			prodAlt: 'Palabok',
			prodName: 'Palabok',
			prodType: 'siesta' ,
			prodPrice: '60.00',
			prodQTY: 1 ,
			transPrice: '60.00'},
		{
			key: 'pancitguisado',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679638/kutchinarapp/pancitguisado_rtyy6t.jpg',
			prodAlt: 'PancitGuisado',
			prodName: 'Pancit Guisado',
			prodType: 'siesta' ,
			prodPrice: '60.00',
			prodQTY: 1 ,
			transPrice: 60,
			triggered: false
		},
		{
			key: 'sinigang',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679636/kutchinarapp/sinigang_z7ousy.jpg',
			prodAlt: 'Sinigang',
			prodName: 'Sinigang',
			prodType: 'main' ,
			prodPrice: '210.00',
			prodQTY: 1 ,
			transPrice: 210,
			triggered: false
		},
		{
			key: 'sisig',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679629/kutchinarapp/sisig_bqmwt8.jpg',
			prodAlt: 'Sisig',
			prodName: 'Sisig',
			prodType: 'main' ,
			prodPrice: '210.00',
			prodQTY: 1 ,
			transPrice: 210,
			triggered: false
		},
		{
			key: 'sopas',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633679641/kutchinarapp/sopas_xzobqw.jpg',
			prodAlt: 'Sopas',
			prodName: 'Sopas',
			prodType: 'siesta' ,
			prodPrice: '60.00',
			prodQTY: 1 ,
			transPrice: 60,
			triggered: false
		},
		{
			key: 'tinola',
			prodImg: 'https://res.cloudinary.com/chanespago/image/upload/v1633681483/kutchinarapp/tinola_yoec8r.jpg',
			prodAlt: 'Tinola',
			prodName: 'Tinola',
			prodType: 'main' ,
			prodPrice: '130.00',
			prodQTY: 1 ,
			transPrice: 130,
			triggered: false
		}
	]
}

export default data