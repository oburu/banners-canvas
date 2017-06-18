(function($, Edge, compId) {
    var _ = null,
        y = true,
        n = false,
        x33 = 'ellipse',
        x158 = '15px',
        x32 = 'rgb(0, 0, 0)',
        e201 = '${_Payment_Search}',
        x190 = '85px',
        x194 = 'Rectangle-counterCopy',
        d = 'display',
        x192 = '130px',
        i = 'none',
        x117 = 'engage-animation',
        x183 = 'line_10',
        x86 = 'awardCopy',
        x145 = 'Social_Media',
        x109 = '-856px',
        x179 = 'Integrated_Stock',
        x160 = 'rgba(0,0,0,0.65098)',
        e216 = '${_Showroom_Sales}',
        e127 = '${_online}',
        x178 = 'line_13',
        x177 = '200px',
        x10 = 'stage',
        x155 = '300px',
        e20 = '${_hover-expand}',
        e199 = '${_Rectangle-counterCopy}',
        x1 = 'lato, sans-serif',
        c = 'color',
        x153 = 'In_Portals',
        x163 = 'line2',
        x88 = 'convert',
        x72 = 'macbook',
        x230 = 'Rectangle6',
        e22 = '${_animation-350}',
        e220 = '${_line_5}',
        x142 = '-128',
        x184 = 'Online_Fulfilment',
        x171 = 'Integrated_Enquiries',
        x176 = '18px',
        o = 'opacity',
        x52 = '48px',
        e215 = '${_Online_Fulfilment}',
        qq = 'easeInOutQuad',
        e128 = '${_awardCopy}',
        x53 = 'product',
        x174 = 'Online_Credit',
        x164 = '181',
        e222 = '${_Lender_Integration}',
        x3 = '3.0.0.322',
        e25 = '${_close-button}',
        x57 = 'inPortals',
        x141 = '89px',
        b = 'block',
        e138 = '${_prospects}',
        e126 = '${_Rectangle-counter}',
        e206 = '${_Integrated_Enquiries}',
        e12 = '${_background}',
        x78 = 'prospects',
        e132 = '${_integra_stock}',
        s = 'style',
        x71 = 'rgba(0,0,0,0.35)',
        x98 = 'online_full',
        x187 = 'Lender_Integration',
        lf = 'left',
        x67 = '-104px',
        x161 = 'line_7',
        x75 = '193px',
        x13 = 'auto',
        tp = 'top',
        x143 = 'Payment_Search',
        ov = 'overflow',
        e225 = '${_line_6}',
        qk = 'easeInOutBack',
        e227 = '${_line_10}',
        t = 'transform',
        x4 = 'rgba(0,0,0,0)',
        x151 = 'line',
        r = 'deg',
        e202 = '${_line_7}',
        e136 = '${_integrated}',
        e134 = '${_award}',
        e203 = '${_learnmore}',
        x159 = 'engage',
        x = 'text',
        e212 = '${_Online_Credit}',
        m = 'rect',
        h = 'height',
        x104 = '218px',
        x30 = '50%',
        l = 'normal',
        e24 = '${_out-expand}',
        x61 = 'inportals',
        x70 = 'Engage',
        x34 = 'rgba(165,165,165,0.6314)',
        x167 = 'Prospect_Analytics',
        x45 = 'rgba(255,255,255,0.63)',
        e223 = '${_line_13}',
        ff = 'font-family',
        e211 = '${_iphone-macbook3}',
        x148 = '-123',
        x180 = 'line_12',
        x73 = '576px',
        x162 = 'Responsive_Forms',
        x41 = 'close-button',
        e133 = '${_lender}',
        e19 = '${_ivendi_logo}',
        x191 = '244px',
        x114 = 'rgba(192,192,192,1)',
        x92 = '166px',
        x80 = 'socialMedia',
        x39 = 'rgba(255,255,255,1)',
        x181 = 'Showroom_Sales',
        x107 = 'transact',
        x96 = 'showroom',
        e15 = '${_Stage}',
        e226 = '${_line_1}',
        x198 = 'rgba(0,0,0,0.38)',
        x156 = '191px',
        x49 = 'italic',
        x168 = 'line_6',
        x56 = '30px',
        qik = 'easeInBack',
        x146 = 'line_1',
        x8 = 'rgba(6,185,103,0.6314)',
        x166 = '135',
        x2 = '3.0.0',
        p = 'px',
        e125 = '${_showroom}',
        x46 = '52px',
        x112 = 'rgba(0,0,0,0.25)',
        x28 = '23px',
        x60 = '13px',
        e217 = '${_line_3}',
        e219 = '${_responsive-showcase-CFC}',
        ql = 'linear',
        x113 = 'Rectangle-counter',
        x31 = 'close',
        x82 = 'integrated',
        x237 = 'close-button_1',
        x170 = 'line_5',
        x236 = '83px',
        e235 = '${_Rectangle6}',
        x100 = 'lender',
        e234 = '${_Ellipse4}',
        x233 = '1px',
        x232 = '111px',
        e122 = '${_transact}',
        x102 = 'imac',
        x231 = '4px',
        x229 = 'rgba(238,238,238,1)',
        a = 'Base State',
        x195 = 'animation-350',
        x228 = 'Ellipse4',
        xc = 'rgba(0,0,0,1)',
        x65 = 'award',
        e224 = '${_line_8}',
        x152 = '155px',
        x63 = '-81px',
        e221 = '${_line2}',
        x14 = 'rgba(154,201,188,1.00)',
        x169 = 'social_media',
        e118 = '${_responsive-showcase-ivendi-ipad-copy}',
        e119 = '${_product}',
        x139 = 'line_3',
        e218 = '${_social_media}',
        x9 = 'rgba(6,185,103,0)',
        e197 = '${_engage}',
        x29 = '26px',
        e214 = '${_line_12}',
        x172 = 'line_4',
        x47 = '66px',
        e121 = '${_imac}',
        e213 = '${_line_4}',
        x55 = '80px',
        x175 = '50px',
        x84 = 'online',
        bg = 'background-color',
        e209 = '${_line_2}',
        e208 = '${_In_Portals}',
        x116 = 'rgba(223,215,48,1.00)',
        x105 = '139px',
        e135 = '${_macbook}',
        x74 = '-1px',
        e205 = '${_Integrated_Stock}',
        x185 = 'line_8',
        x48 = '400',
        x69 = '300',
        e204 = '${_Prospect_Analytics}',
        x40 = 'bold',
        e200 = '${_line}',
        e130 = '${_online_full}',
        e120 = '${_socialMedia}',
        e23 = '${_engage-animation-90}',
        x68 = '17px',
        x50 = 'payment',
        e42 = '${_Text8}',
        x115 = 'rgba(20,148,51,1.00)',
        e196 = '${_convertCopy}',
        g = 'image',
        x64 = '67px',
        x35 = '9px',
        x76 = '123px',
        rz = 'rotateZ',
        x36 = '6px',
        x189 = 'learnmore',
        x26 = '8px',
        x188 = 'responsive-showcase-CFC',
        x37 = 'Text8',
        x147 = '-58',
        e207 = '${_Responsive_Forms}',
        x111 = '3px',
        x186 = '-128px',
        x140 = '-58px',
        x27 = '0px',
        x157 = '87px',
        x173 = '-123px',
        e123 = '${_convert}',
        x11 = 'pointer',
        x165 = '241',
        e124 = '${_payment}',
        e43 = '${symbolSelector}',
        qok = 'easeOutBack',
        x154 = 'iphone-macbook3',
        e210 = '${_Social_Media}',
        e44 = '${_close}',
        e137 = '${_Engage}',
        x16 = 'hidden',
        x149 = '54px',
        dt = 'Default Timeline',
        e17 = '${_ivendi_backg}',
        x18 = 'rgba(0,0,0,0.17)',
        e131 = '${_inPortals}',
        x94 = 'integra_stock',
        e129 = '${_inportals}',
        x59 = '96px',
        x6 = 'rgba(255,255,255,1.00)',
        fs = 'font-size',
        w = 'width',
        x91 = '390px',
        x110 = '728px',
        x103 = '346px',
        x21 = 'rgba(6,185,103,0.00)',
        x90 = 'responsive-showcase-ivendi-ipad-copy',
        x144 = 'line_2';
    var im = './images/';
    var g5 = 'background.jpg',
        g77 = 'iphone-macbook.png',
        g7 = 'ivendi_logo2.png',
        g106 = 'responsive-showcase-CFC.png',
        g193 = 'cta-12.png',
        g93 = 'responsive-showcase-ivendi-ipad-copy.png';
    var s79 = "Prospect Analytics",
        s58 = "In Portals &amp; Dealer sites",
        s38 = "X",
        s108 = "Transact",
        s83 = "Integrated Enquiries",
        s62 = "Integrated Finance<br>",
        s66 = "…Award Winning",
        s89 = "Convert<br>",
        s182 = "Showroom Sales Tools<br>",
        s87 = "Responsive Forms",
        s99 = "Online Fulfilment",
        s101 = "Lender Integration",
        s95 = "Integrated Stock",
        s51 = "Payment Search",
        s150 = "Integrated Finance",
        s85 = "Online Credit Checking",
        s97 = "Showroom Sales Tools",
        s54 = "Product Videos",
        s81 = "Social Media Profiling";
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
                    id: 'background',
                    t: g,
                    r: ['0px', '-182px', '728px', '350px', 'auto', 'auto'],
                    f: [x4, im + g5, '0px', '0px']
                }, {
                    id: 'ivendi_backg',
                    t: m,
                    r: ['6px', '-1px', '92px', '50px', 'auto', 'auto'],
                    f: [x6],
                    s: [0, "rgb(0, 0, 0)", i],
                    boxShadow: ["", 0, 3, 3, 0, "rgba(0,0,0,0.17)"]
                }, {
                    id: 'ivendi_logo',
                    t: g,
                    r: ['13px', '5px', '74px', '36px', 'auto', 'auto'],
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
                    r: [x26, x27, x28, x29, x13, x13],
                    br: [x30, x30, x30, x30],
                    id: x31,
                    s: [0, x32, i],
                    t: x33,
                    f: [x34]
                }, {
                    t: x,
                    r: [x35, x36, x13, x13, x13, x13],
                    id: x37,
                    text: s38,
                    align: lf,
                    n: [x1, 12, x39, x40, i, l]
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
                    r: [x46, x47, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x50,
                    text: s51,
                    align: lf,
                    t: x
                }, {
                    r: [x47, x52, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x53,
                    text: s54,
                    align: lf,
                    t: x
                }, {
                    r: [x55, x56, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x57,
                    text: s58,
                    align: lf,
                    t: x
                }, {
                    r: [x59, x60, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x61,
                    text: s62,
                    align: lf,
                    t: x
                }, {
                    r: [x63, x64, x13, x13, x13, x13],
                    n: [x1, 12, x39, x48, i, x49],
                    id: x65,
                    text: s66,
                    align: lf,
                    t: x
                }, {
                    r: [x67, x68, x13, x13, x13, x13],
                    n: [x1, 36, x6, x69, i, x49],
                    id: x70,
                    text: x70,
                    textShadow: [x71, 2, 2, 2],
                    t: x
                }, {
                    id: x72,
                    t: g,
                    r: [x73, x74, x75, x76, x13, x13],
                    f: [x4, im + g77, x27, x27]
                }, {
                    r: [x46, x47, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x78,
                    text: s79,
                    align: lf,
                    t: x
                }, {
                    r: [x47, x52, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x80,
                    text: s81,
                    align: lf,
                    t: x
                }, {
                    r: [x55, x56, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x82,
                    text: s83,
                    align: lf,
                    t: x
                }, {
                    r: [x59, x60, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x84,
                    text: s85,
                    align: lf,
                    t: x
                }, {
                    r: [x63, x64, x13, x13, x13, x13],
                    n: [x1, 12, x39, x48, i, x49],
                    id: x86,
                    text: s87,
                    align: lf,
                    t: x
                }, {
                    r: [x67, x68, x13, x13, x13, x13],
                    n: [x1, 36, x6, x69, i, x49],
                    id: x88,
                    text: s89,
                    textShadow: [x71, 2, 2, 2],
                    t: x
                }, {
                    id: x90,
                    t: g,
                    r: [x91, x74, x92, x92, x13, x13],
                    f: [x4, im + g93, x27, x27]
                }, {
                    r: [x46, x47, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x94,
                    text: s95,
                    align: lf,
                    t: x
                }, {
                    r: [x47, x52, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x96,
                    text: s97,
                    align: lf,
                    t: x
                }, {
                    r: [x55, x56, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x98,
                    text: s99,
                    align: lf,
                    t: x
                }, {
                    r: [x59, x60, x13, x13, x13, x13],
                    n: [x1, 14, x39, x48, i, x49],
                    id: x100,
                    text: s101,
                    align: lf,
                    t: x
                }, {
                    id: x102,
                    t: g,
                    r: [x103, x27, x104, x105, x13, x13],
                    f: [x4, im + g106, x27, x27]
                }, {
                    r: [x67, x68, x13, x13, x13, x13],
                    n: [x1, 36, x6, x69, i, x49],
                    id: x107,
                    text: s108,
                    textShadow: [x71, 2, 2, 2],
                    t: x
                }, {
                    r: [x109, x35, x110, x111, x13, x13],
                    boxShadow: ['', 2, 2, 2, 0, x112],
                    id: x113,
                    s: [0, xc, i],
                    t: m,
                    f: [x114, [0, [
                        [x115, 0],
                        [x116, 100]
                    ]]]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 21750,
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
                    id: x139,
                    t: m,
                    r: [x140, x141, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x142, x59, x13, x13, x13, x13],
                    id: x143,
                    text: s51,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x144,
                    t: m,
                    r: [x140, x141, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x142, x59, x13, x13, x13, x13],
                    id: x145,
                    text: s54,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x146,
                    t: m,
                    r: [x147, x141, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x148, x149, x13, x13, x13, x13],
                    id: x82,
                    text: s150,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x151,
                    t: m,
                    r: [x148, x152, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x142, x59, x13, x13, x13, x13],
                    id: x153,
                    text: s58,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x154,
                    t: g,
                    r: [x27, x27, x155, x156, x13, x13],
                    f: [x4, im + g77, x27, x27]
                }, {
                    t: x,
                    r: [x157, x158, x13, x13, x13, x13],
                    align: lf,
                    id: x159,
                    text: x70,
                    textShadow: [x160, 3, 3, 3],
                    n: [x1, 40, x39, x69, i, l]
                }, {
                    id: x161,
                    t: m,
                    r: [x140, x141, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x142, x59, x13, x13, x13, x13],
                    id: x162,
                    text: s79,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x163,
                    t: m,
                    tf: [
                        [0, 0],
                        [x164]
                    ],
                    r: [x165, x166, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x142, x59, x13, x13, x13, x13],
                    id: x167,
                    text: s87,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x168,
                    t: m,
                    r: [x140, x141, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x142, x59, x13, x13, x13, x13],
                    id: x169,
                    text: s81,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x170,
                    t: m,
                    r: [x147, x141, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x148, x149, x13, x13, x13, x13],
                    id: x171,
                    text: s99,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x172,
                    t: m,
                    r: [x173, x152, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x142, x59, x13, x13, x13, x13],
                    id: x174,
                    text: s101,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x90,
                    t: g,
                    r: [x175, x176, x177, x177, x13, x13],
                    f: [x4, im + g93, x27, x27]
                }, {
                    t: x,
                    r: [x157, x158, x13, x13, x13, x13],
                    align: lf,
                    id: x88,
                    text: s89,
                    textShadow: [x160, 3, 3, 3],
                    n: [x1, 40, x39, x69, i, l]
                }, {
                    id: x178,
                    t: m,
                    r: [x140, x141, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x142, x59, x13, x13, x13, x13],
                    id: x179,
                    text: s95,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x180,
                    t: m,
                    r: [x140, x141, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x142, x59, x13, x13, x13, x13],
                    id: x181,
                    text: s182,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x183,
                    t: m,
                    r: [x147, x141, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x148, x149, x13, x13, x13, x13],
                    id: x184,
                    text: s99,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    id: x185,
                    t: m,
                    r: [x173, x152, x13, x13, x13, x13]
                }, {
                    t: x,
                    r: [x186, x59, x13, x13, x13, x13],
                    id: x187,
                    text: s101,
                    align: lf,
                    n: [x1, 16, x39, x48, i, l]
                }, {
                    t: x,
                    r: [x157, x158, x13, x13, x13, x13],
                    align: lf,
                    id: x107,
                    text: s108,
                    textShadow: [x160, 3, 3, 3],
                    n: [x1, 40, x39, x69, i, l]
                }, {
                    id: x188,
                    t: g,
                    r: [x27, x56, x155, x156, x13, x13],
                    f: [x4, im + g106, x27, x27]
                }, {
                    id: x189,
                    t: g,
                    r: [x190, x191, x192, x175, x13, x13],
                    f: [x4, im + g193, x27, x27]
                }, {
                    r: [x109, x35, x110, x111, x13, x13],
                    boxShadow: ['', 2, 2, 2, 0, x112],
                    id: x194,
                    s: [0, xc, i],
                    t: m,
                    f: [x114, [0, [
                        [x115, 0],
                        [x116, 100]
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
                    r: [x27, x27, x26, x26, x13, x13],
                    br: [x30, x30, x30, x30],
                    id: x228,
                    s: [0, x32, i],
                    t: x33,
                    f: [x229]
                }, {
                    t: m,
                    id: x230,
                    s: [0, x32, i],
                    r: [x26, x231, x232, x233, x13, x13],
                    f: [x229]
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
                    r: [x27, x27, x26, x26, x13, x13],
                    br: [x30, x30, x30, x30],
                    id: x228,
                    s: [0, x32, i],
                    t: x33,
                    f: [x229]
                }, {
                    r: [x26, x231, x236, x233, x13, x13],
                    id: x230,
                    s: [0, x32, i],
                    t: m,
                    f: [x229]
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
                    r: [x26, x27, x28, x29, x13, x13],
                    br: [x30, x30, x30, x30],
                    id: x31,
                    s: [0, x32, i],
                    t: x33,
                    f: [x34]
                }, {
                    t: x,
                    r: [x35, x36, x13, x13, x13, x13],
                    id: x37,
                    text: s38,
                    align: lf,
                    n: [x1, 12, x39, x40, i, l]
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
    A1.A(e12).P(tp, -182).P(lf, 0).P("cursor", x13);
    A1.A(e15).P(bg, x14, c).P(ov, x16).P(h, 90).P(w, 728);
    A1.A(e17).P(bg, x6, c).P("boxShadow.color", x18, "subproperty").P(rz, 0, t, _, r).P(lf, 6, _, _, p).P(w, 92).P(tp, -1).P("boxShadow.blur", 3, "subproperty").P("boxShadow.offsetV", 3, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P("boxShadow.spread", 0, "subproperty");
    A1.A(e19).P(h, 36).P(tp, 5).P(lf, 13).P(w, 74);
    A1.A(e20).P(tp, -1).P("cursor", x11).P(bg, x21, c).T(0, x21).P(d, b).T(0, b).T(10, i).P(w, 728).T(0, 728);
    A1.A(e22).P(d, i).T(10, b);
    A1.A(e23).P(d, b).T(10, i);
    A1.A(e24).P(tp, -1).P(h, 345).P("cursor", x11).P(lf, 0).P(d, i).T(10, b);
    A1.A(e25).P(tp, 7).T(10, 7).P(lf, 693).T(10, 693).P(d, i).T(0, i).T(10, b);
    var S2 = symbols[x41];
    var tl1 = S2.tl[dt].tt,
        st2 = S2.s[a] = {},
        A2 = A(_, tl1, st2);
    A2.A(e42).P(tp, 6).P(lf, 9);
    A2.A(e43).P(h, 26).P(w, 27);
    A2.A(e44).P(bg, x45, c).T(0, x45).P(h, 26).T(0, 26).P(tp, 0).T(0, 0).P(lf, 0).T(0, 0).P(w, 27).T(0, 27);
    var S3 = symbols[x117];
    var tl2 = S3.tl[dt].tt,
        st3 = S3.s[a] = {},
        A3 = A(_, tl2, st3);
    A3.A(e43).P(h, 139).P(w, 589);
    A3.A(e118).P(tp, -1).P(h, 166).P(w, 166).P(lf, 582).T(7.25, 390, 1, qok).T(13.75, 582, 1).P(o, 0, _, _, "").T(7.25, 1, 1).T(13.75, 0, 1);
    A3.A(e119).P(tp, 48).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 66).T(1.5, 170, 0.75, qok).T(6, 66, 0.75).P(o, 0, _, _, "").T(1.5, 1, 0.75).T(6, 0, 0.75);
    A3.A(e120).P(tp, 48).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 66).T(8.5, 170, 0.75, qok).T(13, 66, 0.75).P(o, 0, _, _, "").T(8.5, 1, 0.75).T(13, 0, 0.75);
    A3.A(e121).P(tp, 0).P(h, 139).P(w, 218).P(lf, 538).T(14.5, 346, 1, qok).T(20.75, 538, 1).P(o, 0, _, _, "").T(14.5, 1, 1).T(20.75, 0, 1);
    A3.A(e122).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(c, x6, c).P("font-weight", 300, _, _, "").P(fs, 36, _, _, p).P(tp, 17).P("textShadow.color", x71, "subproperty").P("font-style", x49).P(ff, x1).P("textShadow.offsetV", 2, "subproperty").P(lf, -104).T(14.5, 0, 1, qk).T(20.75, -104, 1).P(o, 0, _, _, "").T(14.5, 1, 1, ql).T(20.75, 0, 1);
    A3.A(e123).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(c, x6, c).P("font-weight", 300, _, _, "").P(fs, 36, _, _, p).P(tp, 17).P("font-style", x49).P(ff, x1).P("textShadow.offsetV", 2, "subproperty").P("textShadow.color", x71, "subproperty").P(lf, -104).T(7.25, 0, 1, qk).T(13.75, -104, 1).P(o, 0, _, _, "").T(7.25, 1, 1, ql).T(13.75, 0, 1);
    A3.A(e124).P(tp, 66).P("font-weight", 400, _, _, "").P(lf, 52, _, _, p).T(1.75, 156, 0.75, qok).T(6, 52, 0.75).P(o, 0, _, _, "").T(1.75, 1, 0.75).T(6, 0, 0.75);
    A3.A(e125).P(tp, 48).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 66).T(15.75, 170, 0.75, qok).T(20.25, 66, 0.75).P(o, 0, _, _, "").T(15.75, 1, 0.75).T(20.25, 0, 0.75);
    A3.A(e126).P("boxShadow.inset", '', "subproperty").P("boxShadow.blur", 2, "subproperty").P("background-image", [0, [
        ['rgba(20,148,51,1.00)', 0],
        ['rgba(223,215,48,1.00)', 100]
    ]], "gradient").P(w, 728).P(h, 4).P("boxShadow.offsetV", -2, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P("boxShadow.color", x112, "subproperty").P(lf, -859).T(0, -124, 21.75, ql).P(tp, 93).T(0, 93);
    A3.A(e127).P(tp, 13).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 96).T(8, 200, 0.75, qok).T(13, 96, 0.75).P(o, 0, _, _, "").T(8, 1, 0.75).T(13, 0, 0.75);
    A3.A(e128).P(tp, 67).P("font-weight", 400, _, _, "").P(fs, 12, _, _, p).P(lf, -81).T(7.5, 23, 1, qok).T(13.25, -81, 1).P(o, 0, _, _, "").T(7.5, 1, 1).T(13.25, 0, 1);
    A3.A(e129).P(tp, 13).P("font-weight", 400, _, _, "").P("font-style", x49).P(fs, 14, _, _, p).P(lf, 96).T(1, 200, 0.75, qok).T(6, 96, 0.75).P(o, 0, _, _, "").T(1, 1, 0.75).T(6, 0, 0.75);
    A3.A(e130).P(tp, 30).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 80).T(15.5, 184, 0.75, qok).T(20.25, 80, 0.75).P(o, 0, _, _, "").T(15.5, 1, 0.75).T(20.25, 0, 0.75);
    A3.A(e131).P(tp, 30).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 80).T(1.25, 184, 0.75, qok).T(6, 80, 0.75).P(o, 0, _, _, "").T(1.25, 1, 0.75).T(6, 0, 0.75);
    A3.A(e132).P(tp, 66).P("font-weight", 400, _, _, "").P(lf, 52, _, _, p).T(16, 156, 0.75, qok).T(20.25, 52, 0.75).P(o, 0, _, _, "").T(16, 1, 0.75).T(20.25, 0, 0.75);
    A3.A(e133).P(tp, 13).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 96).T(15.25, 200, 0.75, qok).T(20.25, 96, 0.75).P(o, 0, _, _, "").T(15.25, 1, 0.75).T(20.25, 0, 0.75);
    A3.A(e134).P(tp, 67).P("font-weight", 400, _, _, "").P(fs, 12, _, _, p).P(lf, -81).T(0.5, 23, 1, qok).T(6.25, -81, 1).P(o, 0, _, _, "").T(0.5, 1, 1).T(6.25, 0, 1);
    A3.A(e135).P(tp, -1).P(h, 123).P(w, 193).P(lf, 576).T(0, 384, 0.5, qok).T(6.5, 576, 0.5).P(o, 0, _, _, "").T(0, 1, 0.5).T(6.5, 0, 0.5);
    A3.A(e136).P(tp, 30).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 80).T(8.25, 184, 0.75, qok).T(13, 80, 0.75).P(o, 0, _, _, "").T(8.25, 1, 0.75).T(13, 0, 0.75);
    A3.A(e137).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(c, x6, c).P("font-weight", 300, _, _, "").P(fs, 36, _, _, p).P(tp, 17).P(ff, x1).P("font-style", x49).P("textShadow.color", x71, "subproperty").P("textShadow.offsetV", 2, "subproperty").P(lf, -104).T(0, 0, 1, qk).T(6.5, -104, 1).P(o, 0, _, _, "").T(0, 1, 1, ql).T(6.5, 0, 1);
    A3.A(e138).P(tp, 66).P("font-weight", 400, _, _, "").P(lf, 52, _, _, p).T(8.75, 156, 0.75, qok).T(13, 52, 0.75).P(o, 0, _, _, "").T(8.75, 1, 0.75).T(13, 0, 0.75);
    var S4 = symbols[x195];
    var tl3 = S4.tl[dt].tt,
        st4 = S4.s[a] = {},
        A4 = A(_, tl3, st4);
    A4.A(e196).P(tp, -24).P(fs, 40).P("font-style", l).P(h, 48).P(o, 0, _, _, "").P(lf, 87, _, _, p).P(w, 125);
    A4.A(e43).P(h, 191).P(w, 300);
    A4.A(e197).P(lf, 87).P(fs, 40).P("font-style", l).P(h, 48).P(w, 125).P("textShadow.blur", 2, "subproperty").T(0, 2).T(10, 2).P("textShadow.offsetH", 2, "subproperty").T(0, 2).T(10, 2).P(tp, -24).T(0.5, -20, 1, qok).T(6.75, -24, 1).P("textShadow.color", x198, "subproperty").T(0, x198).T(10, x198).P(o, 0, _, _, "").T(0.5, 1, 1).T(6.75, 0, 1).P("textShadow.offsetV", 2, "subproperty", _, p).T(0, 2).T(10, 2);
    A4.A(e199).P("boxShadow.inset", '', "subproperty").P("boxShadow.blur", 2, "subproperty").P("background-image", [0, [
        ['rgba(20,148,51,1.00)', 0],
        ['rgba(223,215,48,1.00)', 100]
    ]], "gradient").P(w, 728).P(h, 4).P("boxShadow.offsetV", -2, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P("boxShadow.color", x112, "subproperty").P(tp, 297).T(0, 297).P(lf, -928).T(0, -197, 23, ql);
    A4.A(e200).P(tp, 90).T(0.5, 149, 0.75, qok).T(6, 90, 0.75).P(o, 0, _, _, "").T(0.5, 1, 0.75).T(6, 0, 0.75).P(lf, -86, _, _, p).T(0, -86);
    A4.A(e201).P("font-weight", 400, _, _, "").P(lf, 316, _, _, p).P(fs, 16).P(tp, 107).T(1.25, 116, 0.75, qok).T(6.75, 107, 0.75).P(o, 0, _, _, "").T(1.25, 1, 0.75).T(6.75, 0, 0.75);
    A4.A(e202).P(lf, 197).P(rz, 180, t, _, r).P(tp, 155, _, _, p).T(9, 185, 0.75, qok).T(14.5, 155, 0.75).P(o, 0, _, _, "").T(9, 1, 0.75).T(14.5, 0, 0.75);
    A4.A(e122).P(lf, 87).P(fs, 40).P(h, 48).P("font-style", l).P(w, 125).P("textShadow.blur", 2, "subproperty").T(15.25, 2).T(25.25, 2).P("textShadow.offsetH", 2, "subproperty").T(15.25, 2).T(25.25, 2).P("textShadow.offsetV", 2, "subproperty").T(15.25, 2).T(25.25, 2).P("textShadow.color", x198, "subproperty").T(15.25, x198).T(25.25, x198).P(tp, -24).T(15.25, -20, 1, qok).T(22, -24, 1).P(o, 0, _, _, "").T(15.25, 1, 1).T(22, 0, 1);
    A4.A(e123).P(lf, 87).P(fs, 40).P("font-style", l).P(w, 125).P(h, 48).P(tp, -24).T(8, -20, 1, qok).T(14.25, -24, 1).P("textShadow.offsetH", 2, "subproperty").T(7.25, 2).T(17.25, 2).P("textShadow.color", x198, "subproperty").T(7.25, x198).T(17.25, x198).P(o, 0, _, _, "").T(8, 1, 1).T(14.25, 0, 1).P("textShadow.blur", 2, "subproperty", _, p).T(7.25, 2).T(17.25, 2).P("textShadow.offsetV", 2, "subproperty").T(7.25, 2).T(17.25, 2);
    A4.A(e203).P(lf, 85).P("cursor", x13).P(tp, 272).T(0, 232, 2, qok).P(o, 0, _, _, "").T(0, 1, 2);
    A4.A(e204).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 67).T(8.75, 98, 0.75, qok).T(14.25, 67, 0.75).P(o, 0, _, _, "").T(8.75, 1, 0.75).T(14.25, 0, 0.75).P(lf, 270, _, _, p).T(8.75, 270).T(15, 270);
    A4.A(e205).P("font-weight", 400, _, _, "").P(lf, 316, _, _, p).P(fs, 16).P(tp, 107).T(16.625, 116, 0.75, qok).T(22.125, 107, 0.75).P(o, 0, _, _, "").T(16.625, 1, 0.75).T(22.125, 0, 0.75);
    A4.A(e206).P("font-weight", 400, _, _, "").P(tp, 18, _, _, p).T(8.25, 54, 0.75, qok).T(13.75, 18, 0.75).P(o, 0, _, _, "").T(8.25, 1, 0.75).T(13.75, 0, 0.75).P(lf, -63, _, _, p).T(8.25, -63).T(14.5, -63);
    A4.A(e207).P("font-weight", 400, _, _, "").P(lf, 250, _, _, p).P(fs, 16).P(tp, 134).T(9, 160, 0.75, qok).T(14.5, 141, 0.75).P(o, 0, _, _, "").T(9, 1, 0.75).T(14.5, 0, 0.75);
    A4.A(e208).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 60).T(0.5, 116, 0.75, qok).T(6, 60, 0.75).P(o, 0, _, _, "").T(0.5, 1, 0.75).T(6, 0, 0.75).P(lf, -178, _, _, p).T(1.25, -178).T(6, -178);
    A4.A(e209).P(tp, 64).T(1, 61, 0.75, qok).T(6.5, 64, 0.75).P(o, 0, _, _, "").T(1, 1, 0.75).T(6.5, 0, 0.75).P(lf, 241, _, _, p).T(2, 241).P(rz, 180, t, _, r).T(1, 180).T(7.25, 180);
    A4.A(e210).P("font-weight", 400, _, _, "").P(lf, 300, _, _, p).P(fs, 16).P(tp, 20).T(1, 35, 0.75, qok).T(6.5, 20, 0.75).P(o, 0, _, _, "").T(1, 1, 0.75).T(6.5, 0, 0.75);
    A4.A(e211).P(lf, 0).P(tp, -36).T(0, 30, 1, qok).T(6.25, 79, 1, qik).P(o, 0, _, _, "").T(0, 1, 1, qq).T(6.25, 0, 1, qik).P(rz, 0, t, _, r).T(6.25, -17, 1);
    A4.A(e118).P(tp, -40).T(7.5, 18, 1, qok).T(13.75, 55, 1, qik).P(o, 0, _, _, "").T(7.5, 1, 1, qok).T(13.75, 0, 1, qik).P(lf, 50, _, _, p).T(7.5, 50).T(8.5, 50).T(13.75, 50).T(14.75, 50).P(rz, 0, t, _, r).T(13.75, -20, 1);
    A4.A(e212).P("font-weight", 400, _, _, "").P(lf, -111, _, _, p).P(fs, 16).P(tp, 60).T(8, 116, 0.75, qok).T(13.5, 60, 0.75).P(o, 0, _, _, "").T(8, 1, 0.75).T(13.5, 0, 0.75);
    A4.A(e213).P(lf, -44).P(tp, 90).T(8, 149, 0.75, qok).T(13.5, 90, 0.75).P(o, 0, _, _, "").T(8, 1, 0.75).T(13.5, 0, 0.75);
    A4.A(e214).P(tp, 64).T(16.25, 61, 0.563, qok).T(21.75, 64, 0.75).P(o, 0, _, _, "").T(16.25, 1, 0.563).T(21.75, 0, 0.75).P(lf, 242, _, _, p).T(16.625, 241, 0.375).P(rz, 180, t, _, r).T(16.25, 180).T(22.5, 180);
    A4.A(e215).P("font-weight", 400, _, _, "").P(tp, 18, _, _, p).T(16, 54, 0.75, qok).T(21.5, 18, 0.75).P(o, 0, _, _, "").T(16, 1, 0.75).T(21.5, 0, 0.75);
    A4.A(e216).P("font-weight", 400, _, _, "").P(lf, 300, _, _, p).P(fs, 16).P(tp, 20).T(16.25, 35, 0.75, qok).T(21.75, 20, 0.75).P(o, 0, _, _, "").T(16.25, 1, 0.75).T(21.75, 0, 0.75);
    A4.A(e136).P("font-weight", 400, _, _, "").P(tp, 18, _, _, p).T(0.75, 54, 0.75, qok).T(6.25, 18, 0.75).P(o, 0, _, _, "").T(0.75, 1, 0.75).T(6.25, 0, 0.75);
    A4.A(e217).P(lf, 269).P(rz, 180, t, _, r).P(tp, 128, _, _, p).T(1.25, 145, 0.75, qok).T(6.75, 128, 0.75).P(o, 0, _, _, "").T(1.25, 1, 0.75).T(6.75, 0, 0.75);
    A4.A(e218).P("font-weight", 400, _, _, "").P(lf, 250, _, _, p).P(fs, 16).P(tp, 20).T(8.5, 37, 0.75, qok).T(14, 20, 0.75).P(o, 0, _, _, "").T(8.5, 1, 0.75).T(14, 0, 0.75);
    A4.A(e219).P(lf, 0).P(tp, -40).T(14.75, 28, 1, qok).T(21.5, 67, 1, qik).P(o, 0, _, _, "").T(14.75, 1, 1, qok).T(21.5, 0, 1, qik).P(rz, 0, t, _, r).T(21.5, -14, 1);
    A4.A(e220).P(tp, 30).T(8.25, 90, 0.75, qok).T(13.75, 30, 0.75).P(o, 0, _, _, "").T(8.25, 1, 0.75).T(13.75, 0, 0.75).P(lf, -17, _, _, p).T(8.25, -17).T(9, -17);
    A4.A(e221).P(lf, 221).P(tp, 100).T(8.75, 124, 0.75, qok).T(14.25, 100, 0.75).P(o, 0, _, _, "").T(8.75, 1, 0.75).T(14.25, 0, 0.75).P(rz, 180, t, _, r).T(8.75, 180).T(15, 180);
    A4.A(e222).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 60).T(15.75, 116, 0.75, qok).T(21.25, 60, 0.75).P(o, 0, _, _, "").T(15.75, 1, 0.75).T(21.25, 0, 0.75).P(lf, -178, _, _, p).T(16.5, -178).T(21.25, -178);
    A4.A(e223).P(rz, 180, t, _, r).P(tp, 128, _, _, p).T(16.625, 145, 0.75, qok).T(22.125, 128, 0.75).P(o, 0, _, _, "").T(16.625, 1, 0.75).T(22.125, 0, 0.75).P(lf, 244, _, _, p).T(16.625, 244);
    A4.A(e224).P(tp, 90).T(15.75, 149, 0.75, qok).T(21.25, 90, 0.75).P(o, 0, _, _, "").T(15.75, 1, 0.75).T(21.25, 0, 0.75).P(lf, -86, _, _, p).T(15.75, -86);
    A4.A(e225).P(lf, 197).P(rz, 180, t, _, r).P(tp, 39, _, _, p).T(8.5, 64, 0.75, qok).T(14, 39, 0.75).P(o, 0, _, _, "").T(8.5, 1, 0.75).T(14, 0, 0.75);
    A4.A(e226).P(tp, 30).T(0.75, 89, 0.75, qok).T(6.25, 30, 0.75).P(o, 0, _, _, "").T(0.75, 1, 0.75).T(6.25, 0, 0.75);
    A4.A(e227).P(tp, 30).T(16, 89, 0.75, qok).T(21.5, 30, 0.75).P(o, 0, _, _, "").T(16, 1, 0.75).T(21.5, 0, 0.75);
    var S5 = symbols[x151];
    var tl4 = S5.tl[dt].tt,
        st5 = S5.s[a] = {},
        A5 = A(_, tl4, st5);
    A5.A(e234).P(tp, 0).P(lf, 0);
    A5.A(e43).P(h, 8).P(w, 119);
    A5.A(e235).P(h, 1);
    var S6 = symbols[x146];
    var tl5 = S6.tl[dt].tt,
        st6 = S6.s[a] = {},
        A6 = A(_, tl5, st6);
    A6.A(e235).P(h, 1).P(w, 83);
    A6.A(e43).P(h, 8).P(w, 119);
    A6.A(e234).P(tp, 0).P(lf, 0);
    var S7 = symbols[x237];
    var tl6 = S7.tl[dt].tt,
        st7 = S7.s[a] = {},
        A7 = A(_, tl6, st7);
    A7.A(e42).P(tp, 6).P(lf, 9);
    A7.A(e43).P(h, 26).P(w, 27);
    A7.A(e44).P(tp, 0).T(0, 0).P(h, 26).T(0, 26).P(bg, x45, c).T(0, x45).P(lf, 0).T(0, 0).P(w, 27).T(0, 27);
    Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);
    $(window).ready(function() {
        Edge.launchComposition(compId);
    });
})(jQuery, AdobeEdge, "iVendi-leaderboard");