import { Component } from '@angular/core';
import { Mots } from 'src/modeles/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Words: Mots[];
  constructor() {
    this.Words = [
      {
        francais: 'à',
        lingala: 'na',
        exemple:'',
      },
      {
        francais: 'abaisser',
        lingala: "kokitisa,kolembisa,kosámbwisa,kosílisa lokúmu",
        exemple:'',
      },
      {
        francais: 'abandonner',
        lingala: 'botíki, bobóyi, bosundol',
        exemple:'Il a abandonné les siens: asundólí biloko bua ye. asundoli ba oyo ya ye',
      },
      {
        francais: 'abandonner ',
        lingala: 'kosundola like. sém. kotíka, kobóya . ',
        exemple:'Il a abandonné les siens: asundólí biloko bua ye. asundoli ba oyo ya ye',
      },
      {
        francais: 'abasourdir',
        lingala: ' kokomisa lokó, kozipa(koziba) matói like. sém. kozipa matói. 2 kokámwisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1 ces cris m’abasourdissent:  makelele maye mazalí kozipa ngáí matói. 2 ta réponse m’abasourdit: eyano na nayo ekámwísí ngáí'
      },
      {
        francais: 'abâtardir ',
        lingala: 'kobébisa, kosámbwisa, kokitisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abats ',
        lingala: 'bokítá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattage ',
        lingala: 'bokwéisi, bokáti, bobomi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattement ',
        lingala: 'bol¥mbi (nzóto)  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abatteur ',
        lingala: 'mokáti nzeté',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattis ',
        lingala: 'biloko bya káti ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattoir ',
        lingala: 'ebomelo-bibwele, ebomelo nyama ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattre ',
        lingala: ' kopkéisa (kokwéisa), kokáta, kobúka ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattu, ue ',
        lingala: 'a kolembe ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abbaye ',
        lingala: 'biloko bya káti ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abattis ',
        lingala: 'ndáko ya babé ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abbé ',
        lingala: 'nganganzámbe, sángó, labé, abé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abcès ',
        lingala: 'Litóngwáná, litóngáná, litúngáná, mónkole, ndalá, mbuma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abdication ',
        lingala: 'botíki bokonzi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abdiquer',
        lingala: 'kotíka, kosundola  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abdomen ',
        lingala: 'ebóbó, libumu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abeille ',
        lingala: 'nzói, monzói ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aberrant, ante ',
        lingala: 'a momesani te, -bé, -a mabé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aberration ',
        lingala: 'mabé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abhorrer ',
        lingala: 'kobóya, koyína  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abîme ',
        lingala: 'lobwakú',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abîmer',
        lingala: 'kobébisa, koboma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
     
      {
        francais: 'abject, ecte ',
        lingala: '-a boyini, -a bobóyi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abjurer ',
        lingala: 'koyángana, kowángana ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'ablation',
        lingala: 'bokáti, bolongol',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'ablution ',
        lingala: 'bosukoli, bolongoli botutu ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abnégation ',
        lingala: 'bomíkabi',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboiement',
        lingala: 'ligbóma, bogángi bwa mbwá',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abois (être aux -)  ',
        lingala: '(kozala na -) nkaká ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abolir (supprimer)',
        lingala: 'koboma (kolongola)',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abolition ',
        lingala: 'bobomi, bolongoli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abominable ',
        lingala: '-a nsomo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abomination  ',
        lingala: 'nsomo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abominer',
        lingala: 'koyina, kobóya ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abondamment ',
        lingala: 'míngi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abondance ',
        lingala: 'boíké, míngi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abonder ',
        lingala: 'kotónda, kofúluka ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abonné, ée ',
        lingala: 'aboné ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abonnement ',
        lingala: 'abondemá, abonemá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abonner ',
        lingala: 'kozwa abondemá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abord (d’) ',
        lingala: 'naíno, yambo ya máns¡  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abordable  ',
        lingala: '-lámu, -a malámu ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aborder ',
        lingala: ' kolobisa, kosolisa moto, kolobela, kosola mpÊ¡ ya ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abortif, ive  ',
        lingala: '-a kosopisa zémi, -a kolongolisa ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboutir ',
        lingala: 'kosúka, kokóma ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboutissement  ',
        lingala: 'súka, mbuma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboyer  ',
        lingala: 'kogbóma   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abracadabrant, ante  ',
        lingala: '-a loléngé, -a ndéngé ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abrégé (en)  ',
        lingala: 'na likwé, na bokúsé',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abréger',
        lingala: 'kokúsa, kokáta mokúsé',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abreuver   ',
        lingala: 'komelisa, konwísa',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abreuvoir ',
        lingala: 'emeliselo, enwíselo   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abréviation',
        lingala: 'bokúsé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abri   ',
        lingala: 'ebómbelo, ebómamelo,ekímelo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abriter ',
        lingala: 'súka, mbuma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abrogation',
        lingala: 'bobomi, bolongoli ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abroger ',
        lingala: 'koboma   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abrupt, upte',
        lingala: '-a botengemi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abruptement  ',
        lingala: 'mbálákáká  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abruti, ie  ',
        lingala: 'zóba, elémá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abrutir ',
        lingala: 'kokómisa zóba, kozóbisa ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absence',
        lingala: 'kutukúlu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absent, ente  ',
        lingala: 'mokutukúlu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absentéïsme  ',
        lingala: 'bokutukúlu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absenter (s’) ',
        lingala: 'kozánga, kozala te  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absolu, ue  ',
        lingala: '-a ntángo na ndelo -a ntángo na ntembe  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absolument   ',
        lingala: 'ntángo na ndelo, ntángo na ntembe ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absolution  ',
        lingala: 'bolímbisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absolutisme   ',
        lingala: 'bokonzi ndelo te',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absorbant, ante  ',
        lingala: '-a komele mái, emele mái  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absorber   ',
        lingala: 'komele, konwá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absorption   ',
        lingala: 'bomeli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absoudre  ',
        lingala: 'kolimbisa   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absous, oute   ',
        lingala: 'molimbisami, molímbámí  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstenir (s’)  ',
        lingala: 'kotíka, kokila   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstention   ',
        lingala: 'boboyi, bokili  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstentionnisme  ',
        lingala: 'bobóyi vÔ¡ti tô maponi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstentionniste   ',
        lingala: 'mobóyi vÔti   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstinence  ',
        lingala: 'ekila, ngizi, mongilo, bomípimi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstraction   ',
        lingala: 'súka, mbuma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboutissement  ',
        lingala: 'bolongoli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstraire  ',
        lingala: 'kotangola   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abstrait, aite  ',
        lingala: '-a bwányá, -a mayele ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aboutissement  ',
        lingala: 'súka, mbuma  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absurde  ',
        lingala: '(e)-zángá ntina, -a ntína te  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'absurdité ',
        lingala: 'bozángi ntína  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abus   ',
        lingala: 'lilei, lizímbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abuser   ',
        lingala: 'kolútisa   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abusif, ive   ',
        lingala: '-a bosáleli mabé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'abusivement  ',
        lingala: 'na lokútá, na moíbi, mabé ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acabit (du même -)    ',
        lingala: 'ndéngé yokÔ   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acacia  ',
        lingala: 'akasyá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'académicien, enne  ',
        lingala: 'moí-akademí  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'académie   ',
        lingala: 'akademí   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acajou   ',
        lingala: 'mokole, akazú  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acara, accra, akara ou akra  ',
        lingala: 'mokáté, akala  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acariâtre  ',
        lingala: '-a nkándánkándá   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acarien  ',
        lingala: 'liyanzi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acassa ou akassa   ',
        lingala: 'mokáté mwa masángú, akasa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accablant, ante   ',
        lingala: '-a kolembisa, -a nsomo, -a mpási, -a koleka ndelo  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accablement   ',
        lingala: 'monyoko, monyokoli,mondondo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accabler  ',
        lingala: 'konyokolo, kolekisa, kolembisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accalmie   ',
        lingala: 'kímyá, bobóto  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },

      {
        francais: 'accaparer   ',
        lingala: 'kowéla, kopunza, kozwa na nkó  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accapareur, euse  ',
        lingala: 'mopunzi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accéder   ',
        lingala: 'lilei, lizímbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'kokóma, kokoto, koyíngela  ',
        lingala: 'lilei, lizímbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accélérateur  ',
        lingala: 'etámbwisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accélérateur, trice  ',
        lingala: '-a bokólisi mbángu, -a bobakisi mbángu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accélérer   ',
        lingala: 'kokólisa mbángo, koléndisa mbángu   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accent    ',
        lingala: 'elembo,elobeli, mongóngó  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accentuer  ',
        lingala: 'kotíya elembo na nkomá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acceptable   ',
        lingala: '-a kondima ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },  {
        francais: 'acceptation  ',
        lingala: 'lilei, lizímbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accepter   ',
        lingala: 'kondima, kozwa, koyamba',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accès   ',
        lingala: 'nzelá, nzilá   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accession  ',
        lingala: 'bokómi, bokoti  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accident    ',
        lingala: 'likámá, asidá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accidenté, ée  ',
        lingala: '-a likámá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accidentellement  ',
        lingala: '(-a ) likámá, (-a) asidá ; moílikámá, moí-asidá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acclamation  ',
        lingala: 'milóló, byelele, nsáko, bokúmisi',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acclamer  ',
        lingala: 'kokúmisa, kobete maboko kogánga na nsáí  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acclimater  ',
        lingala: 'komesinisa, komesinya ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accolade ',
        lingala: 'ekopi, ezingi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoler  ',
        lingala: 'kosangisa, kosanginya  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accommodation   ',
        lingala: '  bomeseni, bomesenisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accommoder ',
        lingala: 'koengibinya, kolongibinya,kobongisa   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accompagnateur, trice  ',
        lingala: 'mokambi',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accompagnement ',
        lingala: 'bokambi, likambi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accompagner   ',
        lingala: 'kokamba   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accompli, ie   ',
        lingala: '(e)kokísámí, (e)bongísámí   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accomplir   ',
        lingala: 'kokokisa, kosála, kosílisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accomplissement [ ',
        lingala: 'bokokisi, bosúkisi, bosílisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accord   ',
        lingala: 'boyókani, bobémbani  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accord (d’) ',
        lingala: 'kondima   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accordéon  ',
        lingala: 'lindánda   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accordéoniste ',
        lingala: 'mobeti-lindánda   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accorder  ',
        lingala: 'kopésa, kolingisa, kobémbisa,koyókanisa, komípesa ,kobémbinya,kobémbisana   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoster ',
        lingala: 'koseme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoter  ',
        lingala: 'koyekemisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accouchée',
        lingala: 'mwasí wa bwakélé, bwakéléké,walékélé   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accouchement  ',
        lingala: 'boboti   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoucher ',
        lingala: 'kobota   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoucheur, euse  ',
        lingala: 'mobótisi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accouder (s’) ',
        lingala: 'koyekeme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accouplement',
        lingala: 'bosíbani   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoupler ',
        lingala: 'kosíbisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accourir  ',
        lingala: 'kokíma   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoutrement  ',
        lingala: 'moláto, eláteli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoster ',
        lingala: 'koseme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoster ',
        lingala: 'koseme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoster ',
        lingala: 'koseme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoster ',
        lingala: 'koseme   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoutrer ',
        lingala: 'kolátisa na ndéngé ya kosekisa   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoutumance  ',
        lingala: 'momeseno, limeseni, limesenyi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accoutumé (à l’) ',
        lingala: 'bó momeseno, na momeseno  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accra  ',
        lingala: 'akala   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accréditer ',
        lingala: 'kondima  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accréditif  ',
        lingala: 'lokásá-lifúta   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accroc  ',
        lingala: 'kpokoso,ekánámí  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accrochage ',
        lingala: 'likanga, libakú ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accrocher',
        lingala: 'kobáka, kokanga, kokákya   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accroire  ',
        lingala: 'kobúba, kokósa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accroissement  ',
        lingala: 'boyíkinyi, boyéi míngi, bokóli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accroître   ',
        lingala: 'koyíkinya, kokólisa, koyéisa míngi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accroupir (s’)',
        lingala: 'kokusama, kosotama, kosondama  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accueil   ',
        lingala: 'boyambi, bonkóndé, bonsalá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accueillant, ante  ',
        lingala: '-a bonsalá, -a bonkóndé,eyamba bapaya ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accueillir   ',
        lingala: 'koyamba, konyángela   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acculturé, ée  ',
        lingala: 'mondelendombe   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accumulateur  ',
        lingala: 'esanginyi lotilíki   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accumulation  ',
        lingala: 'lisangisi, lisanginyi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accumuler  ',
        lingala: 'kosangisa, kosanginya  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accusateur, trice  ',
        lingala: '-a botúbi, -a bofúndi, -a bokambi, motúbi, mofúndi, mokambi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accusation   ',
        lingala: 'bofúnfi, botúbi, bokambi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accusé, ée  ',
        lingala: 'mofúndami, motúbami,mokambemi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'accuser  ',
        lingala: 'kofúnda, kotúba, kokamba  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acéré, ée  ',
        lingala: '-pótú, -a míno, -a nsonge ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acétique   ',
        lingala: '-a mái ma ngai, -a ngai  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'achalandé, ée   ',
        lingala: '-a biloko ebelé, -a biloko míngi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'achalander ',
        lingala: 'kotíya biloko, kokotisa biloko  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acharnement   ',
        lingala: 'móléndé, moléndé, mbamba ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acharner (s’) ',
        lingala: 'koluka na móléndé, koluka nanzelá ínso, koléndisa ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'achat   ',
        lingala: 'esómbeli,ndombá,bosómbi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acheminer  ',
        lingala: 'komeme, kotínda, koyenda',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acheter ',
        lingala: 'kosómba   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acheteur, euse   ',
        lingala: 'mosómbi, kiliyá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'achèvement  ',
        lingala: 'bosílisi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'achoura     ',
        lingala: 'asúla  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acide ',
        lingala: 'kobúba, kokósa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'asíde ',
        lingala: 'kobúba, kokósa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acidifier ',
        lingala: 'kokomisa ngai tô asíde ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acidité  ',
        lingala: 'bongai  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acidulé, ée  ',
        lingala: '-a mwâ ngai  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acier   ',
        lingala: 'ebendé ekási ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acné  ',
        lingala: 'akiné ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acolyte',
        lingala: 'akolíte ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acompte   ',
        lingala: 'ndámbo, avási  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acoquiner (s’)  ',
        lingala: 'koyókana  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquérir ',
        lingala: 'kozwa, kosómba  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquiescement   ',
        lingala: 'bondimi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquiescer   ',
        lingala: 'kondima (mobimba)  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquis, ise ',
        lingala: 'lizwi, eleko  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquisition   ',
        lingala: 'bosómbi, bozwi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acquittement  ',
        lingala: 'bolóngisi, bolóngi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acte  ',
        lingala: '1.kofúta,kolóngisa,kokokisa, 2 monkandá, nkomá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aacteur, trice   ',
        lingala: 'mosani,mokeli   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'actif, ive',
        lingala: '-kási   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'action  ',
        lingala: 'ekela, ekelá   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'actionner   ',
        lingala: 'kotámbwisa, kopelisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'activement  ',
        lingala: 'na mpila, na bolingo, na mpíko  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'activer ',
        lingala: 'kotámbwisa mbángo, kokólisa mbángo, kokómisa makási  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'activité   ',
        lingala: 'mosálá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'actualité  ',
        lingala: 'sango  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'actuel, elle   ',
        lingala: '-a sika  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'actuellement  ',
        lingala: 'sikáwa, sikasikáwa, sikóyo, sikasikóyo, bébe, sasaípi,sasépi, na mói mwa lelo  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'acuité ',
        lingala: 'bopótú, nsÔnge  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aadage  ',
        lingala: 'lisɛsɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adaptable  ',
        lingala: '-a kolongibinya, -kolongobana, -a kokisana  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adaptateur ',
        lingala: 'elongobinya   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adaptation ',
        lingala: 'bomɛsɛni, bomɛsɛnisi, bolongibinyi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'additif, ive  ',
        lingala: '-a kobakema  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'addition   ',
        lingala: 'bobakisi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'additionner  ',
        lingala: 'kobakisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adduction  ',
        lingala: 'bobéndi mai   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adepte   ',
        lingala: 'mondimi, moyambi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adéquat, ate  ',
        lingala: '-a kolongobana  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adéquation ',
        lingala: 'bokokani, bolongobani   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adhérence  ',
        lingala: 'libándemi, libátemi, likangemi,lidátemi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adhérent, ente  ',
        lingala: 'molandi, moyambi, mobátemi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adhérer  ',
        lingala: 'kobándema,koyíngela na, kokÔ¡t¡ na  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adhésif, ive',
        lingala: 'datidati, daidai ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adhésion ',
        lingala: 'boyíngeli na, bokÔ¡ti na  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aadieu   ',
        lingala: 'moseso, eseseli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adjectif   ',
        lingala: 'libakemi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adjoindre  ',
        lingala: 'kosangisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adjoint, ointe   ',
        lingala: 'molandi, mosálisi, mosungi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adjudant   ',
        lingala: 'ázidá, ádjidá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adjurer   ',
        lingala: 'kobÔondela  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admettre ',
        lingala: 'koyamba, kondima   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'administrateur, trice ',
        lingala: 'moyángeli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'administration  ',
        lingala: 'eyángeli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'administrer   ',
        lingala: 'koyángela , kopésa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admirable   ',
        lingala: '-a lisími, -a bosími  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admirateur, trice ',
        lingala: 'mosími   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admiration  ',
        lingala: 'lisími, bosími   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admirer   ',
        lingala: 'kokámwa, kosíma   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admission  ',
        lingala: 'boyambi, bondimami   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admonestation ',
        lingala: 'lipáleli, lipámeli, lidosi, ligángeli, bopápeli, bopámeli, bodosi, bogángeli ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'admonester   ',
        lingala: 'kopálela, kopámela, kodosa,kogángela  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adolescence  ',
        lingala: 'bolenge, bonzéngá, boseka  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adolescent, ente  ',
        lingala: 'elenge, monzéngá, móseka  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adonner (s’)  ',
        lingala: 'komípesa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adopter  ',
        lingala: 'kosangola, kokamata mwana  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adoptif, ive   ',
        lingala: ' -a bosangolami,mosangoli,mokamati, mozwi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adoption  ',
        lingala: 'bosangoli, lisangoli, bokamati, bozwi mwana,bondimi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adorable  ',
        lingala: '-a bosími, -a lisími  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adorateur, trice  ',
        lingala: 'mokúmisi, mosími,mokúmbameli  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adorer  ',
        lingala: 'kokúmisa, kokúmbamela, ko(n)gumbamela  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adosser  ',
        lingala: 'koyekemisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adoucir ',
        lingala: 'kolɛmbisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adresse   ',
        lingala: 'ntoki,adelesi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adresser  ',
        lingala: 'koloba, kolobisa, kolobela,kotínda, kotóma, kotíndela,koloba na  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adroit, oite   ',
        lingala: ' -a ntoki ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adroitement   ',
        lingala: ' na ntoki ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aduler   ',
        lingala: ' kolɛlɛ, kolela ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adulte   ',
        lingala: ' mokóló ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adultère   ',
        lingala: ' bokáli, ekóbo, zambó  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adultérin, ine   ',
        lingala: ' makángo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'advenir   ',
        lingala: ' Kokpéla, kokwéla, kosálema  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adverbe   ',
        lingala: ' litɛmɛlɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adversaire  ',
        lingala: ' mbanda, mongúna wa lisano  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adverse   ',
        lingala: '  lisolongo , esúsu  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adversité   ',
        lingala: ' mawa ',
        // tslint:disable-next-line: max-line-length
        exemple:'restons unis dans l’adversité: tózala lisángá atá na (ntángo ya) bwálé.  '
      },
      {
        francais: 'aérer   ',
        lingala: ' kopɛpisa, koyíngisa (kolekisa) mpéma ',
        // tslint:disable-next-line: max-line-length
        exemple:'Aérer une chambre:kopɛpisa (koyíngisa mpéma tô mopɛpɛ na) eténi ya kolála. '
      },
      {
        francais: 'aérien, enne   ',
        lingala: ' -a mpéma, -a likoló , -a mpéma, -a mopɛpɛ ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1)un phénomène aérien : eloko ya likoló.  2)un animal aérien: nyama ya mopɛpɛ. 3) le transport aérien : talasipólo ya mopɛpɛ, '
      },
      {
        francais: 'aérodrome   ',
        lingala: ' -mwâ libándá lya mpɛpo  ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’aérodrome de Matadi: mwâ libándá lya mpɛ́po ya Matadi'
      },
      {
        francais: 'aérogare   ',
        lingala: ' gále ya mpɛ́po  ',
        // tslint:disable-next-line: max-line-length
        exemple:' l’aéroport d’Abidjan : libándá-mpɛ́po lya Abizá'
      },
      {
        francais: 'aéronautique  ',
        lingala: ' -zébi-mpɛ́po ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aéroport    ',
        lingala: ' libándá-mpp¡  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'affabilité   ',
        lingala: ' -a ntoki ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'affabilité ',
        lingala: ' bonkóndé, botósi, bobóto',
        // tslint:disable-next-line: max-line-length
        exemple:' parler avec affabilité'
      },
      {
        francais: 'affable   ',
        lingala: ' -a bobóto',
        // tslint:disable-next-line: max-line-length
        exemple:'Un air affable: elongi ya bobóto'
      },
      {
        francais: 'affabulation  ',
        lingala: ' -lokutá ',
        // tslint:disable-next-line: max-line-length
        exemple:' cette histoire est une pure affabulation : lisoló liye lizalí lokutá mpenzá.'
      },
      {
        francais: 'affabuler  ',
        lingala: ' kokósa, kobúba',
        // tslint:disable-next-line: max-line-length
        exemple:'cet homme affabule:  moto óyo azalí kokósa.'
      },
      {
        francais: 'affadir   ',
        lingala: ' kosalola ',
        // tslint:disable-next-line: max-line-length
        exemple:' affadir une sauce kosalola moswá (sÔsi).  '
      },
      {
        francais: 'affadissement   ',
        lingala: ' lisaloli ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'affaiblir',
        lingala: ' kolɛmbisa, koyéisa motaú  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'affaiblissement    ',
        lingala: ' bolɛmbi, bolɛmbú ',
        // tslint:disable-next-line: max-line-length
        exemple:'Affaiblissement du corps : bolɛmbi bwa nzóto'
      },
      {
        francais: 'affaire   ',
        lingala: ' likambo, ngambo,mombóngo, mombóngo  ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) cela ne me regarde pas : c’est son affaire:  etálí ngáí te: likambo lya ye. 2)  faire une bonne affaire : kosála mombóngo malámu, kotɛ́kɛ malámu. 3)  être dans les affaires: kosálá mombóngo. 4)ranger ses affaires'
      },
      {
        francais: 'affairer (s’)   ',
        lingala: 'komípésa, komítungisa, kotungisama  ',
        // tslint:disable-next-line: max-line-length
        exemple:'S’affairer sur un malad :  komítungisa mpo na mokoni (bokono) '
      },
      {
        francais: 'affairisme   ',
        lingala: ' lokóso la mbÔ¡ng¡  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'affairiste  ',
        lingala: ' moí-mombóngo wa lokóso  ',
        // tslint:disable-next-line: max-line-length
        exemple:' c’est un affairiste :  azalí moímombóngo wa lokosó'
      },
      {
        francais: 'affaissement',
        lingala: ' bokiti, bobúkani ',
        // tslint:disable-next-line: max-line-length
        exemple:' un affaissement de terrain :  bokiti bwa mabelé.'
      },
      {
        francais: 'affaisser (s’)   ',
        lingala: ' kokwéya makási,kokpâ,kokpéya ',
        // tslint:disable-next-line: max-line-length
        exemple:'le toit de la maison s’est affaissé: motondi mwa ndáko mokweyi makási. '
      },
      {
        francais: 'affaler (s’)   ',
        lingala: ' komíkpéisa,komíkwéisa, komíbwaka  ',
        // tslint:disable-next-line: max-line-length
        exemple:'S’affaler dans un lit: kotíka nzóto ekita na nsé na makási komíkpéisa na mbéto.'
      },
      {
        francais: 'affamé, ée  ',
        lingala: ' -a nzala (makási)  ',
        // tslint:disable-next-line: max-line-length
        exemple:'un lion affamé: nkoi ya nzala.'
      },
      {
        francais: 'affamer   ',
        lingala: ' koyókisa nzala ',
        // tslint:disable-next-line: max-line-length
        exemple:' affamer la population d’un pays: koyókisa bato ba ekólo nzala'
      },
      {
        francais: 'affectation    ',
        lingala: ' boluboli, liluboli ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) affectation au poste de directeur: boluboli na ebóngá ya dikitɛ́lɛ. '
      },
      {
        francais: 'affecter   ',
        lingala: '  kotínda, kolubola,kosálel, koyókisa mpasí, koyókisa mawa ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) ce fonctionnaire est affecté à Matadi : kaláka óyo bamótíndí/bamólubolí na. 2)  affecter une salle à la réunion : kosálela ndáko eye mpÊ¡ na likita. 3) la mort de ma mère m’a beaucoup affecté : liwá lya mamá wa ngáí eyókísákí ngáí mawa míngi'
      },
      {
        francais: 'affectif, ive   ',
        lingala: ' -a mayóki, -a bolingo  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'adroit, oite   ',
        lingala: ' -a ntoki ',
        // tslint:disable-next-line: max-line-length
        exemple:' la vie affective : bomoi bwa mayóki tô bwa bolingo '
      },
      {
        francais: 'affection   ',
        lingala: ' boling, mpási ',
        // tslint:disable-next-line: max-line-length
        exemple:'1)l’affection maternelle: bolingo bwa mamá. 2)  une affection cutanée: bokono bwa lomposo'
      },
      {
        francais: 'affectionner  ',
        lingala: ' kolinga míngi ',
        // tslint:disable-next-line: max-line-length
        exemple:' affectionner son enfant:  kolinga mwÉana wa yÉe míngi. '
      },
      {
        francais: 'affectueusement  ',
        lingala: ' na bolingo  ',
        // tslint:disable-next-line: max-line-length
        exemple:' la mère parle affectueusement à son enfant:  mamá azalí koloba na mwÉana na yÉe na bolingo'
      },
      {
        francais: 'affectueux, euse  ',
        lingala: ' -a bolingo míngi ',
        // tslint:disable-next-line: max-line-length
        exemple:'une parole affectueuse: liloba lya bolingo.'
      },
      {
        francais: 'affermir  ',
        lingala: ' koléndisa,kolénda, komílendisa ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) affermir un mur :koléndisa efelo. 2) son pouvoir s’affermit : bokonzi bwa yÉe bozalí kolénda.'
      },
      {
        francais: 'affermissement   ',
        lingala: ' bolendisi, lilendisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:' affermissement du pouvoir : bolendisi bwa bokonzi.'
      },
      {
        francais: 'affichage  ',
        lingala: ' etálisi ',
        // tslint:disable-next-line: max-line-length
        exemple:'affichage des résultats : etálisi bilembo'
      },
      {
        francais: 'affiche  ',
        lingala: ' litálisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une affiche électorale :litálisi lya boponi, lya voti '
      },
      {
        francais: 'afficher    ',
        lingala: ' kotálisa, koyébisa, kolakisa polélé, kotálisa, komonisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) afficher les résultats d’examens : koyébisa bilembo bya mamekano. 2)  afficher son mécontentement :  kolakisa polélé bobóyi. 3) cette fille s’affiche avec son amant : moséka óyo akomílakisa na mobáli wa ye.'
      },
      {
        francais: 'affiler   ',
        lingala: ' kopélisa, koseba ',
        // tslint:disable-next-line: max-line-length
        exemple:'affiler un couteau: koseba mbɛlí/kopelisa mbɛlí '
      },
      {
        francais: 'affilier (s’)  ',
        lingala: ' komíkotisa, komíkomisa, koíngela ',
        // tslint:disable-next-line: max-line-length
        exemple:'s’affilier à un parti politique :  komíkotisa na lingómbá lyoko lya politíki.'
      },
      {
        francais: 'affirmation  ',
        lingala: ' Bondimi ',
        // tslint:disable-next-line: max-line-length
        exemple:'une affirmation mensongère:  bondimi bwa lokutá'
      },
      {
        francais: 'affirmer   ',
        lingala: ' kondima, koloba polélé, koyébisa polélé,komonisa, kolakisa polélé, kotálisa polélé ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) j’affirme que tu te trompes : solo nandimí te ozalí kokósa. 2)  affirmer son autorité : komonisa bokonzi bwa ye. 3)  tu dois t’affirmer davantage : osɛngɛ́lí komímonisa polélé'
      },
      {
        francais: 'affliction  ',
        lingala: ' -a ntoki ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'affligeant, ante  ',
        lingala: '-a mawa, -a motéma mpási ',
        // tslint:disable-next-line: max-line-length
        exemple:' une nouvelle affligeante : sango ya mawa'
      },
      
      {
        francais: 'affliger   ',
        lingala: ' koyókisa mawa, koyókisa motéma mpási  ',
        // tslint:disable-next-line: max-line-length
        exemple:'cette nouvelle nous afflige : sango eye eyókisi (epési) bísó mawa '
      },
      
      {
        francais: 'affluence   ',
        lingala: ' boiké bwa bato  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une heure d’affluence : ngonga ya boiké bwa bato '
      },
      
      {
        francais: 'affluent    ',
        lingala: ' motímá, mongálá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'le Kasai est un affluent du Congo : Kasá i ezalí motíma mwa ebale Kongo'
      },
      
      {
        francais: 'affluer   ',
        lingala: ' kofúluka ',
        // tslint:disable-next-line: max-line-length
        exemple:' les clients affluent vers le marché : bakiliyá bazalí kofúluka o zándo.' 
      },
      
      {
        francais: 'affolement  ',
        lingala: ' bobángi makási  ',
        // tslint:disable-next-line: max-line-length
        exemple:'pas d’affolement!: bobángi tɛ́, kobánga tɛ́.'
      },
    
      {
        francais: 'affoler   ',
        lingala: ' kobúlinginya, kotámbwisa motó, koyéisa ligbómá ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) cet accident l’a affolé :  likámá liye litámbwísí ye mayɛ́lɛ. 2) ne nous affolons pas ! : tóbúlungana tɛ́/ tózwa ligbómá tɛ́. '
      },
      {
        francais: 'affranchi, ie  ',
        lingala: ' mokangolami, mokangwami  ',
        // tslint:disable-next-line: max-line-length
        exemple:'affranchi de l’esclavage :  alongwi na boómbo '
      },
      {
        francais: 'affranchi  ',
        lingala: '  kokangola, kolongola na boómbo/na nkaká, kokómisa nsomi ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) affranchir un esclave : kokangola moómbo, kolongola (moómbo) na boómbo/kokómisa moómbo, 2) affranchir une lettre : kotíya tÔ¥mb¥l¥ na monkandá'
      },
      {
        francais: 'affranchissement   ',
        lingala: '  bokangolami, bonsomi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) l’affranchissement d’un esclave : bokangolami bwa moómbo. 2) l’affranchissement d’une lettre :  botíí tɛ́mbɛlɛ na monkandá.'
      },
      {
        francais: 'affréter  ',
        lingala: ' kofútela mótuka (masúwa, mpɛ́pi) ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'affreusement  ',
        lingala: ' na nsomo ',
        // tslint:disable-next-line: max-line-length
        exemple:' cet homme a été affreusement assassiné: moto óyo babomí ye na nsomo.'

      },
      {
        francais: 'affreux, euse   ',
        lingala: ' -a nsomo ',
        // tslint:disable-next-line: max-line-length
        exemple:'un meurtre affreux: liwá lya nsomo '
      },

      {
        francais: 'affriolant, ante  ',
        lingala: ' -a mpósá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'des gestes affriolants, une robe affriolante:  bikela bya bopési mpósá'
      },

      {
        francais: 'affront  ',
        lingala: ' nsoni',
        // tslint:disable-next-line: max-line-length
        exemple:'subir un affront : koyóka nsÔ¡ni'
      },

      {
        francais: 'affrontement    ',
        lingala: ' etumba ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’affrontement de deux armées ennemies : bitumba bya mampingá mábalé.'
      },

      {
        francais: 'affronter   ',
        lingala: ' kobuna, kobunda  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) affronter un ennemi ou un danger : kobuna na mongúná tô na likámá. 2)  deux lutteurs s’affrontent :babuni bábalé bazali kobuna '

      },

      {
        francais: 'affubler   ',
        lingala: ' kolátalata ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) il est affublé d’un vieux costume :  alátílati kasáka ya kala. 2) s’affubler d’un vieux costume : komílatisa kazáka ya kala'
      },

      {
        francais: 'affût (à l’)   ',
        lingala: ' linongi nyama ',
        // tslint:disable-next-line: max-line-length
        exemple:'se mettre à l’affût d’un sanglier : konongo nsombo'
      },

      {
        francais: 'affûter   ',
        lingala: ' kopelisa, koseba ',
        // tslint:disable-next-line: max-line-length
        exemple:'affûter un couteau : kopelisa (koseba) mbɛlí '
      },

      {
        francais: 'africain, aine    ',
        lingala: ' -a Afríka ',
        // tslint:disable-next-line: max-line-length
        exemple:'une langue africaine, les peuples africains, les Africains: bato ba afríka, bÉana ba afríka'
      },
  
      {
        francais: 'africanisation  ',
        lingala: ' boafrikanizé ',
        // tslint:disable-next-line: max-line-length
        exemple:'africanisation des cadres : boafrikanisa bakonzi'
      },
  
      {
        francais: 'africaniser    ',
        lingala: ' koafrikanizé ',
        // tslint:disable-next-line: max-line-length
        exemple:'africaniser les cadres : koafrikanizé bakambi'
      },
 
      {
        francais: 'africanité   ',
        lingala: ' -a ntoki ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },

      {
        francais: 'Afrique  ',
        lingala: ' Afríka, Afilíka  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
    
      {
        francais: 'Afrique du Sud   ',
        lingala: ' Afríka ya Súdi tô Afríka ya nsé ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
     
      {
        francais: 'agaçant, ante    ',
        lingala: ' -a kopésa nkándá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'un bruit agaçant : makɛlɛ́lɛ ya kopésa nkándá'
      },
   
      {
        francais: 'agacement    ',
        lingala: ' nkándá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'éprouver de l’agacement : koyóka nkándá.'
      },
     
      {
        francais: 'agacer   ',
        lingala: ' kotúmola, koyókisa moto motéma nkándá  ',
        // tslint:disable-next-line: max-line-length
        exemple:' tu m’agaces !: ozalí kotúmola ngáí.'
      },
   
      {
        francais: 'âge   ',
        lingala: 'mbúla, mobú  ',
        // tslint:disable-next-line: max-line-length
        exemple:'quel âge as-tu ?  : ozalí na mibú (mbúla) bóní?'
     },  
      {
        francais: 'âgé, ée   ',
        lingala: ' a mbúla ebelé, mokóló, mpaka, mobangé',
        // tslint:disable-next-line: max-line-length
        exemple:'1) une personne âgée : moto wa mbúla ebelé, mokóló, mpaka, mobangé. 2) âgé de quinze ans : wa mibú zómi na mítano.'
      },
      {
        francais: 'agenda',
        lingala: ' manáka ',
        // tslint:disable-next-line: max-line-length
        exemple:' noter ses rendezvous dans un agenda : nakomaka na manáka ma ngáí makambo nakosála'
      },
      {
        francais: 'agenouiller   ',
        lingala: ' kofúkama  ',
        // tslint:disable-next-line: max-line-length
        exemple:'s’agenouiller pour prier : kofúkama mpÊ¡ na kosámbela'
      },
      {
        francais: 'agent    ',
        lingala: ' mosáli, azâ  ',
        // tslint:disable-next-line: max-line-length
        exemple:'agent agricole, agent de police : mosáli wa bilanga, (mosá li wa) pulúsi'
      },
      {
        francais: 'agglomération   ',
        lingala: ' lisangá lya bato, mbóka, engumba',
        // tslint:disable-next-line: max-line-length
        exemple:'des gens devant le stade : lisangá lya bato libosó lya libándá lya masano. 2) une agglomération urbaine :  (lisangá lya) bato ba engumba.'
      },
      {
        francais: 'agglomérer (s’)    ',
        lingala: ' kosangana libóké, koyángana libóké esíka yoko ',
        // tslint:disable-next-line: max-line-length
        exemple:'la foule s’agglomère devant les magasins de vêtements : bato baíké basangání libóké libosó lya magazíni ma bilambá '
      },
      {
        francais: 'agglutiner (s’)   ',
        lingala: 'kofinana, kokangana ',
        // tslint:disable-next-line: max-line-length
        exemple:' la foule s’agglutine devant le stade : bato baíké bafinání libosó lya libándá lya masano.'
      },
      {
        francais: 'aggravation  ',
        lingala: ' bongali, boyéi makási, botomboki ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’aggravation d’une maladie: botomboki bwa mpási, bongali bwa bokono'
      },
      {
        francais: 'aggraver  ',
        lingala: ' kongalisa, kotombokisa, koyéisa makási  ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) aggraver un mal : kongalisa bokono. 2) la maladie s’aggrave : bokono bongalí makási.'
      },
      {
        francais: 'agile  ',
        lingala: ' -a pɛ́pɛ́lɛ́',
        // tslint:disable-next-line: max-line-length
        exemple:' une démarche agile : etámboli ya pɛ́pɛ́lɛ́'
      },
      {
        francais: 'agilement  ',
        lingala: ' na pɛ́pɛ́lɛ́  ',
        // tslint:disable-next-line: max-line-length
        exemple:'marcher agilement : kotámbola (na) pɛ́pɛ́lɛ́.'
      },
      {
        francais: 'agilité  ',
        lingala: ' ndíbe, bonítóí ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’agilité du corps, des doigts : ndíbe ya nzóto, ya misapi'
      },
      {
        francais: 'agir  ',
        lingala: ' kosála, kokela ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) au lieu de parler il faut agir :esíká te óloba malámu ósála'
      },
      {
        francais: 'agissements  ',
        lingala: ' bisálásala, bisálélá ',
        // tslint:disable-next-line: max-line-length
        exemple:'je déteste ses agissements:  nayiní bisálásala (bisálélá) biye (naye)'
      },
      {
        francais: 'agitation  ',
        lingala: ' mobúlú,  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) agitation de l’eau : mobúlú mwa (ya) mái. 2) agitation estudiantine :  mobúlú mwa bayékoli '
      },
      {
        francais: 'agiter   ',
        lingala: ' koningisa, koningana,komítungisa mpámba',
        // tslint:disable-next-line: max-line-length
        exemple:'1) agiter un liquide : koningisa limái. 2)  l’eau s’agite : mái mazalí koningana. 3) ce nest pas la peine de s’agiter : komí tungisa ezalí na ntína tɛ́'
      },
      {
        francais: 'agneau   ',
        lingala: 'mɛ́mɛ́, mpaté,kondolo, mpatá,',
        // tslint:disable-next-line: max-line-length
        exemple:'viande d’agneau : nyama (mosuní mwa) ya mɛ́mɛ́, nyama ya kondolo, nyama (mosuni mwa) ya mpatá'
      },
      {
        francais: 'agnelet  ',
        lingala: ' mɛ́mɛ́-mwana, kondolo-mwana,mpáté-mwÉana ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'agnelle  ',
        lingala: ' mɛ́mɛ́-mwasi, kondolo-mwasi,mpáté-mwasi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'agonie   ',
        lingala: ' mpásí ya liwá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'être à l’agonie : kobuna (kobunda) na mpási ya liwá.'
      },
      {
        francais: 'agoniser   ',
        lingala: ' kobuna na liwá, kobunda na liwá, kokóma na súka  ',
        // tslint:disable-next-line: max-line-length
        exemple:' le régime politique agonise : bokonzi bokómí na súka'
      },
      {
        francais: 'agouti  ',
        lingala: ' ngbuo, ngwo, agutí  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une sauce à l’agouti: súpu elámbemí na mosuni mwa ngbuo'
      },
      {
        francais: 'agrafe   ',
        lingala: ' ekangya, pɛ́ngɛlɛ, pɛ́ngi  ',
        // tslint:disable-next-line: max-line-length
        exemple:' agrafe de bureau :  pɛ́ngɛlɛ ya biló'
      },
      {
        francais: 'agrafeuse   ',
        lingala: ' likangya ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'agraire  ',
        lingala: ' -a mabelé tô -a bilanga ',
        // tslint:disable-next-line: max-line-length
        exemple:'une loi agraire: mobéko motálí mabelé, mobéko motálí bilanga. '
      },
      {
        francais: 'agrandir  ',
        lingala: ' kokólisa,  kokóla ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) agrandir une maison :kokólisa ndáko, kokyéisa ndáko. 2) la famille s’est agrandie libóta liyéi linÔ¥n¥, libóta likólí.        :        '
      },
      {
        francais: 'agréable  ',
        lingala: ' -a bosepelisi, -lámu, -a kitoko  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une musique agréable: miziki mya kitoko.        '
      },
      {
        francais: 'agréablement  ',
        lingala: 'malámu, na bosepelisi ',
        // tslint:disable-next-line: max-line-length
        exemple:' ta visite me surprend agréablement : lipaya lya ye esepélísí míngi.'
      },
      {
        francais: 'agréer   ',
        lingala: ' kondima ',
        // tslint:disable-next-line: max-line-length
        exemple:'agréer une demande: kondima lisɛ́ngi.'
      },
      {
        francais: 'agrément  ',
        lingala: ' bondimi ',
        // tslint:disable-next-line: max-line-length
        exemple:'obtenir l’agrément du ministre :  kozwa bondimi bwa (ya) minístɛlɛ.'
      },
      {
        francais: 'agrémenter  ',
        lingala: ' kokémbisa',
        // tslint:disable-next-line: max-line-length
        exemple:'un conte agrémenté de chansons:  lisapo likémbisami na nzémbo.'
      },
      {
        francais: 'agresser   ',
        lingala: ' kotúmola, kobunisa, kobundisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'agresser un passant: kotúmola (kobunisa) moleki nzelá.'
      },
      {
        francais: 'agresseur   ',
        lingala: ' motúmoli, mobunisi, mobundisi',
        // tslint:disable-next-line: max-line-length
        exemple:'reconnaître un agresseur : koyéba motumoli (mobunisi, mobundisi).'
      },
      {
        francais: 'agressif, ive    ',
        lingala: '-a matúmoli, -a kobunisa, -a kobundisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'une parole agressive : liloba lya kotúmola       '
      },
      {
        francais: 'agressivement   ',
        lingala: ' na ndéngé ya litúmolí  ',
        // tslint:disable-next-line: max-line-length
        exemple:'répondre agressivement à une question : koyanola na nkándá na motúná      '
      },
      {
        francais: 'agriculteur, trice   ',
        lingala: ' molóni, mosáli-bilanga ',
        // tslint:disable-next-line: max-line-length
        exemple:'mon oncle est agriculteur : nÔ¡k¡ wa ngáí azali molóni (mosáli-bilanga).        '
      },
      {
        francais: 'agriculture  ',
        lingala: ' mosálá mwa mabelé, (mosálá mwa) bilanga ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’agriculture est la principale richesse de ce pays: (mosála mwa) bilanga bizalí nkita ya libosó ya mbóka eye.        '
      },
      {
        francais: 'agripper   ',
        lingala: ' kokanga, komíkanga na  ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) il m’a agrippé à la chemise : akangí ngáí makási na simísi. 2) l’enfant s’agrippe à la robe de sa mère: mwana amíkangí makási na lobi ya mamá wa ye        '
      },
      {
        francais: 'agronome   ',
        lingala: ' nganga-milóna  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'agronomie   ',
        lingala: ' zébi-milóna, zébi-bilanga ',
        // tslint:disable-next-line: max-line-length
        exemple:'étudier l’agronomie : koyékola zébi-milóna. '
      },
      {
        francais: 'adroit, oite   ',
        lingala: ' -a ntoki ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'agrumes   ',
        lingala: ' bondímo, malálá ',
        // tslint:disable-next-line: max-line-length
        exemple:' cultiver des agrumes : kolóna (kokóna) mandímo.        '
      },
      {
        francais: 'aguerrir   ',
        lingala: ' koléndisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'la souffrance l’a aguerri :mpási (minyoko) eléndisaka'
      },
      {
        francais: 'aguets (aux -)   ',
        lingala: ' na bonongi, na bokɛ́ngi ',
        // tslint:disable-next-line: max-line-length
        exemple:'le chasseur est aux aguets : moí-bokila azalí na bokÔ¥ngi.        '
      },
      {
        francais: 'aguichant, ante  ',
        lingala: ' mobɛ́mbi, - a kobɛ́mbɛ ',
        // tslint:disable-next-line: max-line-length
        exemple:' une fille aguichante  : móseka mobɛ́mbi. '
      },
      {
        francais: 'aguicher   ',
        lingala: ' kolɛ́tɛ, kobɛ́mbɛ ',
        // tslint:disable-next-line: max-line-length
        exemple:'cette fille aguiche les garçons : móseka óyo azalí kolɛ́tɛ banzénga.        '
      },
      {
        francais: 'aguicheur, euse  ',
        lingala: ' -a kolɛ́tɛ, molɛ́ti  ',
        // tslint:disable-next-line: max-line-length
        exemple:'un regard aguicheur :  etáleli ya kolɛ́tɛ.        '
      },
      {
        francais: 'ahuri, ie   ',
        lingala: ' -a bokámwisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'je suis ahuri: sango eye ezalí kokámwisa.        '
      },
      {
        francais: 'ahurissant, ante    ',
        lingala: ' -kokámwa ',
        // tslint:disable-next-line: max-line-length
        exemple:'cette nouvelle est ahurissante:  sango ya koká mwa '
      },
      {
        francais: 'aide   ',
        lingala: ' lisungi, lisálisi, ligamisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) apporter une aide à qqn :  kosálisa (kosunga) moto. 2) prendre un aide pour accomplir une tâche difficile :  kozwa mosálisi mpo ya kosála mosálá mokási.        '
      },
      {
        francais: 'aider [ede]   ',
        lingala: ' kosálisa, kosunga, kogamisa   ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) viens m’aider ! :  yáká kosálisa ngáí. 2) s’aider de sa canne : komísálisa na língénda. 3)  nous devons nous aider : tosɛngɛ́lí kosalisana bísó na bísó.        '
      },
      {
        francais: 'aïeul, aïeule, aïeuls, aïeules   ',
        lingala: ' nkoko ',
        // tslint:disable-next-line: max-line-length
        exemple:'voici l’aïeul ! : tálá nkoko ye óyo        '
      },
      {
        francais: 'aïeux  ',
        lingala: ' bankoko ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aigle  ',
        lingala: ' engondó, ewango',
        // tslint:disable-next-line: max-line-length
        exemple:' '
      },
      {
        francais: 'aigre  ',
        lingala: ' -a ngai ',
        // tslint:disable-next-line: max-line-length
        exemple:'un vin aigre : víno (ya) ngai.        '
      },
      {
        francais: 'aigreur   ',
        lingala: ' ngai  ',
        // tslint:disable-next-line: max-line-length
        exemple:'aigreur d’un fruit : ngai ya mbuma'
      },
      {
        francais: 'aigri, ie  ',
        lingala: ' mabé, -a nkándá ',
        // tslint:disable-next-line: max-line-length
        exemple:' une personne aigrie : moto wa nkándá.  '
      },
      {
        francais: 'aigrir  ',
        lingala: ' kokómisa ngai, nkándá nkándá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’échec l’a aigri : kopola ekomisa ye nkanda nkanda'
      }, {
        francais: 'aigu, uë   ',
        lingala: ' -pótú, -a nsonge, -a mino  ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) un couteau aigu: mbɛlí epótú, mbɛlí ya mino, mbɛlí epelí. 2) une voix aiguë :  mongóngó likoló. 3) une douleur aiguë: mpási ekási, mpási ya makási        '
      }, {
        francais: 'aiguille   ',
        lingala: ' ntonga ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'aiguiller   ',
        lingala: ' kotínda ',
        // tslint:disable-next-line: max-line-length
        exemple:'aiguiller un enfant vers un métier manuel : kotínda mwana na mosála mwa maboko.        '
      }, {
        francais: 'aiguiser   ',
        lingala: ' koseba, kopelisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'aiguiser un couteau: koseba (kopelisa) mbɛlí '
      }, {
        francais: 'aiguisoir   ',
        lingala: ' esebi, epelisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'ail  ',
        lingala: ' áyi ',
        // tslint:disable-next-line: max-line-length
        exemple:'une bouche qui sent l’ail:  monoko mokolumba solo ya áyi.         '
      }, {
        francais: 'aile   ',
        lingala: ' lipapú ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) l’aile d’un oiseau : lipapú lya ndɛkɛ. 2)  les ailes d’un avion : mapapú ma mpɛ́po.        '
      }, {
        francais: 'ailé, ée  ',
        lingala: '-a lipapú, -a mapapú',
        // tslint:disable-next-line: max-line-length
        exemple:' un insecte ailé :  epimbwélá'
      }, {
        francais: 'ailleurs   ',
        lingala: ' esíká esúsu',
        // tslint:disable-next-line: max-line-length
        exemple:'aller ailleurs : kokɛndɛ esíká esúsu'
      }, {
        francais: 'ailleurs (d’)   ',
        lingala: ' kútu, kotó, gutú ',
        // tslint:disable-next-line: max-line-length
        exemple:' je ne vous recevrai pas et d’ailleurs je serai absent : nakoyamba bíno te mpé kútu nakozala te.        '
      }, {
        francais: 'aimable   ',
        lingala: ' -lámu, -a bolingo  ',
        // tslint:disable-next-line: max-line-length
        exemple:' une personne aimable : moto molámu, moto wa bolingo.        '
      }, {
        francais: 'aimant   ',
        lingala: ' emá ',
        // tslint:disable-next-line: max-line-length
        exemple:' une personne aimante : moto wa kolinga, moto wa bolingo.        '
      }, {
        francais: 'aimer    ',
        lingala: ' kolinga,komílinga,kolingana ',
        // tslint:disable-next-line: max-line-length
        exemple:'1)  aimer ses enfants, aimer la musique : kolinga bana ba ye ; kolinga mizíki. 2)  s’aimer bien dans tel ou tel vêtement : des fiancés qui s’aiment passionnément : babandemi balingání míngi.        '
      }, {
        francais: 'aîné, ée  ',
        lingala: ' kulútu, motómólo, motúmóló,yayá  ',
        // tslint:disable-next-line: max-line-length
        exemple:' le fils aîné ; l’aîné de la famille : motómóló/motúmóló (wa) mobáli, (n)kulútu (wa) mobáli, yayá (wa) mobáli, motómóló/motúmóló wa libóta, kulútu wa libóta, yayá wa libóta, mwÉana wa libosó na libóta.        '
      }, {
        francais: 'aînesse   ',
        lingala: 'bokóló ',
        // tslint:disable-next-line: max-line-length
        exemple:'!) droits d’aînesse : makokí ma mokóló.        '
      }, {
        francais: 'ainsi  ',
        lingala: ' bôngó,lokóla,bó ,mpé lisúsu, mpé',
        // tslint:disable-next-line: max-line-length
        exemple:'1)continuez à travailler ainsi : kóbáni (bókóba) kosálá bôngó. 2) ainsi que vous me l’avez demandé:  lokóla bosɛ́ngɛ́kí ngái (bó botúnákí ngáí). 3) la mère ainsi que les enfants, le matin ainsi que le soir : mamá mpé bána, na ntongo mpé na mpókwa.'
      }, {
        francais: 'air   ',
        lingala: ' mpɛ́ma, mopɛpɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) prendre l’air : kozwa mopɛpɛ. 2) avoir l’air triste : kozala na elongi ya mawa.'
      }, {
        francais: 'aire ',
        lingala: 'etando ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’air d’atterrissage des avions : etando ya bokiti bwa mpɛ́p¡.        '
      }, {
        francais: 'aisance    ',
        lingala: ' bolámu, nsɛi  ',
        // tslint:disable-next-line: max-line-length
        exemple:' vivre dans l’aisance : kobíka na nsɛi, kobíka malámu.        '
      }, {
        francais: 'aisance (lieux d’)  ',
        lingala: ' zongo, esumbelo, kabinɛ́ ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'aise    ',
        lingala: ' bolámu, malámu  ',
        // tslint:disable-next-line: max-line-length
        exemple:'être à l’aise: kozala malámu, kozala na mpási tɛ́'
      }, {
        francais: 'aisé, ée  ',
        lingala: '  -a bolɛmbú, -a mpási tɛ́, -taú  ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) un travail aisé : mosála mwa bolɛmbú(mosálá mwa mpási tɛ́)        '
      }, {
        francais: 'aisément  ',
        lingala: ' na bolɛmbú,na pɛtɛ, na nsɛi',
        // tslint:disable-next-line: max-line-length
        exemple:' réussir aisément : kolónga na mpete.   '
      }, {
        francais: 'aisselle    ',
        lingala: ' lisásámbá, lisápusapu ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'ajourner   ',
        lingala: ' kozóngisa sima , kozóngisa ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) ajourner une décision :  kozóngisa sima mokán. 2) ajourner un étudiant :  kozóngisa moyékoli.        '
      }, {
        francais: 'ajouter   ',
        lingala: ' kobakisa',
        // tslint:disable-next-line: max-line-length
        exemple:'ajouter du sel et du piment à la viande : kobakisa móngwa mpé pilipíli na nyama.        '
      }, {
        francais: 'ajustement  ',
        lingala: ' boɛngibinyi, bolongibinyi, bokokanisi ',
        // tslint:disable-next-line: max-line-length
        exemple:' ajustement des prix : boɛngibinyi bwa ntálo.        '
      }, {
        francais: 'ajuster   ',
        lingala: ' koɛngibinya, kolongibinya, kososolo,  kob¡ngisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) ajuster un prix : kolongibinya ntálo . 2) ajuster une antilope :  kososolo mbólókó. 3) ajuster un vêtement : kobongisa elambá '
      }, {
        francais: 'ajusteur   ',
        lingala: ' motúli-bibendé  ',
        // tslint:disable-next-line: max-line-length
        exemple:' le métier d’ajusteur : mosálá mwa motúli-bibendé        '
      }, {
        francais: 'akara  ',
        lingala: ' akalá',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'akassa   ',
        lingala: ' akasa, mokáté mwa masángú  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'akra  ',
        lingala: ' akala, mokáté ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'alambiqué, ée   ',
        lingala: ' -a mobúlú, -a mokakatano  ',
        // tslint:disable-next-line: max-line-length
        exemple:' un raisonnement alambiqué :  makanisi ma mobúlú'
      }, {
        francais: 'alanguir    ',
        lingala: ' kolɛmbisa   ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) la maladie l’a alangui :  bokono bolɛmbísí ye . 2) s’alanguir au soleil :  kolɛmbɛ na mói.        '
      }, {
        francais: 'alarmant, ante   ',
        lingala: ' -a kobángisa, -a bobángisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une nouvelle alarmante : sango ya kobángisa.         '
      }, {
        francais: 'alarme  ',
        lingala: ' bobángisi, libángisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) donner l’alarme: kopésa libángisi. 2)  une fausse alarme: bobángi bwa lokutá.'
      }, {
        francais: 'alarmer',
        lingala: ' kobángisa ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) cette nouvelle a alarmé la population: sango eye ebángisi bato. 2) population s’est alarmée : bato babángákí.        '
      }, {
        francais: 'albinos ',
        lingala: ' ndúndu, elúmbú, mbunzú',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'album   ',
        lingala: 'alibomi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'albumine   ',
        lingala: ' alibiminɛ ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’albumine dans le sang: alibiminɛ  na makilá.         '
      }, {
        francais: 'alcool   ',
        lingala: 'lotoko, ngbáko, álɛgɛ , abímbí, angɛ́nɛ́, alikole, ',
        // tslint:disable-next-line: max-line-length
        exemple:'désinfecter à l’alcool : kosukola (kolongola mikolobɛ) na alikÔ¡le'
      }
      , {
        francais: 'alcool   ',
        lingala: 'masanga ma mÔ¡t¡, masanga makás',
        // tslint:disable-next-line: max-line-length
        exemple:' boire de l’alcool : komɛlɛ lotoko.'
      }, {
        francais: 'alcoolique  ',
        lingala: '  -a lotoko, -a ngbáko, -a alikolɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'alcoolique  ',
        lingala: '   molángi, molángwi, momɛli-masanga  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une personne alcoolique : molángwi, molángi masanga.        '
      },
      {
        francais: 'alcoolisé, ée   ',
        lingala: ' (-a) makási, -a lotoko ',
        // tslint:disable-next-line: max-line-length
        exemple:'une boisson alcoolisée : masanga makási        '
      }, {
        francais: 'alcooliser   ',
        lingala: ' kotíya lotoko tô alikolɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:'s’alcooliser à la bière :  kolánga tô kolángwa byɛ́lɛ.'
      }, {
        francais: 'alcoolisme   ',
        lingala: ' bolángi, bolángwi, molángwá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'alcoolisme aigu : bolángilangi, milángwá.'
      }, {
        francais: 'alcootest   ',
        lingala: ' emɛko alikoli, emɛkɛli alikoli ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) subir l’alcootest : kosálisa emɛko alikoli'
      }, {
        francais: 'alentours   ',
        lingala: ' nzínganzínga, zóngázónga, zíngázíngá ',
        // tslint:disable-next-line: max-line-length
        exemple:' les alentours d’une ville : nzíngánzíngá ya engumba        '
      }, {
        francais: 'alerte  ',
        lingala: ' -a bokébi, -a ekéngé ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) jeune homme alerte: monzéngá wa bokébi. bokébisi. 2) donner l’alerte: kokébisa        '
      }, {
        francais: 'alerter   ',
        lingala: ' kokébisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'alerter la population, l’opinion :  kokébisa bato        '
      }, {
        francais: 'alevin  ',
        lingala: ' mpóndé, ndakála  ',
        // tslint:disable-next-line: max-line-length
        exemple:' il est interdit de pêcher l’alevin : epekísámí kolob mpóndé.        '
      }, {
        francais: 'alevinage   ',
        lingala: ' bobokolo mpóndé ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'aleviner   ',
        lingala: ' kotóndisa mái na mpóndé (ndakála',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'Algérie   ',
        lingala: ' Alizelî',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'Algérien  ',
        lingala: ' -a Alizelî, moíalizelí  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'algèbre  ',
        lingala: ' alizɛ́bɛlɛ',
        // tslint:disable-next-line: max-line-length
        exemple:'un cours d’algèbre: litéya lya alizɛ́bɛlɛ.         '
      }, {
        francais: 'aliénation   ',
        lingala: ' nkabo,boómbo, boúmbu, boínga,ligbómá, libómá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) l’aliénation d’une propriété: nkabo ya mabelé tô lopángo. 2) aliénation des peuples colonisés: boómbo bwa bato bakonzámáki na mindɛ́lɛ́. 3) aliénation mentale : bobúngisi mayɛ́lɛ́'
      }, {
        francais: 'aliéné, ée   ',
        lingala: ' (moto wa) libgómá/libómá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'aliéner   ',
        lingala: ' kokaba na bolingi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'alignement  ',
        lingala: ' molongo, alimá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'alignement des élèves : molongo mwa bayékoli.        '
      }, {
        francais: 'aligner   ',
        lingala: ' kotíya na molongo  ',
        // tslint:disable-next-line: max-line-length
        exemple:'les élèves s’alignent devant la classe : bayékoli batɛ́lɛmí molongo libosó lya kelási.        '
      }, {
        francais: 'aliment  ',
        lingala: ' biléi, biloko bya boléi, bilyá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'préparer les aliments avant de les faire cuire : kolɛ́ngɛlɛ biléi yambo ya kobílámba (yambo ya kolámba byangó).'
      }, {
        francais: 'alimentation    ',
        lingala: ' boléi, boléisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’alimentation du bétail : boléi bwa nyama.         '
      }, {
        francais: 'alimenter  ',
        lingala: 'boléi,koléisa, komíléisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) alimenter un malade : koléisa mokoni. 2) alimenter une ville en eau :kopésa engumba mái. 3) le malade s’alimente tout seul:  mokoni azalí komíléisa ye moko. 4) s’alimenter en eau, en électricité : komípésa mái, lotilíki. '
      }, {
        francais: 'aliter   ',
        lingala: ' kolálisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'1)le médecin alite le malade:  mónganga alálisi mokoni.2) il s’est alité durant une semaine:alálákí (na mbéto) mpos0 mobimba         '
      }, {
        francais: 'allaitement  ',
        lingala: ' bonúngisi, bopési mabɛ́lɛ, bomɛlisi mabɛ́lɛ',
        // tslint:disable-next-line: max-line-length
        exemple:'allaitement maternel : bopési mabɛ́lɛ ma mamá.        '
      }, {
        francais: 'allaiter   ',
        lingala: ' konúngisa, komɛlisa mabɛ́lɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:'allaiter son enfant : konúngisa mwÉana.        '
      }, {
        francais: 'alléchant, ante   ',
        lingala: ' -a kobɛ́mbɛ, -a koléngola, -a kosɛ́nginya ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'allaiter   ',
        lingala: ' konúngisa, komɛlisa mabɛ́lɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:' allaiter son enfant : konúngisa mwÉana. '
      }, {
        francais: 'alléchant, ante   ',
        lingala: ' -a kobɛ́mbɛ, -a koléngola, -a kosɛ́nginya  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'une nourriture, une odeur alléchante        ',
        lingala: ' biléi bya kobɛ́mbɛ.        ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'allécher     ',
        lingala: ' kobɛ́mbɛ, koléngola, kosɛ́nginya  ',
        // tslint:disable-next-line: max-line-length
        exemple:' allécher par l’odeur de nourriture : kobɛ́mbɛ na biloko ya nsolo mpímbo.'
      }, {
        francais: 'alléger',
        lingala: ' kokútola bozitó, bokási ',
        // tslint:disable-next-line: max-line-length
        exemple:'alléger un fardeau ou une douleur: kokútola bozitó bwa mokúmba tô kokútola mpási.        '
      }, {
        francais: 'allégresse   ',
        lingala: ' nsáí, esongo',
        // tslint:disable-next-line: max-line-length
        exemple:' un jour d’allégresse : mok¡l¡ mwa nsáí.        '
      }, {
        francais: 'Allemagne  ',
        lingala: ' Alemáni ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'Allemand, ande   ',
        lingala: ' -a alemáni, mó-alemáni, ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'aller   ',
        lingala: ' kokɛndɛ,kozala (se porter )  ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) aller à pied : kokɛndɛ na makolo. 2) aller bien:  kozala malámu. 3) il faut s’en aller: esɛngɛ́li kokɛndɛ        '
      }, {
        francais: 'allergie  ',
        lingala: ' nzóto ebóyi, alɛlɛzí ',
        // tslint:disable-next-line: max-line-length
        exemple:' allergie au champignon : nzóto ebóyi mákombó, alɛlɛzi na mákombó.        '
      }, {
        francais: 'alliage  ',
        lingala: ' lisangá lya bilÔ¡k¡  ',
        // tslint:disable-next-line: max-line-length
        exemple:' l’acier est un alliage à base de fer : asyé ezalí lisangá lya biloko eúti míngi mpenzá na bibendé.   '
      }, {
        francais: 'alliance   ',
        lingala: 'bondeko, libála, bolóngani, makwéla, (lo)mpɛ́tɛ́ ',
        // tslint:disable-next-line: max-line-length
        exemple:'alliance entre deux Etats, deux familles : bondeko káti ya bikólo bíbalé, mabóta mábalé'
      },
      {
        francais: 'alliance   ',
        lingala: ' makwéla, (lo)mpɛ́tɛ́ ',
        // tslint:disable-next-line: max-line-length
        exemple:'porter l’alliance au doigt:  koláta (lo)mpɛ́tɛ́  na mosapi. '
      }, {
        francais: 'allié, ée  ',
        lingala: ' -a kosangana, moníngá, basangani ',
        // tslint:disable-next-line: max-line-length
        exemple:'des pays alliés; la victoire des alliés : bikólo bya kosangana ; lilónga (elónga) lya (ya) basangani.        '
      }, {
        francais: 'allier  ',
        lingala: ' kosangisa, kosanginya ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) allier l’intelligence à la beauté : kosangisa mayɛ́lɛ ná kitoko. 2) s’allier contre un ennemi commun : kosangana mpo ya kobuna na mongúná.        '
      },
      {
        francais: 'alligator   ',
        lingala: ' ngandó, koli ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'allocation   ',
        lingala: ' bopési,  mosolo, mbongo  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) allocation d’un prêt :bopési nyongo . 2)  allocations familiales : mosolo mwa libóta        '
      },
      {
        francais: 'allocution   ',
        lingala: ' mwâ lísikúlu ',
        // tslint:disable-next-line: max-line-length
        exemple:'prononcer une allocution : koloba mwâ lísikúlu         '
      },
      {
        francais: 'allonger  ',
        lingala: '  konanola, koninola, kosémbola',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) allonger un pantalon, une conversation : kobénda potaló / pataló, kobénda lisoló. 2) allonger les jambes : kosémbola (konanola/koninola) makolo.'
      },
      {
        francais: 'allonger  ',
        lingala: '   kobéndana, komísémbola, komílálisa, komínanola, komíninola, ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1)  en février les jours allongent: na sánzá ya míbalé mikolo mibéndanaka. 2)s’allonger par terre : komísembola na mabelé.'
      },
      {
        francais: 'allumage   ',
        lingala: ' bopeli, bopelisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'allumage d’un moteur : bopelisi mótɛ́lɛ, bopeli bwa mótɛ́lɛ.         '
      },
      {
        francais: 'allumer   ',
        lingala: '  kopelisa, kobambola, kololisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) allumer une cigarette, une bougie :  kopelisa likáyá, kopelisa buzí. 2) allumer une ampoule électrique : kopelisa mwínda mwa lotilíki'
      },
      {
        francais: 'allumer   ',
        lingala: '  kofungola, kopelisa, kotámbwisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'1)  allumer la radio :  kofungola (kopelisa, kotámbwisa) ladyó. 2) l’ampoule s’allume : ampúlu epelí. 3)  '
      },
      {
        francais: 'allumer    ',
        lingala: '  kopela, kotámbola ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) la voiture ne s’allume pas : mótuka mozalí kotámbola tɛ́, mótuka mozalí kopela tɛ́.        '
      },
      {
        francais: 'allumette   ',
        lingala: ' zalimɛ́ti, alimɛ́ti ',
        // tslint:disable-next-line: max-line-length
        exemple:'acheter un paquet d’allumettes : kosó mba ekpokoso ya zalimɛ́ti        '
      },
      {
        francais: 'allumeur, euse  ',
        lingala: 'epelisi,mopelisi, molaso ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) allumeur d’une bombe :  epelisi mózinga, epelisi bombi. 2)  cette fille est une allumeuse: mwana mwasí óyo azalí mopelisi        '
      },
      {
        francais: 'allure   ',
        lingala: ' (lo)mbángo, (lo)mbángu ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) courir à toute allure : kokíma mbángo. 2)  la discussion prend l’allure d’une dispute : ntembe ezwí elongi ya boswáni        '
      },
      {
        francais: 'alluvions  ',
        lingala: ' potopot0 ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'alors   ',
        lingala: ' bá, ntángo êná, ntángo wâná, bébe ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) alors il est entré : akoti na ntángo êná '
      },
      {
        francais: 'alors   ',
        lingala: 'sokí, soko bôngó, mbɛlɛ, kana, ndé  ',
        // tslint:disable-next-line: max-line-length
        exemple:'tu es ici alors que je te cherche partout: yo ozalí áwa nzókandé nazalí koluka yo bisíká bínso.        '
      },
      {
        francais: 'alourdir   ',
        lingala: ' kopésa bozitó, kokólisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'  alourdir un fardeau, une peine : kopésa bozitó na mokúmba, kobakisa kiló na mokúmba, kokólisa etúmbu.'
      },
      {
        francais: 'alourdir    ',
        lingala: ' koyâ bozitó, koyâ kiló',
        // tslint:disable-next-line: max-line-length
        exemple:'le fardeau s’alourdit : mokúmba moyéi bozitó (kiló).'
      },
      {
        francais: 'alourdissement  ',
        lingala: 'bozitó',
        // tslint:disable-next-line: max-line-length
        exemple:'alourdissement d’une peine :  bobakisi etúmbu, bokólisi etúmbu.'
      },
      {
        francais: 'alphabet    ',
        lingala: ' afabé, alofabé, abésé ',
        // tslint:disable-next-line: max-line-length
        exemple:'apprendre l’alphabet du français : koyékola afabé ya falasé.        '
      },
      {
        francais: 'alphabète   ',
        lingala: ' moyébi-minkandá, moyébimikomá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'alphabétisation ',
        lingala: ' botángisi mikomá, bolakisi minkandá ',
        // tslint:disable-next-line: max-line-length
        exemple:' '
      },
      {
        francais: 'alphabétisé, ée  ',
        lingala: ' moto wa mokandá, moyébi afabé, moyébi   ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'alphabétiser   ',
        lingala: ' kotángisa kokoma mpé kotánga ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'alphabétiser   ',
        lingala: 'koyékwisa kokoma mpé kotánga ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'alphabétiseur, euse   ',
        lingala: ' moyékwisi mikomá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'alphabétiseur, euse   ',
        lingala: ' motángisi mikomá, molakisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'altercation  ',
        lingala: ' bondongbani,bondongwani, boswáni ',
        // tslint:disable-next-line: max-line-length
        exemple:'le soleil altère les couleurs :  mói mobébisa lángi'
      },
      {
        francais: 'altercation  ',
        lingala: '  kopésa mpósá, kobénga mpósá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'altérer   ',
        lingala: '  kobébisa',
        // tslint:disable-next-line: max-line-length
        exemple:'le soleil altère les couleurs :  mói mobébisa lángi'
      },
      {
        francais: 'altérer   ',
        lingala: ' kopésa mpósá, kobénga mpósá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) la course m’a altéré : mbángu epésí ngáí mpósá ya mái. 2)  les couleurs se sont altérées : lángi ikómí mabé       '
      },
      {
        francais: 'alternance    ',
        lingala: ' líkelemba, ngala ',
        // tslint:disable-next-line: max-line-length
        exemple:' alternance des saisons : líkelemba ya bileko.        '
      },
      {
        francais: 'alternateur   ',
        lingala: ' atɛnatɛ́lɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'alternative   ',
        lingala: ' boponi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'alterner   ',
        lingala: ' kokitana, kosála líkelemba ',
        // tslint:disable-next-line: max-line-length
        exemple:'les uniformes rouges alternent avec les verts : inifomɛ itáné ikitáni iye ya lángi ya mái ma mpondú'
      },
      {
        francais: 'alterner   ',
        lingala: ' kokitanisa, kokitinya ',
        // tslint:disable-next-line: max-line-length
        exemple:'alterner les uniformes rouges avec les verts: kokitanisa tô kokitinya inifomɛ itáné na iye ya lángi ya mái ma mpondú        '
      },
      {
        francais: 'aluminium  ',
        lingala: ' aliminyomɛ  ',
        // tslint:disable-next-line: max-line-length
      exemple:'des tôles en aluminium : mánzanza ma aliminyomɛ.  '
      },
      {
        francais: 'amabilité  ',
        lingala: ' bobóto ',
        // tslint:disable-next-line: max-line-length
        exemple:'merci de votre amabilité ! : botondi (mɛlɛsí) mpo ya bobóto bwa bínó'
      },
      {
        francais: 'amadouer   ',
        lingala: ' kolɛ́tɛ, kobondɛlɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amaigrir   ',
        lingala: ' kokondisa, kotungisa,kokondo  ',
        // tslint:disable-next-line: max-line-length
        exemple:' tu t’es beaucoup amaigri : okondí míngi, otungí makási, okondí makási.   '
      },
      {
        francais: 'amaigrissement   ',
        lingala: ' bokondi, botungi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'faire une cure d’amaigrissement : kolanda tô komɛlɛ nkísi mpo ya bok¡ndi.        '
      },
      {
        francais: 'amalgame  ',
        lingala: 'lisangisi,lisanginyi,ptopoto ',
        // tslint:disable-next-line: max-line-length
        exemple:' un amalgame de couleurs : lisangisi lya lángi ndéngé na ndéngé.        '
      },
      {
        francais: 'amalgamer  ',
        lingala: ' kosangisasangisa,kosanganasangana ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) amalgamer des couleurs : kosangisasangisa lángi ndéngé na ndéngé. 2) les couleurs peuvent s’amalgamer :  lángi ikokí kosanganasangana       '
      },
      {
        francais: 'amande   ',
        lingala: 'mondiká, ndiká  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1)un gâteau aux amandes : gató esálémí (elámbémí) na ndiká. 2)  graine comestible, riche en huile :mbuma ya kolíya etondá mafúta. 3)  fruit de l’amandier: mbuma ya mádamɛ́      '
      },
      {
        francais: 'amandier  ',
        lingala: ' mádamɛ́',
        // tslint:disable-next-line: max-line-length
        exemple:'1) arbre produisant l’amande:  mweté (nzeté) eye ebótaka tô ebimisaka. 2) planter un amandier : kolóna mádamɛ́.  '
      },
      {
        francais: 'amant, ante   ',
        lingala: ' makángo, nganzi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'cette femme a un amant : mwasí óyo azalí na makángo        '
      },
      {
        francais: 'amarrage  ',
        lingala: ' bokangi mokulu, bokangi nsinga, bosɛ́misi',
        // tslint:disable-next-line: max-line-length
        exemple:' amarrer un bateau, une pirogue :  kokanga mokulu tô nsinga ya masúwa, ya bwâto.'
      },
      {
        francais: 'amarrage  ',
        lingala: '  bosɛ́misi',
        // tslint:disable-next-line: max-line-length
        exemple:' amarrer un bateau, une pirogue :  kokanga mokulu tô nsinga ya masúwa, ya bwâto.'
      },
      {
        francais: 'amarre   ',
        lingala: ' mokulu, nsinga ',
        // tslint:disable-next-line: max-line-length
        exemple:'amarrer des bagages sur un véhicule : kokanga mikúmbá na mikulu likoló lya mótuka. '
      },
      {
        francais: 'amarrer    ',
        lingala: ' kokanga mokulu, kosɛ́misa ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amas   ',
        lingala: ' líbóndo ',
        // tslint:disable-next-line: max-line-length
        exemple:'un amas d’ordures :  líbóndo lya bosoto.'
      },
      {
        francais: 'amasser   ',
        lingala: ' kokongolo ',
        // tslint:disable-next-line: max-line-length
        exemple:'amasser de l’argent : kokongolo mosolo'
      },
      {
        francais: 'amasser   ',
        lingala: ' kosangana, koyángana ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) les papiers s’amassent sur son bureau : nkásá isanganí na biló ya ye. 2) les gens s’amassent autour des lutteurs : bato basangání zóngázónga ya babuni. '
      },
      {
        francais: 'amateur    ',
        lingala: '  molingi, álingá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) un amateur de musique : molingi wa mizíki, álingá mizíki. '
      },
      {
        francais: 'ambages   ',
        lingala: ' polélé ',
        // tslint:disable-next-line: max-line-length
        exemple:' parler sans ambages (= d’une manière franche et directe):  koloba polélé'
      },
      {
        francais: 'ambassade   ',
        lingala: ' etómá, ambasáde ',
        // tslint:disable-next-line: max-line-length
        exemple:' l’ambassade du Congo au Mali : botóma ya Kongo na Mali'
      },
      {
        francais: 'ambassadeur, drice   ',
        lingala: '  ntómá, mongbɛ́ndɛ́, ambasadɛ́lɛ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’ambassadeur du Sénégal en République centrafricaine : ntóma wa Senegale na Santafríka'
      },
      {
        francais: 'ambi   ',
        lingala: ' ambí ',
        // tslint:disable-next-line: max-line-length
        exemple:'vendre de l’ambi : kotɛ́kɛ ambí. '
      },
      {
        francais: 'ambiance   ',
        lingala: ' ezaleli , bisɛngo  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une ambiance agréable :  ezalelí elámu. 2) mettre de l’ambiance dans une fête : kotíya bisɛng¡ na fɛ́ti'
      },
      {
        francais: 'ambiancer   ',
        lingala: ' kosepelisa,kosakana ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) ce soir on va ambiancer : na mpókwa ya lɛlo tokosepelisa bato. 2)  il aime ambiancer les samedis : alingí kosakana mikolo mya poso.'
      },
      {
        francais: 'ambianceur  ',
        lingala: ' mosakani, ambyasɛ́lɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:'c’est un ambianceur : azalí mosakani'
      },
      {
        francais: 'ambifier (s’)   ',
        lingala: ' kopakola (ambí)  ',
        // tslint:disable-next-line: max-line-length
        exemple:'elle s’ambifie pour plaire aux hommes : apakolaka mpo babáli bálúla ye.'
      },
      {
        francais: 'ambigu, uë   ',
        lingala: ' -a molílí, -a polélé  ',
        // tslint:disable-next-line: max-line-length
        exemple:'un discours ambigu : lísikúlu lya polélé tɛ́.'
      },
      {
        francais: 'ambiguïté   ',
        lingala: ' molílí, polélé tɛ́ ',
        // tslint:disable-next-line: max-line-length
        exemple:' un discours plein d’ambiguïté :  lisikúlu lizalí polélé tɛ́'
      },
      {
        francais: 'ambitieux, euse  ',
        lingala: '-a makambo manɛ́nɛ, -a mpósá ya bokonzi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une politique ambitieuse ; c’est un ambitieux : politíki ya makambo manɛ́nɛ ; moto wa mpósá ya bokonzi. '
      },
      {
        francais: 'ambition   ',
        lingala: '  mpósá ya lokúmu, ya bokonzi tô nkita  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) un homme plein d’ambition : moto atóndámí na mpósá ya lokúmu, ya bokonzi tô ya. 2)  son ambition est de devenir médecin : mpósá ya ye ezalí ákóma mónganga.'
      },
      {
        francais: 'ambitionner   ',
        lingala: ' kolúla ',
        // tslint:disable-next-line: max-line-length
        exemple:'ambitionner le titre de ministre, ambitionner de devenir médecin : kolúla ebónga ya minístɛlɛ, kolúla kokóma mónganga.'
      },
      {
        francais: 'ambulance   ',
        lingala: ' ekúmba-bakoni, mɛmɛ-bakoni ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'ambulance  ',
        lingala: 'mótuka-bakoni, ambilási  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'ambulancier, ère  ',
        lingala: 'mokúmbi mótuka-bakoni,mokúmbi ambilási  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'ambulant, ante   ',
        lingala: ' molekaleki, moyengayengi ',
        // tslint:disable-next-line: max-line-length
        exemple:' un marchand ambulant : motɛ́ki molekakeki, ambilá'
      },
      {
        francais: 'ambulant, ante   ',
        lingala: ' mozemazemi, ambilá  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'âme  ',
        lingala: '  molímo  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'rendre l’âme "mourir"  ',
        lingala: 'kowâ, kokúfa, kozóngisa molímo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amélioration   ',
        lingala: ' bobongisi, libongisi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'amélioration des résultats scolaires : bobongisi bwa bilembo bya boyékolitô bya kelási'
      },
      {
        francais: 'améliorer   ',
        lingala: 'kobongisa, kobonga',
        // tslint:disable-next-line: max-line-length
        exemple:'1) améliorer ses résultats scolaires : kobongisa bilembo bya boyékoli tô bya kelási. 2) le vin s’améliore en vieillissant : víno ekobongoko sokí eúmélí.'
      },
      {
        francais: 'aménager  ',
        lingala: ' kolɛ́ngɛlɛ, kobongisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:' aménager une maison : kolɛ́ngɛlɛ ndáko'
      },
      {
        francais: 'amende   ',
        lingala: ' lománde, amándi ',
        // tslint:disable-next-line: max-line-length
        exemple:' payer une amende ; être condamné à 1000 francs d’amende : kofúta lománde ; kokita na lománde ya falánga 1000.'
      },
      {
        francais: 'amendement  ',
        lingala: 'libóngoli lya mobéko, lya mwángo ',
        // tslint:disable-next-line: max-line-length
        exemple:'voter un amendement :  kovoté libóngoli lya mobéko.'
      },
      {
        francais: 'amender  ',
        lingala: ' kobóngola mobéko  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amer, ère   ',
        lingala: ' bololo',
        // tslint:disable-next-line: max-line-length
        exemple:'la noix de cola est amère : libɛlú (likásó) ezalí bololo.'
      },
      {
        francais: 'américain, aine    ',
        lingala: '-a Amelí ka, -a Amelí ki ',
        // tslint:disable-next-line: max-line-length
        exemple:' la politique américaine ; un Américain noir : politíki ya Amelíka ; moí-Amelíka moíndo.'
      },
      {
        francais: 'américani   ',
        lingala: ' molekáni, malekáni ',
        // tslint:disable-next-line: max-line-length
        exemple:'acheter un mètre d’américani : kosómba mɛ́tɛlɛ yoko ya malekáni (molekáni). '
      },
      {
        francais: 'Amérique   ',
        lingala: ' Amelíki,Amelíka, Ekólo ya Amelíki  ',
        // tslint:disable-next-line: max-line-length
        exemple:'aller en Amérique : kok¥nd¥ na (ekólo ya) Amelíki.'
      },
      {
        francais: 'amerrir   ',
        lingala: 'kokita na maí ',
        // tslint:disable-next-line: max-line-length
        exemple:' le vaisseau spatial amerrit :  mpɛ́p¡ ekití likoló lya mái.'
      },
      {
        francais: 'amertume   ',
        lingala: 'bololo ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’amertume du café sans sucre : bololo ya káwa ezángi sukáli.'
      },
      {
        francais: 'ameublement   ',
        lingala: ' kotombokisa ',
        // tslint:disable-next-line: max-line-length
        exemple:' ameuter la foule : kot¡mb¡kisa bato.'
      },
      {
        francais: 'ami, ie  ',
        lingala: '  moníngá, móníngá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'un ami d’enfance : moníngá wa bomwÉana'
      },
      {
        francais: 'ami, ie   ',
        lingala: ' -a moníngá, -a bondeko ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) une maison amie :  ndáko ya bondeko. 2) des troupes amies : mampingá ma bondeko.'
      },
      {
        francais: 'amiable (à l’)  ',
        lingala: ' na bosámbani, na bondeko ',
        // tslint:disable-next-line: max-line-length
        exemple:' régler un litige à l’amiable : kobongisa likambo na boyókani, na kímyá.'
      },
      {
        francais: 'amibe   ',
        lingala: ' amíbɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amical, ale, aux   ',
        lingala: ' -a bondeko ,  -a bondeko ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) un conseil amical :  tolí ya bondeko. 2)  un match amical : lisano lya ndembó lya bondeko.'
      },
      {
        francais: 'amicalement    ',
        lingala: 'na bondeko ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amidon   ',
        lingala: ' amidó ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’amidon rigidifie le col de chemise :  amidó ekómisaka nkíngó ya simísi makási.'
      },
      {
        francais: 'amidonner ',
        lingala: ' kotíya amidó  ',
        // tslint:disable-next-line: max-line-length
        exemple:'amidonner une chemise : kotíya amidó na simísi, kotíya simísi amidó'
      },
      {
        francais: 'amincir  ',
        lingala: ' kokondisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:'amincir la taille : kokondisa lokéto. kokÔ¡nd¡ '
      },
      {
        francais: 'amitié  ',
        lingala: ' bondeko, boníngá  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une grande amitié lie ces deux personnes : bato bábalé baye bazalí na bondeko bokási'
      },
      {
        francais: 'amnistie   ',
        lingala: ' bolímbisi ',
        // tslint:disable-next-line: max-line-length
        exemple:'amnistie politique : bolímbisi bwa baí-politíkí.'
      },
      {
        francais: 'amnistier   ',
        lingala: ' kolímbisa ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amocher  ',
        lingala: ' kobébisa',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amoindrir  ',
        lingala: ' kokitisa, kokútola',
        // tslint:disable-next-line: max-line-length
        exemple:' l’alcool amoindrit l’intelligence : masanga makútolaka mayɛ́lɛ'
      },
      {
        francais: 'amoindrir  ',
        lingala: ' kokita, kokútwa',
        // tslint:disable-next-line: max-line-length
        exemple:' ses forces se sont amoindries : bokási bwa ye bokútwé'
      },
      {
        francais: 'amoindrissement  ',
        lingala: ' bokútwi, bokiti, bokondi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amollir   ',
        lingala: ' kolɛmbisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:'la chaleur amollit le beurre : molungé molɛmbísaka matéka.'
      },
      {
        francais: 'amollissement   ',
        lingala: ' bolɛmbisi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amonceler   ',
        lingala: 'kotíya líbóndo, kosangisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'amonceler des feuilles : kosangisa nkásá'
      },
      {
        francais: 'amoncellement   ',
        lingala: ' bosangisi, bosanginyi',
        // tslint:disable-next-line: max-line-length
        exemple:'amoncellement des feuilles : bosangisi nkásá'
      },
      {
        francais: 'amont   ',
        lingala: ' likoló, monano  ',
        // tslint:disable-next-line: max-line-length
        exemple:'Kisangani est en amont de Kinshasa sur le fleuve Congo :  Kisangani ezalí na likoló (monano) ya Kisásá.'
      },
      {
        francais: 'amorphe    ',
        lingala: ' -tau, pɛtɛpɛtɛ, -a kolɛmbɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amortir   ',
        lingala: ' kolɛ́mbisa, kofúta malɛ́mbɛ malɛ́mbɛ,kolɛmbɛ ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) amortir un coup, un ballon :kolɛmbisa likofi, bále. 2)  amortir une dette : kofúta nyongo malɛ́mbɛ malɛ́mbɛ. 3) un choc qui s’amortit :lobɛ́tɛ lolɛmbí'
      },
      {
        francais: 'amortisseur   ',
        lingala: ' elɛmbisi, amotisɛ́lɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:'les amortisseurs d’une automobile : bilɛmbisi bya mótuka, amotisɛ́lɛ  ya mótuka. '
      },
      {
        francais: 'amour  ',
        lingala: ' bolingo,  molíngamí ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) mon amour : bolingo wa ngáí. 2) amour de Dieu, du prochain, de la patrie :  bolingo ôná Nzámbe, bolingo bwa (ôná) moto, bolingo bwa (ôná) ekólo. 3) amour de la musique : bolingo ôná mizíki/bolinga bwa mizíki. '
      },
      {
        francais: 'amouracher (s’)  ',
        lingala: ' kolúla, kokpéya ndɛkɛ, kokpéya mayanga ',
        // tslint:disable-next-line: max-line-length
        exemple:'s’amouracher pour une fille : kolúla mwana-mwasí'
      },
      {
        francais: 'amoureusement   ',
        lingala: ' na bolingo ',
        // tslint:disable-next-line: max-line-length
        exemple:'regarder amoureusement : kotála na bolingo '
      },
      {
        francais: 'amoureux, euse    ',
        lingala: ' -a bolingo ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) des regards amoureux : miso ma bolingo. 2) être, tomber amoureux de qqn : kolinga moto, kokwéya mayanga, kokwéya ndɛkɛ. 3) c’est ton amoureux : bolingo wa yo ye wâná.'
      },
      {
        francais: 'amour-propre   ',
        lingala: ' bomílingi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'ne pas faire une bêtise par amour-propre :  kosála bozóba te mpo ya bomílingi'
      },
      {
        francais: 'amovible   ',
        lingala: ' -a kotíndama epái esúsu ',
        // tslint:disable-next-line: max-line-length
        exemple:'un fonctionnaire amovible : mosáli wa letá wa (ya) kotíndama epái esúsu.'
      },
      {
        francais: 'amphore     ',
        lingala: ' elokó, lilokó, mbɛ́ki ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'ampleur    ',
        lingala: ' bonɛ́nɛ, bolaí  ',
        // tslint:disable-next-line: max-line-length
        exemple:'ampleur d’un vêtement, d’un événement : bonɛ́nɛ bwa elambá, bonɛ́nɛ bwa likambo.'
      },
      {
        francais: 'amplifier    ',
        lingala: ' kokólisa, komatisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:'amplifier le son de la musique : komatisa loláká la mizíki'
      },
      {
        francais: 'ampli(ficateur)    ',
        lingala: ' ekólisele',
        // tslint:disable-next-line: max-line-length
        exemple:'connecter les hauts-parleurs à l’ampli : kokangisa egángisele loláká na ekólisele loláká. '
      },
      {
        francais: 'ampoule    ',
        lingala: ' mwâ molangi mwa nkísi, ampúlɛ ',
        // tslint:disable-next-line: max-line-length
        exemple:' avaler une ampoule d’antibiotique : komɛlɛ mwâ molangi mwa nkísi mwa atibyotíki. '
      },
      {
        francais: 'ampoule    ',
        lingala: '  mwínda mwa lotolíki,ampúlɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) l’ampoule a sauté: mwínda mwa lotilíki mozíkí. 2)  '
      },
       {
        francais: 'ampoule    ',
        lingala: '   litoba, litútú ',
        // tslint:disable-next-line: max-line-length
        exemple:' avoir une ampoule au pied : kobima litoba na litámbí (lokolo), kozala na litoba na litámbí.  '
      },
      {
        francais: 'amputation   ',
        lingala: ' bokáti, bozéngi, boténi  ',
        // tslint:disable-next-line: max-line-length
        exemple:' amputation d’un bras: bokáti loboko.'
      },
      {
        francais: 'amputer   ',
        lingala: 'kokáta, koténa, kozénga  ',
        // tslint:disable-next-line: max-line-length
        exemple:'amputer un bras à qqn : kokáta moto loboko.'
      },
      {
        francais: 'amulette    ',
        lingala: ' nkísi, bweté, mono, ebíkisele  ',
        // tslint:disable-next-line: max-line-length
        exemple:'porter une amulette au cou :  koláta bweté'
      },
      {
        francais: 'amusant, ante    ',
        lingala: ' -a kosepelisa, -a lisano ',
        // tslint:disable-next-line: max-line-length
        exemple:'une histoire amusante : lisoló lya kosepelisa.'
      },
      {
        francais: 'amuse-gueule     ',
        lingala: 'esepelisi monoko, mízegɛ́lɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:' jouer au football est un amusement : kosana ndembó (motópé) ezalí lisepeli.'
      },
      {
        francais: 'amusement',
        lingala: 'lisano, bosepeli, lisepeli   ',
        // tslint:disable-next-line: max-line-length
        exemple:' jouer au football est un amusement: kosana ndembó (motópé) ezalí lisepeli.'
      },
      {
        francais: 'amuser    ',
        lingala: ' kosepelisa, kosɛkisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'amuser les enfants :  kosepelisa bana'
      },
      {
        francais: 'amuser    ',
        lingala: 'kosepela,kosakana,kossɛksɛ ',
        // tslint:disable-next-line: max-line-length
        exemple:'s’amuser à danser: kosepela na kobína'
      },
      {
        francais: 'an   ',
        lingala: ' mobú, mbúla  ',
        // tslint:disable-next-line: max-line-length
        exemple:'un enfant de 10 ans :  mwana wa mibú zómi.'
      },
      {
        francais: 'anaconda   ',
        lingala: ' ngúma, anakonda  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'analyse   ',
        lingala: ' likákoli  ',
        // tslint:disable-next-line: max-line-length
        exemple:'analyse d’un événement : likákoli lya likambo. 2) analyse d’une phrase : likákoli lya lisakola'
      },
      {
        francais: 'ananas    ',
        lingala: ' linanási, ananási  ',
        // tslint:disable-next-line: max-line-length
        exemple:'manger un ananas : kolyá linanási.'
      },
      {
        francais: 'ananeraie   ',
        lingala: ' elanga ya mananási  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'anarchie   ',
        lingala: ' mobúlungano, mobúlú  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'anatomie   ',
        lingala: ' anatomí ',
        // tslint:disable-next-line: max-line-length
        exemple:'anatomie du corps humain : anatomí ya nzóto ya moto'
      },
      {
        francais: 'ancestral, ale, aux   ',
        lingala: ' -a bankoko',
        // tslint:disable-next-line: max-line-length
        exemple:'coutumes ancestrales :  mimɛsɛno mya bankoko.'
      },
      {
        francais: 'ancêtre    ',
        lingala: ' nkoko  ',
        // tslint:disable-next-line: max-line-length
        exemple:' les coutumes de nos ancêtres :  mimɛsɛno mya bankoko ba bísó.'
      },
      {
        francais: 'ancien, enne     ',
        lingala: '  -a kala, nkúmú(mutu ya kala) ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) Une maison ancienne :  ndáko ya kala. 2) un ancien député :  depité wa kala. 3)Les anciens du village : bankúmu ba mbóka'
      },
      {
        francais: 'ancienneté   ',
        lingala: 'bokala, boúmeli  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1)ancienneté d’une coutume: bokala ya bonkoko. 2) avancement à l’ancienneté :mpɛ́tɛ́ ya boúmeli.'
      },
      {
        francais: 'ancre   ',
        lingala: ' lóngo ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’ancre d’un bateau : lóngo la masúwa.'
      },
      {
        francais: 'ancrer   ',
        lingala: ' kokotisa ',
        // tslint:disable-next-line: max-line-length
        exemple:' ancrer une idée dans la tête de qqn : kokotisa likanisi na móto ya moto.'
      },
      {
        francais: 'âne, esse    ',
        lingala: ' púnda,elémá(moto wa mayɛ́lɛ́tɛ́)',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'anéantir    ',
        lingala: 'koboma, kolongola, kosílisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:' les sauterelles ont anéanti les récoltes :mapalela masílísí bilanga nyonso.'
      },
      {
        francais: 'anéantissement    ',
        lingala: ' bosílisi, bobomi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'anéantissement d’une ville : bobomi engumba'
      },
      {
        francais: 'anecdote   ',
        lingala: 'lisoló, lisapo  ',
        // tslint:disable-next-line: max-line-length
        exemple:'je vais vous raconter une petite anecdote : nako betela bino lisolo moko'
      },
      {
        francais: 'anémie   ',
        lingala: ' bosíli makilá, anamí  ',
        // tslint:disable-next-line: max-line-length
        exemple:' un enfant atteint d’anémie : mwana asílí (asíla) makilá. '
      },
      {
        francais: 'ânerie   ',
        lingala: 'bolémá,bonyama,bozóba   ',
        // tslint:disable-next-line: max-line-length
        exemple:' il raconte des âneries :  azalí koloba makambo ma (ya) bolémá (bozóba ).'
      },
      {
        francais: 'anesthésie     ',
        lingala: ' eboma -nzóto, anetezí ',
        // tslint:disable-next-line: max-line-length
        exemple:'anesthésie totale (avec perte de conscience): eboma-nzóto mobimba (na bobúngisi mayɛ́lɛ). '
      },
      {
        francais: 'ange   ',
        lingala: '  ánzelú  ',
        // tslint:disable-next-line: max-line-length
        exemple:'les anges sont les messagers de Dieu : banzelú bazalí bantómá ba Nzámbe. 2) tu es un ange : ozalí ánzelú'
      },
      {
        francais: 'angélique   ',
        lingala: ' -a ánzelú  ',
        // tslint:disable-next-line: max-line-length
        exemple:' gentillesse angélique :  bobóto bwa ánzelú.'
      },
      {
        francais: 'angine   ',
        lingala: 'anzíne, mpenzá mongóngó ',
        // tslint:disable-next-line: max-line-length
        exemple:'attraper une angine: kozwa anzíne, kobɛ́lɛ anzíne.'
      },
      {
        francais: 'anglais, aise',
        lingala: ' angelé ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'angle   ',
        lingala: ' litúmu, mbata ',
        // tslint:disable-next-line: max-line-length
        exemple:' 1) angle d’un mur :  litúmu lya efelo. 2) un angle droit (dont les deux côtés sont perpendiculaires): mbata sémba.'
      },
      {
        francais: 'Angleterre    ',
        lingala: ' ekólo ya baangelé  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'angoissant, ante    ',
        lingala: ' -a somo, -a bobángi  ',
        // tslint:disable-next-line: max-line-length
        exemple:' une histoire angoissante :  lisoló lya somo'
      },
      {
        francais: 'angoisse    ',
        lingala: ' somo, bobángi ',
        // tslint:disable-next-line: max-line-length
        exemple:'angoisse des examens : somo ya mimekano.'
      },
      {
        francais: 'angoisser     ',
        lingala: ' kobángisa ',
        // tslint:disable-next-line: max-line-length
        exemple:' l’approche des examens l’angoisse : bobɛlɛmi bwa mimekano bozalí kobángisa ye.'
      },
      {
        francais: 'Angola    ',
        lingala: ' Angolá ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'aangolais, aise   ',
        lingala: ' -a angolá,moí-angolá,mwanambóka wa Angolá',
        // tslint:disable-next-line: max-line-length
        exemple:' le peuple angolais, les Angolais : bÉana-mbóka ba Angolá.'
      },
      {
        francais: 'anguille    ',
        lingala: ' nzombo, bowayó  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'animal, aux    ',
        lingala: ' nyama ',
        // tslint:disable-next-line: max-line-length
        exemple:'l’homme est un animal qui parle et qui rit : moto azalí nyama akolobaka mpé akosɛkɛkɛ'
      },
      {
        francais: 'animal, aux    ',
        lingala: 'bonyama, bozóba ',
        // tslint:disable-next-line: max-line-length
        exemple:'comportement animal, fureur animale : ezaleli ya nyama, nkándá ya nyama, bonyama, bozóba.        '
      },
      {
        francais: 'animalité   ',
        lingala: ' bonyama, bozóba  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'animateur, trice    ',
        lingala: 'motámbwisi, mosepelisi, animatɛ́lɛ',
        // tslint:disable-next-line: max-line-length
        exemple:'animateur de télévision : animatɛ́lɛ wa televizyó. '
      }, {
        francais: 'animation   ',
        lingala: ' bosepeli ',
        // tslint:disable-next-line: max-line-length
        exemple:'animation d’une fête : bosepeli bwa eyenga. '
      }, {
        francais: 'animé, ée    ',
        lingala: ' -a bomoi, -a koningana,(e)koningana  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1)un être animé : ekela ya bomoi. 2) un dessin animé : liyemi lya koningana '
      }, {
        francais: 'animé, ée    ',
        lingala: '  -kási, -a loyengé   ',
        // tslint:disable-next-line: max-line-length
        exemple:' une rue animée : balabála ya loyengé '
      }, {
        francais: 'animer   ',
        lingala: ' kopésa bomoi',
        // tslint:disable-next-line: max-line-length
        exemple:' animer un corps inerte : kopésa nzóto ekuáfá '
      }, {
        francais: 'animer    ',
        lingala: ' kotíya loyengé, kotíya molungé, kokamba',
        // tslint:disable-next-line: max-line-length
        exemple:' la foi ou l’amour l’anime : kotíya molungé na fɛ́ti, na lisolo, na emisyó'
      }, {
        francais: 'animer',
        lingala: ' kokamba, kolakisa',
        // tslint:disable-next-line: max-line-length
        exemple:' la foi ou l’amour l’anime : boyambi tô bolingo ezalí kokamba ye'
      },{
        francais: 'animer',
        lingala: '  kolamuka ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) le village s’anime à 6heures : mbóka elamukaka na ngonga ya 6. 2) ses yeux s’animent quand il parle : miso ma ye mafungwamaka ntángo alobaka'
      },{
        francais: 'ankylose   ',
        lingala: ' akilose ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'ankyloser    ',
        lingala: ' koboma binama ,kokúfa ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) ankyloser une jambe : koboma lokolo. 2)  ma jambe s’ankylose :  lokolo la ngáí lokúfí.'
      }, {
        francais: 'ankylostom   ',
        lingala: ' akilositomi ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'anneau   ',
        lingala: '  ekomo, lompɛ́tɛ́,mpɛ́tɛ́ ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) les anneaux d’une chaîne : mpɛ́tɛ́  ya monyololo. 2) anneau de mariage, de fiançailles : lompɛ́tɛ́la libála.        '
      }, {
        francais: 'année   ',
        lingala: ' mbúla, mobú  ',
        // tslint:disable-next-line: max-line-length
        exemple:'je ne l’ai pas revu depuis des années : namoní ye te mbúla ebelé.        '
      }, {
        francais: 'annexe   ',
        lingala: 'libakisi,abakisi,-a nsima  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une école annexe :  etéyelo ya nsima.         '
      }, {
        francais: 'annexer    ',
        lingala: '  kokangisa, kobándisa  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) annexer un document à un dossier : kokangisa mokandá na dosyé.        '
      }, {
        francais: 'annexion    ',
        lingala: ' bokangisi, bozwi  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'anniversaire   ',
        lingala: '-a bokundoli  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) une fête anniversaire : eyenga ya bokundoli. 2) c’est mon anniversaire (de naissance) : lelo eye ezalí bokundoli (mokolo na bótámákí ) mbótáma ya ngáí.         '
      }, {
        francais: 'annonce    ',
        lingala: 'sango,liyébisi,elembo',
        // tslint:disable-next-line: max-line-length
        exemple:'1) faire passer une annonce à la radio : kolekisa sango na ladyó. 2) la cigale annonce la saison sèche : lilélé lizalí elembo ya elanga        '
      }, {
        francais: 'annoncer   ',
        lingala: ' kosangela, kosakola  ',
        // tslint:disable-next-line: max-line-length
        exemple:'annoncer une bonne ou une mauvaise nouvelle : kosangela sango elámu tô ebé'
      }, {
        francais: 'annoncer  ',
        lingala: '  kolakisa, komÔ¡nisa ',
        // tslint:disable-next-line: max-line-length
        exemple:'les nuages annoncent la pluie ; la cloche annonce la fin des cours :  mapatá makolakisa te mbúla ezalí koyâ ; ngonga ekolakisa te matéya '
      }, {
        francais: ' komonono, koyébana    ',
        lingala: ' -a bolingo ',
        // tslint:disable-next-line: max-line-length
        exemple:'son intelligence s’annonce précoce :  mayɛ́lɛ ma ye mamononí mbángu (na bomwana).         '
      }, {
        francais: 'annuel, elle   ',
        lingala: ' -a mbúla yoko,-a mbúla ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) un contrat annuel : kontalá ya mbúla yoko. 2) un impôt annuel: mpáko ya mbúla        '
      }, {
        francais: 'annulaire   ',
        lingala: 'mosapi mwa mínei mwa loboko',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, 
      {
        francais: 'annulaire   ',
        lingala: ' mosapi mwa lompɛ́tɛ ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'annulation   ',
        lingala: 'bobomi,bozímisi,bolongoli  ',
        // tslint:disable-next-line: max-line-length
        exemple:'annulation d’une élection : bobomi boponi.'
      }, {
        francais: 'annuler    ',
        lingala: 'kolongola, koboma  ',
        // tslint:disable-next-line: max-line-length
        exemple:'annuler une élection, une invitation : koboma boponi, mbélá'
      }, {
        francais: 'annuler  (se neutraliser )  ',
        lingala: 'kobomana, kolongolana  ',
        // tslint:disable-next-line: max-line-length
        exemple:'deux forces égales et opposées s’annulent : nguyá íbalé ikokání mpé ikútútání ikobomana.'
      },{
        francais: 'ânonner    ',
        lingala: ' kotatabana na bolobi, na botángi, na bosakoli ',
        // tslint:disable-next-line: max-line-length
        exemple:'un élève qui ânonne : moyékoli azalí kotatabana na bolobi, na botángi, mpé na bosakoli.        '
      }, {
        francais: 'anonyme   ',
        lingala: ' (e)-zángá nkómbó  ',
        // tslint:disable-next-line: max-line-length
        exemple:'écrivain anonyme, lettre anonyme :  mokomi azángá nkómbó, mokandá mozángá mokomi.'
      }, {
        francais: 'anorexie   ',
        lingala: ' bozángi mpósá ya biléi ',
        // tslint:disable-next-line: max-line-length
        exemple:'cet enfant souffre d’anorexie : mwana óyo azángí mpósá ya kolíya.        '
      }, {
        francais: 'anormal, ale, aux     ',
        lingala: ' -lámu tɛ́, -a kokámwa, (e)longóbání tɛ́',
        // tslint:disable-next-line: max-line-length
        exemple:'une pluie anormale en pleine saison sèche : mbúla elongóbání tɛ́na elanga.'
      }, {
        francais: 'anse   ',
        lingala: 'esímbele ',
        // tslint:disable-next-line: max-line-length
        exemple:'anse d’un vase, d’un panier : esimbele ya eloko, ya kitúnga.        '
      }, {
        francais: 'antagonisme   ',
        lingala: ' bombanda  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'antagoniste   ',
        lingala: ' -a bombanda, -a lisolongo ',
        // tslint:disable-next-line: max-line-length
        exemple:'forces antagonistes : nguyá ya lisolongo :  bangúná bazalí kondongbana. '
      }, {
        francais: 'antenne    ',
        lingala: '  monzombá, antɛ́ni  ',
        // tslint:disable-next-line: max-line-length
        exemple:' antennes de l’escargot : minzombá mya mbɛmbɛ́. 2)  antenne de télévision : monzombá (tô antɛ́ni ya) mwa televizyó. '
      }, {
        francais: 'antérieur, eure   ',
        lingala: '  -a yambo, -a libosó,binama  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) un événement antérieur à un autre :  likambo lya yambo lya lisúsu.2) membres antérieurs (tête, pattes de devant chez les animaux horizontaux) :  bya yambo ( motó, makolo ma libosó mpo ya nyama ilálá sémba).        '
      }, {
        francais: 'anthropomorphe   ',
        lingala: ' un singe anthropomorphe ',
        // tslint:disable-next-line: max-line-length
        exemple:'nkéma ya loléngé la moto.'
      }, {
        francais: 'anthropophage   ',
        lingala: ' moléi bato  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'anthropophagie   ',
        lingala: ' boléi bato  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'antibiotique    ',
        lingala: ' atíbyotíki ',
        // tslint:disable-next-line: max-line-length
        exemple:'la pénicilline est un antibiotique : peniselínɛ ezalí atibyotíke.        '
      }, {
        francais: 'anticiper    ',
        lingala: 'koyâ libosó,kosálela libosó,kowélisa',
        // tslint:disable-next-line: max-line-length
        exemple:'1)  anticiper un paiement : kofúta libosó, lifúta liyéi libosó.2)  anticiper sur ses revenus :kosálela mbongo ya ye libosó. 3) n’anticipons pas !:  tówélisa tɛ́.        '
      }, {
        francais: 'antidote   ',
        lingala: '  lisengoli,mono',
        // tslint:disable-next-line: max-line-length
        exemple:'la lecture est un antidote contre l’ennui : botángi bozalí m¡nÔ¡mwa mpi.'
      }, {
        francais: 'antilope    ',
        lingala: 'mbólókó,nzumba,mondonga  ',
        // tslint:disable-next-line: max-line-length
        exemple:'viande d’antilope : mosuni mwa mbólókó.'
      }, {
        francais: 'antipathie    ',
        lingala: ' boyini',
        // tslint:disable-next-line: max-line-length
        exemple:' avoir de l’antipathie pour qqn :kozala na boyini ya moto        '
      }, {
        francais: 'antiquaire   ',
        lingala: ' motɛ́ki bya kala  ',
        // tslint:disable-next-line: max-line-length
        exemple:'mon frère est antiquaire: ndeko wa ngáí azalí motÔ¥ki bya kala.'
      }, {
        francais: 'antique   ',
        lingala: ' -a kala kala  ',
        // tslint:disable-next-line: max-line-length
        exemple:'une statuette antique :  ekeko ya kala kala.         '
      }, {
        francais: 'antiquité   ',
        lingala: '  eleko ya kala  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) antiquité égyptienne : eleko ya kala ya Ezípeti. 2) antiquités africaines, gréco-latines : bya kala bya Afríka, bya Grɛ́ki mpé Latíno        '
      }, {
        francais: 'antiseptique   ',
        lingala: ' atísepitíki ',
        // tslint:disable-next-line: max-line-length
        exemple:' l’alcool éthylique est un antiseptique: alikolɛ ezalí atísepitíkí.        '
      }, {
        francais: 'antivol    ',
        lingala: ' epekisa moyíbi  ',
        // tslint:disable-next-line: max-line-length
        exemple:'un antivol pour vélo, des installations antivol : epekisa moíbi ya nkínga,bipekisa moyíbi'
      }, {
        francais: 'anus  ',
        lingala: ' monyutu, mosómbá',
        // tslint:disable-next-line: max-line-length
        exemple:''
      }, {
        francais: 'anxiété  ',
        lingala: ' somo ',
        // tslint:disable-next-line: max-line-length
        exemple:' attendre avec anxiété : kozela na somo'
      }, {
        francais: 'août   ',
        lingala: ' sánzá ya mwambe,agúsito  ',
        // tslint:disable-next-line: max-line-length
        exemple:'je viendrai en août : nakoyâ na sánzá ya mwambe.'
      }, {
        francais: 'apaiser ',
        lingala: ' kobondɛlɛ, kokitisa,kolɛmbisa,kolɛmbɛ  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) apaiser un enfant :  kobondɛlɛ mwana. 2)  l’enfant s’est apaisé : mwana alɛmbí.        '
      }, {
        francais: 'apatam    ',
        lingala: ' lingongo  ',
        // tslint:disable-next-line: max-line-length
        exemple:'s’abriter sous l’apatam : kobómbama na lingongo.'
      }, {
        francais: 'apercevoir    ',
        lingala: ' kokɛsɛnisa na mosíká ',
        // tslint:disable-next-line: max-line-length
        exemple:'j’aperçois une étoile: nazalí kokɛsɛnisa  monzóto na mosíká'
      },
      {
        francais: 'apercevoir    ',
        lingala: '  koyéba  ',
        // tslint:disable-next-line: max-line-length
        exemple:'il s’aperçoit de son erreur: ayébí mbéba na ye'
      },
      {
        francais: "apercevoir (s') ",
        lingala: '  komimono  ',
        // tslint:disable-next-line: max-line-length
        exemple:'1) je m’aperçois dans un miroir : azalí komímono na talatála. 2) tomononokí na balabála.        '
      },
      {
        francais: 'apéritif   ',
        lingala: ' epésa-nzala  ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amoureux, euse    ',
        lingala: ' -a bolingo ',
        // tslint:disable-next-line: max-line-length
        exemple:'prendre le whisky comme apéritif : komɛlɛ wisikí bó epésa-nzala        '
      },
      {
        francais: 'amoureux, euse    ',
        lingala: ' -a bolingo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },
      {
        francais: 'amoureux, euse    ',
        lingala: ' -a bolingo ',
        // tslint:disable-next-line: max-line-length
        exemple:''
      },

    ]
  }


}
