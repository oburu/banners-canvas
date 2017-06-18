
(function($, Edge, compId) {
    var _ = null,
        y = true,
        n = false,
        x33 = 'ellipse',
        x198 = '15px',
        x104 = '75px',
        x178 = 'line_3',
        x77 = 'integra',
        x56 = '157px',
        x148 = '102px',
        x234 = 'Rectangle-counterCopy',
        x48 = '314px',
        d = 'display',
        x147 = '549px',
        i = 'none',
        x152 = 'engage-animation',
        x219 = 'line_10',
        x185 = 'Social_Media',
        x36 = 'bold',
        x215 = 'Integrated_Stock',
        e173 = '${_online_full}',
        x119 = '347px',
        e259 = '${_Showroom_Sales}',
        e166 = '${_online}',
        x214 = 'line_13',
        ta = 'text-align',
        x120 = '200px',
        x10 = 'stage',
        x90 = '300px',
        rz = 'rotateZ',
        e242 = '${_Rectangle-counterCopy}',
        x1 = 'lato, sans-serif',
        c = 'color',
        x193 = 'In_Portals',
        x201 = 'line2',
        x115 = 'convert',
        x274 = 'Rectangle6',
        e24 = '${_animation-350}',
        e267 = '${_line_5}',
        x182 = '-128',
        x98 = '258px',
        x220 = 'Online_Fulfilment',
        x179 = '-58px',
        x213 = '18px',
        x128 = '28px',
        qoi = 'easeOutQuint',
        e159 = '${_iphone-macbook}',
        x134 = '68px',
        x123 = '38px',
        x94 = '327px',
        qq = 'easeInOutQuad',
        e167 = '${_awardCopy}',
        x67 = 'product',
        x212 = 'Online_Credit',
        x108 = 'online',
        x202 = '181',
        x70 = '220px',
        e177 = '${_integra}',
        x146 = '29px',
        x75 = '175px',
        x3 = '3.0.0.322',
        e21 = '${_close-button}',
        x73 = 'inPortals',
        x122 = '309px',
        x180 = '89px',
        x55 = 'tick',
        x139 = '69px',
        b = 'block',
        x135 = '49px',
        x58 = '317px',
        e249 = '${_Integrated_Enquiries}',
        x95 = 'prospects',
        e171 = '${_integra_stock}',
        s = 'style',
        x87 = 'rgba(0,0,0,0.35)',
        e17 = '${_ivendi_backg}',
        lf = 'left',
        x199 = 'line_7',
        x12 = 'auto',
        x71 = '101px',
        tp = 'top',
        x181 = 'Payment_Search',
        e268 = '${_line_6}',
        e270 = '${_line_10}',
        t = 'transform',
        x4 = 'rgba(0,0,0,0)',
        x191 = 'line',
        r = 'deg',
        e245 = '${_line_7}',
        e161 = '${_integrated}',
        e162 = '${_award}',
        e246 = '${_learnmore}',
        x195 = 'engage',
        x = 'text',
        e258 = '${_Online_Credit}',
        e13 = '${_background-skycraper}',
        m = 'rect',
        h = 'height',
        e157 = '${_tickCopy3}',
        x30 = '50%',
        l = 'normal',
        e23 = '${_out-expand}',
        x86 = 'Engage',
        x34 = 'rgba(165,165,165,0.6314)',
        x205 = 'Prospect_Analytics',
        x45 = 'rgba(255,255,255,0.63)',
        e266 = '${_line_13}',
        ff = 'font-family',
        e254 = '${_iphone-macbook3}',
        x54 = '208px',
        x216 = 'line_12',
        x200 = 'Responsive_Forms',
        x41 = 'close-button',
        e172 = '${_lender}',
        e16 = '${_ivendi_logo}',
        x133 = '144px',
        x228 = '244px',
        x89 = '366px',
        x142 = 'responsive-showcase-CFC2',
        x101 = 'socialMedia',
        x35 = 'rgba(255,255,255,1)',
        x217 = 'Showroom_Sales',
        x140 = 'transact',
        x129 = 'showroom',
        e25 = '${_Stage}',
        e269 = '${_line_1}',
        x53 = 'tickCopy2',
        x51 = 'tickCopy',
        e163 = '${_tickCopy}',
        x81 = 'italic',
        x114 = '63px',
        x206 = 'line_6',
        x225 = '30px',
        qoq = 'easeOutQuad',
        x278 = 'close-button_1',
        qik = 'easeInBack',
        x186 = 'line_1',
        x8 = 'rgba(6,185,103,0.6314)',
        x204 = '135',
        x277 = '83px',
        x2 = '3.0.0',
        e276 = '${_Ellipse4}',
        e275 = '${_Rectangle6}',
        x273 = '111px',
        x272 = 'rgba(238,238,238,1)',
        x271 = 'Ellipse4',
        e265 = '${_line2}',
        p = 'px',
        e264 = '${_line_8}',
        e263 = '${_Lender_Integration}',
        e248 = '${_Integrated_Stock}',
        e261 = '${_Online_Fulfilment}',
        e251 = '${_In_Portals}',
        e43 = '${symbolSelector}',
        e257 = '${_line_12}',
        x233 = 'rgba(0,0,0,0.25)',
        e256 = '${_social_media}',
        e255 = '${_line_4}',
        x28 = '23px',
        e153 = '${_cta-small}',
        e164 = '${_responsive-showcase-CFC2}',
        e252 = '${_line_2}',
        e168 = '${_tick}',
        e260 = '${_line_3}',
        e250 = '${_Responsive_Forms}',
        e262 = '${_responsive-showcase-CFC}',
        e247 = '${_Prospect_Analytics}',
        e244 = '${_Payment_Search}',
        ql = 'linear',
        e243 = '${_line}',
        x241 = 'rgba(0,0,0,0.38)',
        e240 = '${_engage}',
        e239 = '${_convertCopy}',
        x222 = 'Lender_Integration',
        x237 = 'rgba(223,215,48,1.00)',
        x236 = 'rgba(20,148,51,1.00)',
        x235 = 'rgba(192,192,192,1)',
        x31 = 'close',
        xc = 'rgba(0,0,0,1)',
        x105 = 'integrated',
        x232 = '728px',
        x208 = 'line_5',
        x231 = '-856px',
        x136 = 'lender',
        x229 = '130px',
        x66 = '81px',
        x227 = '85px',
        e160 = '${_transact}',
        x226 = 'learnmore',
        x117 = 'responsive-showcase-ivendi-ipad-copy',
        x223 = '-128px',
        a = 'Base State',
        x238 = 'animation-350',
        x112 = 'awardCopy',
        e174 = '${_tickCopy2}',
        x15 = 'hidden',
        x32 = 'rgb(0, 0, 0)',
        x196 = 'rgba(0,0,0,0.65098)',
        dt = 'Default Timeline',
        x110 = '12px',
        x14 = 'rgba(154,201,188,1.00)',
        o = 'opacity',
        x124 = 'integra_stock',
        e155 = '${_product}',
        x211 = '-123px',
        x9 = 'rgba(6,185,103,0)',
        x49 = '16px',
        x29 = '26px',
        x97 = '36px',
        x209 = 'Integrated_Enquiries',
        x210 = 'line_4',
        x207 = 'social_media',
        x84 = '76px',
        x59 = '86px',
        x118 = '80px',
        x100 = '50px',
        bg = 'background-color',
        x103 = '205px',
        e176 = '${_Engage}',
        x47 = '11px',
        x93 = '37px',
        x203 = '241',
        e169 = '${_responsive-showcase-ivendi-ipad-copy}',
        x197 = '87px',
        x194 = 'iphone-macbook3',
        x221 = 'line_8',
        x61 = '400',
        x85 = '300',
        x183 = '96px',
        x46 = 'tickCopy3',
        x88 = 'iphone-macbook',
        e22 = '${_engage-animation-90}',
        fs = 'font-size',
        x149 = 'cta-small',
        x189 = '-123',
        x192 = '155px',
        x62 = 'payment',
        e42 = '${_Text8}',
        x60 = '27px',
        g = 'image',
        po = 'center',
        x80 = '67px',
        x187 = '-58',
        x39 = '9px',
        x91 = '191px',
        x107 = '142px',
        x40 = '6px',
        e175 = '${_prospects}',
        x26 = '8px',
        x138 = '7px',
        x37 = 'Text8',
        x57 = '1px',
        x69 = '4px',
        x64 = '3px',
        e170 = '${_inPortals}',
        x52 = '264px',
        x27 = '0px',
        e165 = '${_convert}',
        x144 = '371',
        x11 = 'pointer',
        e158 = '${_showroom}',
        e156 = '${_socialMedia}',
        e154 = '${_payment}',
        x131 = 'online_full',
        x126 = '259px',
        x150 = 'rgba(0,0,0,0.30)',
        e253 = '${_Social_Media}',
        qok = 'easeOutBack',
        x79 = '14px',
        x99 = '64px',
        x127 = '74px',
        x190 = '54px',
        x18 = 'rgba(0,0,0,0.17)',
        x72 = '39px',
        x143 = '179',
        x82 = 'award',
        x6 = 'rgba(255,255,255,1.00)',
        x76 = '84px',
        x65 = '268px',
        w = 'width',
        x224 = 'responsive-showcase-CFC',
        ov = 'overflow',
        x111 = '110px',
        x20 = 'rgba(6,185,103,0.00)',
        e44 = '${_close}',
        x184 = 'line_2',
        e19 = '${_hover-expand}';
    var im = './images/';
    var g92 = 'iphone-macbook.png',
        g7 = 'ivendi_logo2.png',
        g50 = '1401375178_tick.png',
        g5 = 'background-skycraper.jpg',
        g230 = 'cta-12.png',
        g145 = 'responsive-showcase-CFC.png',
        g121 = 'responsive-showcase-ivendi-ipad-copy.png',
        g151 = 'cta-small.png';
    var s96 = "Prospect Analytics",
        s74 = "In Portals &amp; Dealer sites",
        s188 = "Integrated Finance",
        s102 = "Social Media Profiling",
        s141 = "Transact",
        s106 = "Integrated Enquiries",
        s78 = "Integrated Finance<br>",
        s116 = "Convert<br>",
        s218 = "Showroom Sales Tools<br>",
        s113 = "Responsive Forms",
        s132 = "Online Fulfilment",
        s137 = "Lender Integration",
        s125 = "Integrated Stock",
        s63 = "Payment Search",
        s38 = "X",
        s109 = "Online Credit Checking",
        s83 = "Award Winning",
        s130 = "Showroom Sales Tools",
        s68 = "Product Videos";
    var fonts = {};
    fonts[x1] = '<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>';
    var P = Edge.P,
        T = Edge.T,
        A = Edge.A;
    var opts = {
        'preloadAudio': false
    };
    var resources = [];
    var symbols = {
        "stage": {
            v: x2,
            mv: x2,
            b: x3,
            bS: a,
            stf: i,
            cg: i,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    id: 'background-skycraper',
                    t: g,
                    r: ['-1px', '0px', '172px', '600px', 'auto', 'auto'],
                    f: [x4, im + g5, '0px', '0px'],
                    filter: [0, 0, 1, 1, 0, 0, 0, 7, "rgba(0,0,0,0)", 0, 0, 0]
                }, {
                    id: 'ivendi_backg',
                    t: m,
                    r: ['31px', '-1px', '92px', '50px', 'auto', 'auto'],
                    f: [x6],
                    s: [0, "rgb(0, 0, 0)", i],
                    boxShadow: ["", 0, 3, 3, 0, "rgba(0,0,0,0.17)"]
                }, {
                    id: 'ivendi_logo',
                    t: g,
                    r: ['40px', '5px', '74px', '36px', 'auto', 'auto'],
                    f: [x4, im + g7, '0px', '0px']
                }, {
                    id: 'engage-animation-90',
                    v: b,
                    t: m,
                    r: ['125', '-7', 'auto', 'auto', 'auto', 'auto']
                }, {
                    id: 'animation-350',
                    v: i,
                    t: m,
                    r: ['200', '49', 'auto', 'auto', 'auto', 'auto']
                }, {
                    id: 'close-button',
                    v: i,
                    t: m,
                    r: ['697', '5', 'auto', 'auto', 'auto', 'auto']
                }, {
                    id: 'hover-expand',
                    v: b,
                    t: m,
                    r: ['0px', '-1px', '728px', '90px', 'auto', 'auto'],
                    cu: ['pointer'],
                    f: [x8],
                    s: [0, "rgb(0, 0, 0)", i]
                }, {
                    id: 'out-expand',
                    v: i,
                    t: m,
                    r: ['0px', '-1px', '681px', '345px', 'auto', 'auto'],
                    cu: ['pointer'],
                    f: [x9],
                    s: [0, "rgb(0, 0, 0)", i]
                }],
                sI: [{
                    id: 'engage-animation-90',
                    sN: 'engage-animation',
                    a: {}
                }, {
                    id: 'close-button',
                    sN: 'close-button',
                    a: {}
                }, {
                    id: 'animation-350',
                    sN: 'animation-350',
                    a: {}
                }]
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 25250,
                    a: n,
                    tt: []
                }
            }
        },
        "close-button": {
            v: x2,
            mv: x2,
            b: x3,
            bS: a,
            stf: i,
            cg: i,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    r: [x26, x27, x28, x29, x12, x12],
                    br: [x30, x30, x30, x30],
                    id: x31,
                    s: [0, x32, i],
                    t: x33,
                    f: [x34]
                }, {
                    n: [x1, 12, x35, x36, i, l],
                    t: x,
                    id: x37,
                    text: s38,
                    align: lf,
                    r: [x39, x40, x12, x12, x12, x12]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 0,
                    a: y,
                    tt: []
                }
            }
        },
        "engage-animation": {
            v: x2,
            mv: x2,
            b: x3,
            bS: a,
            stf: i,
            cg: i,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    id: x46,
                    t: g,
                    r: [x47, x48, x49, x49, x12, x12],
                    f: [x4, im + g50, x27, x27]
                }, {
                    id: x51,
                    t: g,
                    r: [x47, x52, x49, x49, x12, x12],
                    f: [x4, im + g50, x27, x27]
                }, {
                    id: x53,
                    t: g,
                    r: [x47, x54, x49, x49, x12, x12],
                    f: [x4, im + g50, x27, x27]
                }, {
                    id: x55,
                    t: g,
                    r: [x47, x56, x49, x49, x12, x12],
                    f: [x4, im + g50, x27, x27]
                }, {
                    r: [x57, x58, x59, x60, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x62,
                    text: s63,
                    align: po,
                    t: x
                }, {
                    r: [x64, x65, x66, x60, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x67,
                    text: s68,
                    align: po,
                    t: x
                }, {
                    r: [x69, x70, x71, x72, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x73,
                    text: s74,
                    align: po,
                    t: x
                }, {
                    r: [x39, x75, x76, x72, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    align: po,
                    id: x77,
                    o: 1,
                    text: s78,
                    t: x
                }, {
                    r: [x79, x80, x12, x12, x12, x12],
                    n: [x1, 14, x35, x61, i, x81],
                    id: x82,
                    text: s83,
                    align: lf,
                    t: x
                }, {
                    r: [x79, x84, x12, x12, x12, x12],
                    n: [x1, 32, x6, x85, i, x81],
                    id: x86,
                    text: x86,
                    textShadow: [x87, 2, 2, 2],
                    t: x
                }, {
                    id: x88,
                    t: g,
                    r: [x71, x89, x90, x91, x12, x12],
                    f: [x4, im + g92, x27, x27]
                }, {
                    r: [x93, x94, x84, x72, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x95,
                    text: s96,
                    align: lf,
                    t: x
                }, {
                    r: [x97, x98, x99, x100, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x101,
                    text: s102,
                    align: lf,
                    t: x
                }, {
                    r: [x97, x103, x104, x12, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x105,
                    text: s106,
                    align: lf,
                    t: x
                }, {
                    r: [x93, x107, x104, x72, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x108,
                    text: s109,
                    align: lf,
                    t: x
                }, {
                    r: [x110, x111, x12, x12, x12, x12],
                    n: [x1, 14, x35, x61, i, x81],
                    id: x112,
                    text: s113,
                    align: lf,
                    t: x
                }, {
                    r: [x110, x114, x12, x12, x12, x12],
                    n: [x1, 32, x6, x85, i, x81],
                    id: x115,
                    text: s116,
                    textShadow: [x87, 2, 2, 2],
                    t: x
                }, {
                    id: x117,
                    t: g,
                    r: [x118, x119, x120, x120, x12, x12],
                    f: [x4, im + g121, x27, x27]
                }, {
                    r: [x93, x122, x99, x123, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x124,
                    text: s125,
                    align: lf,
                    t: x
                }, {
                    r: [x93, x126, x127, x128, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x129,
                    text: s130,
                    align: lf,
                    t: x
                }, {
                    r: [x93, x103, x127, x97, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x131,
                    text: s132,
                    align: lf,
                    t: x
                }, {
                    r: [x93, x133, x134, x135, x12, x12],
                    n: [x1, 14, x35, x61, i, l],
                    id: x136,
                    text: s137,
                    align: lf,
                    t: x
                }, {
                    r: [x138, x139, x12, x12, x12, x12],
                    n: [x1, 30, x6, x85, i, x81],
                    id: x140,
                    text: s141,
                    textShadow: [x87, 2, 2, 2],
                    t: x
                }, {
                    id: x142,
                    t: g,
                    r: [x143, x144, x90, x91, x12, x12],
                    f: [x4, im + g145, x27, x27]
                }, {
                    r: [x146, x147, x148, x72, x12, x12],
                    id: x149,
                    boxShadow: ['', 0, 3, 3, 0, x150],
                    t: g,
                    f: [x4, im + g151, x27, x27]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 20447,
                    a: y,
                    tt: []
                }
            }
        },
        "animation-350": {
            v: x2,
            mv: x2,
            b: x3,
            bS: a,
            stf: i,
            cg: i,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    id: x178,
                    t: m,
                    r: [x179, x180, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x181,
                    text: s63,
                    align: lf,
                    r: [x182, x183, x12, x12, x12, x12]
                }, {
                    id: x184,
                    t: m,
                    r: [x179, x180, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x185,
                    text: s68,
                    align: lf,
                    r: [x182, x183, x12, x12, x12, x12]
                }, {
                    id: x186,
                    t: m,
                    r: [x187, x180, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x105,
                    text: s188,
                    align: lf,
                    r: [x189, x190, x12, x12, x12, x12]
                }, {
                    id: x191,
                    t: m,
                    r: [x189, x192, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x193,
                    text: s74,
                    align: lf,
                    r: [x182, x183, x12, x12, x12, x12]
                }, {
                    id: x194,
                    t: g,
                    r: [x27, x27, x90, x91, x12, x12],
                    f: [x4, im + g92, x27, x27]
                }, {
                    n: [x1, 40, x35, x85, i, l],
                    t: x,
                    align: lf,
                    id: x195,
                    text: x86,
                    textShadow: [x196, 3, 3, 3],
                    r: [x197, x198, x12, x12, x12, x12]
                }, {
                    id: x199,
                    t: m,
                    r: [x179, x180, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x200,
                    text: s96,
                    align: lf,
                    r: [x182, x183, x12, x12, x12, x12]
                }, {
                    id: x201,
                    t: m,
                    tf: [
                        [0, 0],
                        [x202]
                    ],
                    r: [x203, x204, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x205,
                    text: s113,
                    align: lf,
                    r: [x182, x183, x12, x12, x12, x12]
                }, {
                    id: x206,
                    t: m,
                    r: [x179, x180, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x207,
                    text: s102,
                    align: lf,
                    r: [x182, x183, x12, x12, x12, x12]
                }, {
                    id: x208,
                    t: m,
                    r: [x187, x180, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x209,
                    text: s132,
                    align: lf,
                    r: [x189, x190, x12, x12, x12, x12]
                }, {
                    id: x210,
                    t: m,
                    r: [x211, x192, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x212,
                    text: s137,
                    align: lf,
                    r: [x182, x183, x12, x12, x12, x12]
                }, {
                    id: x117,
                    t: g,
                    r: [x100, x213, x120, x120, x12, x12],
                    f: [x4, im + g121, x27, x27]
                }, {
                    n: [x1, 40, x35, x85, i, l],
                    t: x,
                    align: lf,
                    id: x115,
                    text: s116,
                    textShadow: [x196, 3, 3, 3],
                    r: [x197, x198, x12, x12, x12, x12]
                }, {
                    id: x214,
                    t: m,
                    r: [x179, x180, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x215,
                    text: s125,
                    align: lf,
                    r: [x182, x183, x12, x12, x12, x12]
                }, {
                    id: x216,
                    t: m,
                    r: [x179, x180, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x217,
                    text: s218,
                    align: lf,
                    r: [x182, x183, x12, x12, x12, x12]
                }, {
                    id: x219,
                    t: m,
                    r: [x187, x180, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x220,
                    text: s132,
                    align: lf,
                    r: [x189, x190, x12, x12, x12, x12]
                }, {
                    id: x221,
                    t: m,
                    r: [x211, x192, x12, x12, x12, x12]
                }, {
                    n: [x1, 16, x35, x61, i, l],
                    t: x,
                    id: x222,
                    text: s137,
                    align: lf,
                    r: [x223, x183, x12, x12, x12, x12]
                }, {
                    n: [x1, 40, x35, x85, i, l],
                    t: x,
                    align: lf,
                    id: x140,
                    text: s141,
                    textShadow: [x196, 3, 3, 3],
                    r: [x197, x198, x12, x12, x12, x12]
                }, {
                    id: x224,
                    t: g,
                    r: [x27, x225, x90, x91, x12, x12],
                    f: [x4, im + g145, x27, x27]
                }, {
                    id: x226,
                    t: g,
                    r: [x227, x228, x229, x100, x12, x12],
                    f: [x4, im + g230, x27, x27]
                }, {
                    r: [x231, x39, x232, x64, x12, x12],
                    boxShadow: ['', 2, 2, 2, 0, x233],
                    id: x234,
                    s: [0, xc, i],
                    t: m,
                    f: [x235, [0, [
                        [x236, 0],
                        [x237, 100]
                    ]]]
                }],
                sI: [{
                    id: 'line_10',
                    sN: 'line_1',
                    a: {}
                }, {
                    id: 'line_12',
                    sN: 'line_1',
                    a: {}
                }, {
                    id: 'line_8',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line2',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_5',
                    sN: 'line_1',
                    a: {}
                }, {
                    id: 'line_1',
                    sN: 'line_1',
                    a: {}
                }, {
                    id: 'line',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_13',
                    sN: 'line_1',
                    a: {}
                }, {
                    id: 'line_3',
                    sN: 'line_1',
                    a: {}
                }, {
                    id: 'line_4',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_7',
                    sN: 'line_1',
                    a: {}
                }, {
                    id: 'line_2',
                    sN: 'line_1',
                    a: {}
                }, {
                    id: 'line_6',
                    sN: 'line_1',
                    a: {}
                }]
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 25250,
                    a: y,
                    tt: []
                }
            }
        },
        "line": {
            v: x2,
            mv: x2,
            b: x3,
            bS: a,
            stf: i,
            cg: i,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    r: [x27, x27, x26, x26, x12, x12],
                    br: [x30, x30, x30, x30],
                    id: x271,
                    s: [0, x32, i],
                    t: x33,
                    f: [x272]
                }, {
                    r: [x26, x69, x273, x57, x12, x12],
                    id: x274,
                    s: [0, x32, i],
                    t: m,
                    f: [x272]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 0,
                    a: y,
                    tt: []
                }
            }
        },
        "line_1": {
            v: x2,
            mv: x2,
            b: x3,
            bS: a,
            stf: i,
            cg: i,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    r: [x27, x27, x26, x26, x12, x12],
                    br: [x30, x30, x30, x30],
                    id: x271,
                    s: [0, x32, i],
                    t: x33,
                    f: [x272]
                }, {
                    t: m,
                    id: x274,
                    s: [0, x32, i],
                    r: [x26, x69, x277, x57, x12, x12],
                    f: [x272]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 0,
                    a: y,
                    tt: []
                }
            }
        },
        "close-button_1": {
            v: x2,
            mv: x2,
            b: x3,
            bS: a,
            stf: i,
            cg: i,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    r: [x26, x27, x28, x29, x12, x12],
                    br: [x30, x30, x30, x30],
                    id: x31,
                    s: [0, x32, i],
                    t: x33,
                    f: [x34]
                }, {
                    n: [x1, 12, x35, x36, i, l],
                    t: x,
                    id: x37,
                    text: s38,
                    align: lf,
                    r: [x39, x40, x12, x12, x12, x12]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 0,
                    a: y,
                    tt: []
                }
            }
        }
    };
    var S1 = symbols[x10];
    var tl0 = S1.tl[dt].tt,
        st1 = S1.s[a] = {},
        A1 = A(_, tl0, st1);
    A1.A(e13).P(tp, 0).P("filter.blur", 7, "subproperty").P(lf, -1);
    A1.A(e16).P(tp, 5).P(h, 36).P(lf, 40).P(w, 74);
    A1.A(e17).P(bg, x6, c).P("boxShadow.blur", 3, "subproperty").P(rz, 0, t, _, r).P(lf, 31, _, _, p).P(w, 92).P(tp, -1).P("boxShadow.spread", 0, "subproperty").P("boxShadow.offsetV", 3, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P("boxShadow.color", x18, "subproperty");
    A1.A(e19).P(tp, -1).P("cursor", x11).P(d, b).T(0, b).T(10, i).P(h, 600).T(0, 600).P(bg, x20, c).T(0, x20).P(w, 120).T(0, 120);
    A1.A(e21).P(d, i).T(0, i).T(10, b).P(lf, 693).T(10, 693).P(tp, 7).T(10, 7);
    A1.A(e22).P("cursor", x12).P(tp, 0).T(0, 0).P(lf, 0).T(0, 0).P(d, b).T(10, i);
    A1.A(e23).P(tp, -1).P(h, 345).P(lf, 0).P("cursor", x11).P(d, i).T(10, b);
    A1.A(e24).P(d, i).T(10, b);
    A1.A(e25).P(bg, x14, c).P(ov, x15).P(h, 600).T(0, 600).P(w, 160).T(0, 160);
    var S2 = symbols[x41];
    var tl1 = S2.tl[dt].tt,
        st2 = S2.s[a] = {},
        A2 = A(_, tl1, st2);
    A2.A(e42).P(tp, 6).P(lf, 9);
    A2.A(e43).P(h, 26).P(w, 27);
    A2.A(e44).P(tp, 0).T(0, 0).P(h, 26).T(0, 26).P(bg, x45, c).T(0, x45).P(lf, 0).T(0, 0).P(w, 27).T(0, 27);
    var S3 = symbols[x152];
    var tl2 = S3.tl[dt].tt,
        st3 = S3.s[a] = {},
        A3 = A(_, tl2, st3);
    A3.A(e153).P(tp, 549).P("boxShadow.color", x150, "subproperty").P("boxShadow.blur", 3, "subproperty").P(lf, 29).P(h, 39).P("boxShadow.offsetV", 3, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P(w, 102);
    A3.A(e43).P(h, 600).P(w, 160);
    A3.A(e154).P("font-weight", 400, _, _, "").P(lf, 36, _, _, p).P(fs, 14).P(tp, 309).P(ta, lf).P("font-style", l).P(h, 27).P(w, 86).P(o, 0, _, _, "").T(1.875, 1, 1, qoi).T(6, 0, 1);
    A3.A(e155).P(lf, 36).P(fs, 14).P(tp, 259).P(ta, lf).P("font-style", l).P(h, 27).P(w, 81).P("font-weight", 400, _, _, "").P(o, 0).T(1.5, 1, 1, qoi).T(6, 0, 1);
    A3.A(e156).P(tp, 258).P(w, 64).P(h, 50).P("font-weight", 400, _, _, "").P("font-style", l).P(lf, 36, _, _, p).P(fs, 14).P(o, 0, _, _, "").T(8, 1, 1, qoi).T(12, 0, 1);
    A3.A(e157).P(lf, 11).P(tp, 314).T(1.875, 314).T(8.311, 330).T(15, 312).P(o, 0, _, _, "").T(1.875, 1, 1, qoi).T(6, 0, 1).T(8.311, 1, 1).T(12, 0, 1).T(15, 1, 1).T(19, 0, 1);
    A3.A(e158).P(tp, 259).P(w, 74).P(h, 28).P("font-weight", 400, _, _, "").P("font-style", l).P(lf, 37, _, _, p).P(fs, 14).P(o, 0, _, _, "").T(14.75, 1, 1, qoi).T(19, 0, 1);
    A3.A(e159).P(tp, 353).P(lf, 161).T(0, -31, 1.875, ql).T(1.875, -170, 4.121).T(5.996, -292, 1.504);
    A3.A(e160).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(c, x6, c).P("font-weight", 300, _, _, "").P(fs, 30, _, _, p).P("font-style", x81).P("textShadow.color", x87, "subproperty").P("textShadow.offsetV", 2, "subproperty").P(ff, x1).P(tp, 43).T(14, 69, 1, qok).T(19.447, 43, 1).T(20.447, 69).P(o, 0, _, _, "").T(14, 1, 1).T(19.447, 0, 1).P(lf, 26, _, _, p).T(14, 26);
    A3.A(e161).P(tp, 205).P(w, 75).P("font-weight", 400, _, _, "").P("font-style", l).P(lf, 36, _, _, p).P(fs, 14).P(o, 0, _, _, "").T(7.75, 1, 1, qoi).T(12, 0, 1);
    A3.A(e162).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(tp, 90).T(0.5, 114, 1, qoi).T(6.5, 90, 1).P(o, 0, _, _, "").T(0.5, 1, 1).T(6.5, 0, 1).P(lf, 15, _, _, p).T(0.5, 35);
    A3.A(e163).P(tp, 264).P(lf, 11).T(1.5, 11).T(7, 11).T(8, 11).T(14.75, 11).T(20, 11).P(o, 0, _, _, "").T(1.5, 1, 1, qoi).T(6, 0, 1).T(8, 1, 1).T(12, 0, 1).T(14.75, 1, 1).T(19, 0, 1);
    A3.A(e164).P(h, 173).P(tp, 366).P(w, 272).P(lf, 160).T(13.5, -9, 1.5, ql).T(15, -150, 4).T(19, -259, 1.447);
    A3.A(e165).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(c, x6, c).P("font-weight", 300, _, _, "").P(fs, 32, _, _, p).P("textShadow.color", x87, "subproperty").P("font-style", x81).P(ff, x1).P("textShadow.offsetV", 2, "subproperty").P(tp, 37).T(7, 63, 1, qok).T(13, 28, 1).P(o, 0, _, _, "").T(7, 1, 1).T(13, 0, 1).P(lf, 27, _, _, p).T(7, 27).T(14, 27);
    A3.A(e166).P(tp, 142).P(w, 75).P(h, 39).P("font-weight", 400, _, _, "").P("font-style", l).P(lf, 37, _, _, p).P(fs, 14).P(o, 0, _, _, "").T(7.5, 1, 1, qoi).T(12, 0, 1);
    A3.A(e167).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(tp, 86).T(7, 110, 1, qoi).T(12.5, 86, 1, qok).P(o, 0, _, _, "").T(7, 1, 1, qoi).T(12.5, 0, 1).P(lf, 29, _, _, p).T(7, 29);
    A3.A(e168).P(lf, 11).P(tp, 146).T(1, 155).T(7.5, 146).P(o, 0, _, _, "").T(1, 1, 1, qoi).T(6, 0, 1).T(7.5, 1, 1).T(12, 0, 1).T(14.25, 1, 1).T(19, 0, 1);
    A3.A(e169).P(lf, 160).T(6.5, -9, 1.811, ql).T(8.311, -75, 4.226).T(12.537, -165, 1.516).P(tp, 357).T(6.5, 357);
    A3.A(e170).P(lf, 34).P(fs, 14).P(tp, 203).P(ta, lf).P("font-style", l).P(h, 39).P(w, 101).P("font-weight", 400, _, _, "").P(o, 0).T(1.25, 1, 1, qoi).T(6, 0, 1);
    A3.A(e171).P(tp, 309).P(w, 64).P(h, 38).P("font-style", l).P("font-weight", 400, _, _, "").P(lf, 37, _, _, p).P(fs, 14).P(o, 0, _, _, "").T(15, 1, 1, qoi).T(19, 0, 1);
    A3.A(e172).P(tp, 144).P(w, 68).P(h, 49).P("font-weight", 400, _, _, "").P("font-style", l).P(lf, 37, _, _, p).P(fs, 14).P(o, 0, _, _, "").T(14.25, 1, 1, qoi).T(19, 0, 1);
    A3.A(e173).P(tp, 205).P(w, 74).P(h, 36).P("font-weight", 400, _, _, "").P("font-style", l).P(lf, 37, _, _, p).P(fs, 14).P(o, 0, _, _, "").T(14.5, 1, 1, qoi).T(19, 0, 1);
    A3.A(e174).P(tp, 208).P(lf, 11).P(o, 0, _, _, "").T(1.25, 1, 1, qoi).T(6, 0, 1).T(7.75, 1, 1).T(12, 0, 1).T(14.5, 1, 1).T(19, 0, 1);
    A3.A(e175).P(tp, 327).P(w, 76).P(h, 39).P("font-style", l).P("font-weight", 400, _, _, "").P(lf, 37, _, _, p).P(fs, 14).P(o, 0, _, _, "").T(8.311, 1, 1, qoi).T(12, 0, 1);
    A3.A(e176).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(c, x6, c).P("font-weight", 300, _, _, "").P(fs, 32, _, _, p).P("font-style", x81).P(ff, x1).P("textShadow.offsetV", 2, "subproperty").P("textShadow.color", x87, "subproperty").P(tp, 36).T(0, 63, 1, qok).T(6.5, 37, 1).P(o, 0, _, _, "").T(0, 1, 1).T(6.5, 0, 1).P(lf, 33, _, _, p).T(0, 33);
    A3.A(e177).P(lf, 33).P(fs, 14).P(tp, 154).P(ta, lf).P(h, 39).P("font-style", l).P(ff, x1).P(w, 84).P("font-weight", 400, _, _, "").P(o, 0).T(1, 1, 1, qoi).T(6, 0, 1);
    var S4 = symbols[x238];
    var tl3 = S4.tl[dt].tt,
        st4 = S4.s[a] = {},
        A4 = A(_, tl3, st4);
    A4.A(e239).P(tp, -24).P(w, 125).P(h, 48).P("font-style", l).P(o, 0, _, _, "").P(lf, 87, _, _, p).P(fs, 40);
    A4.A(e43).P(h, 191).P(w, 300);
    A4.A(e240).P(lf, 87).P(fs, 40).P("font-style", l).P(w, 125).P(h, 48).P("textShadow.blur", 2, "subproperty").T(0, 2).T(10, 2).P("textShadow.offsetH", 2, "subproperty").T(0, 2).T(10, 2).P(o, 0, _, _, "").T(0.5, 1, 1, qok).T(6.75, 0, 1).P("textShadow.color", x241, "subproperty").T(0, x241).T(10, x241).P(tp, -24, _, _, p).T(0.5, -20, 1).T(6.75, -24, 1).P("textShadow.offsetV", 2, "subproperty").T(0, 2).T(10, 2);
    A4.A(e242).P("boxShadow.inset", '', "subproperty").P("boxShadow.blur", 2, "subproperty").P("background-image", [0, [
        ['rgba(20,148,51,1.00)', 0],
        ['rgba(223,215,48,1.00)', 100]
    ]], "gradient").P(w, 728).P(h, 4).P("boxShadow.offsetV", -2, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P("boxShadow.color", x233, "subproperty").P(tp, 297).T(0, 297).P(lf, -928).T(0, -197, 23, ql);
    A4.A(e243).P(tp, 90).T(0.5, 149, 0.75, qok).T(6, 90, 0.75).P(o, 0, _, _, "").T(0.5, 1, 0.75).T(6, 0, 0.75).P(lf, -86, _, _, p).T(0, -86);
    A4.A(e244).P("font-weight", 400, _, _, "").P(lf, 316, _, _, p).P(fs, 16).P(tp, 107).T(1.25, 116, 0.75, qok).T(6.75, 107, 0.75).P(o, 0, _, _, "").T(1.25, 1, 0.75).T(6.75, 0, 0.75);
    A4.A(e245).P(lf, 197).P(rz, 180, t, _, r).P(tp, 155, _, _, p).T(9, 185, 0.75, qok).T(14.5, 155, 0.75).P(o, 0, _, _, "").T(9, 1, 0.75).T(14.5, 0, 0.75);
    A4.A(e160).P(lf, 87).P(fs, 40).P(h, 48).P(w, 125).P("font-style", l).P("textShadow.blur", 2, "subproperty").T(15.25, 2).T(25.25, 2).P("textShadow.offsetH", 2, "subproperty").T(15.25, 2).T(25.25, 2).P("textShadow.offsetV", 2, "subproperty").T(15.25, 2).T(25.25, 2).P(o, 0, _, _, "").T(15.25, 1, 1, qok).T(22, 0, 1).P("textShadow.color", x241, "subproperty").T(15.25, x241).T(25.25, x241).P(tp, -24, _, _, p).T(15.25, -20, 1).T(22, -24, 1);
    A4.A(e165).P(lf, 87).P(fs, 40).P(h, 48).P("font-style", l).P(w, 125).P(tp, -24).T(8, -20, 1, qok).T(14.25, -24, 1).P("textShadow.offsetH", 2, "subproperty").T(7.25, 2).T(17.25, 2).P("textShadow.blur", 2, "subproperty").T(7.25, 2).T(17.25, 2).P(o, 0, _, _, "").T(8, 1, 1).T(14.25, 0, 1).P("textShadow.color", x241, "subproperty").T(7.25, x241).T(17.25, x241).P("textShadow.offsetV", 2, "subproperty", _, p).T(7.25, 2).T(17.25, 2);
    A4.A(e246).P(lf, 85).P("cursor", x12).P(tp, 272).T(0, 232, 2, qok).P(o, 0, _, _, "").T(0, 1, 2);
    A4.A(e247).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 67).T(8.75, 98, 0.75, qok).T(14.25, 67, 0.75).P(o, 0, _, _, "").T(8.75, 1, 0.75).T(14.25, 0, 0.75).P(lf, 270, _, _, p).T(8.75, 270).T(15, 270);
    A4.A(e248).P("font-weight", 400, _, _, "").P(lf, 316, _, _, p).P(fs, 16).P(tp, 107).T(16.625, 116, 0.75, qok).T(22.125, 107, 0.75).P(o, 0, _, _, "").T(16.625, 1, 0.75).T(22.125, 0, 0.75);
    A4.A(e249).P("font-weight", 400, _, _, "").P(tp, 18, _, _, p).T(8.25, 54, 0.75, qok).T(13.75, 18, 0.75).P(o, 0, _, _, "").T(8.25, 1, 0.75).T(13.75, 0, 0.75).P(lf, -63, _, _, p).T(8.25, -63).T(14.5, -63);
    A4.A(e250).P("font-weight", 400, _, _, "").P(lf, 250, _, _, p).P(fs, 16).P(tp, 134).T(9, 160, 0.75, qok).T(14.5, 141, 0.75).P(o, 0, _, _, "").T(9, 1, 0.75).T(14.5, 0, 0.75);
    A4.A(e251).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 60).T(0.5, 116, 0.75, qok).T(6, 60, 0.75).P(o, 0, _, _, "").T(0.5, 1, 0.75).T(6, 0, 0.75).P(lf, -178, _, _, p).T(1.25, -178).T(6, -178);
    A4.A(e252).P(tp, 64).T(1, 61, 0.75, qok).T(6.5, 64, 0.75).P(o, 0, _, _, "").T(1, 1, 0.75).T(6.5, 0, 0.75).P(lf, 241, _, _, p).T(2, 241).P(rz, 180, t, _, r).T(1, 180).T(7.25, 180);
    A4.A(e253).P("font-weight", 400, _, _, "").P(lf, 300, _, _, p).P(fs, 16).P(tp, 20).T(1, 35, 0.75, qok).T(6.5, 20, 0.75).P(o, 0, _, _, "").T(1, 1, 0.75).T(6.5, 0, 0.75);
    A4.A(e254).P(lf, 0).P(tp, -36).T(0, 30, 1, qok).T(6.25, 79, 1, qik).P(o, 0, _, _, "").T(0, 1, 1, qq).T(6.25, 0, 1, qik).P(rz, 0, t, _, r).T(6.25, -17, 1);
    A4.A(e169).P(tp, -40).T(7.5, 18, 1, qok).T(13.75, 55, 1, qik).P(o, 0, _, _, "").T(7.5, 1, 1, qok).T(13.75, 0, 1, qik).P(lf, 50, _, _, p).T(7.5, 50).T(8.5, 50).T(13.75, 50).T(14.75, 50).P(rz, 0, t, _, r).T(13.75, -20, 1);
    A4.A(e255).P(lf, -44).P(tp, 90).T(8, 149, 0.75, qok).T(13.5, 90, 0.75).P(o, 0, _, _, "").T(8, 1, 0.75).T(13.5, 0, 0.75);
    A4.A(e256).P("font-weight", 400, _, _, "").P(lf, 250, _, _, p).P(fs, 16).P(tp, 20).T(8.5, 37, 0.75, qok).T(14, 20, 0.75).P(o, 0, _, _, "").T(8.5, 1, 0.75).T(14, 0, 0.75);
    A4.A(e257).P(tp, 64).T(16.25, 61, 0.563, qok).T(21.75, 64, 0.75).P(o, 0, _, _, "").T(16.25, 1, 0.563).T(21.75, 0, 0.75).P(lf, 242, _, _, p).T(16.625, 241, 0.375).P(rz, 180, t, _, r).T(16.25, 180).T(22.5, 180);
    A4.A(e258).P("font-weight", 400, _, _, "").P(lf, -111, _, _, p).P(fs, 16).P(tp, 60).T(8, 116, 0.75, qok).T(13.5, 60, 0.75).P(o, 0, _, _, "").T(8, 1, 0.75).T(13.5, 0, 0.75);
    A4.A(e259).P("font-weight", 400, _, _, "").P(lf, 300, _, _, p).P(fs, 16).P(tp, 20).T(16.25, 35, 0.75, qok).T(21.75, 20, 0.75).P(o, 0, _, _, "").T(16.25, 1, 0.75).T(21.75, 0, 0.75);
    A4.A(e161).P("font-weight", 400, _, _, "").P(tp, 18, _, _, p).T(0.75, 54, 0.75, qok).T(6.25, 18, 0.75).P(o, 0, _, _, "").T(0.75, 1, 0.75).T(6.25, 0, 0.75);
    A4.A(e260).P(lf, 269).P(rz, 180, t, _, r).P(tp, 128, _, _, p).T(1.25, 145, 0.75, qok).T(6.75, 128, 0.75).P(o, 0, _, _, "").T(1.25, 1, 0.75).T(6.75, 0, 0.75);
    A4.A(e261).P("font-weight", 400, _, _, "").P(tp, 18, _, _, p).T(16, 54, 0.75, qok).T(21.5, 18, 0.75).P(o, 0, _, _, "").T(16, 1, 0.75).T(21.5, 0, 0.75);
    A4.A(e262).P(lf, 0).P(tp, -40).T(14.75, 28, 1, qok).T(21.5, 67, 1, qik).P(o, 0, _, _, "").T(14.75, 1, 1, qok).T(21.5, 0, 1, qik).P(rz, 0, t, _, r).T(21.5, -14, 1);
    A4.A(e263).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 60).T(15.75, 116, 0.75, qok).T(21.25, 60, 0.75).P(o, 0, _, _, "").T(15.75, 1, 0.75).T(21.25, 0, 0.75).P(lf, -178, _, _, p).T(16.5, -178).T(21.25, -178);
    A4.A(e264).P(tp, 90).T(15.75, 149, 0.75, qok).T(21.25, 90, 0.75).P(o, 0, _, _, "").T(15.75, 1, 0.75).T(21.25, 0, 0.75).P(lf, -86, _, _, p).T(15.75, -86);
    A4.A(e265).P(lf, 221).P(tp, 100).T(8.75, 124, 0.75, qok).T(14.25, 100, 0.75).P(o, 0, _, _, "").T(8.75, 1, 0.75).T(14.25, 0, 0.75).P(rz, 180, t, _, r).T(8.75, 180).T(15, 180);
    A4.A(e266).P(rz, 180, t, _, r).P(tp, 128, _, _, p).T(16.625, 145, 0.75, qok).T(22.125, 128, 0.75).P(o, 0, _, _, "").T(16.625, 1, 0.75).T(22.125, 0, 0.75).P(lf, 244, _, _, p).T(16.625, 244);
    A4.A(e267).P(tp, 30).T(8.25, 90, 0.75, qok).T(13.75, 30, 0.75).P(o, 0, _, _, "").T(8.25, 1, 0.75).T(13.75, 0, 0.75).P(lf, -17, _, _, p).T(8.25, -17).T(9, -17);
    A4.A(e268).P(lf, 197).P(rz, 180, t, _, r).P(tp, 39, _, _, p).T(8.5, 64, 0.75, qok).T(14, 39, 0.75).P(o, 0, _, _, "").T(8.5, 1, 0.75).T(14, 0, 0.75);
    A4.A(e269).P(tp, 30).T(0.75, 89, 0.75, qok).T(6.25, 30, 0.75).P(o, 0, _, _, "").T(0.75, 1, 0.75).T(6.25, 0, 0.75);
    A4.A(e270).P(tp, 30).T(16, 89, 0.75, qok).T(21.5, 30, 0.75).P(o, 0, _, _, "").T(16, 1, 0.75).T(21.5, 0, 0.75);
    var S5 = symbols[x191];
    var tl4 = S5.tl[dt].tt,
        st5 = S5.s[a] = {},
        A5 = A(_, tl4, st5);
    A5.A(e275).P(h, 1);
    A5.A(e43).P(h, 8).P(w, 119);
    A5.A(e276).P(tp, 0).P(lf, 0);
    var S6 = symbols[x186];
    var tl5 = S6.tl[dt].tt,
        st6 = S6.s[a] = {},
        A6 = A(_, tl5, st6);
    A6.A(e276).P(tp, 0).P(lf, 0);
    A6.A(e43).P(h, 8).P(w, 119);
    A6.A(e275).P(h, 1).P(w, 83);
    var S7 = symbols[x278];
    var tl6 = S7.tl[dt].tt,
        st7 = S7.s[a] = {},
        A7 = A(_, tl6, st7);
    A7.A(e42).P(tp, 6).P(lf, 9);
    A7.A(e43).P(h, 26).P(w, 27);
    A7.A(e44).P(bg, x45, c).T(0, x45).P(h, 26).T(0, 26).P(tp, 0).T(0, 0).P(lf, 0).T(0, 0).P(w, 27).T(0, 27);
    Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);
    $(window).ready(function() {
        Edge.launchComposition(compId);
    });
})(jQuery, AdobeEdge, "iVendi-skyscraper");