
(function($, Edge, compId) {
    var _ = null,
        y = true,
        n = false,
        x26 = 'ellipse',
        x182 = '15px',
        x25 = 'rgb(0, 0, 0)',
        e197 = '${_Payment_Search}',
        x184 = '85px',
        x190 = 'Rectangle-counterCopy',
        d = 'display',
        x186 = '130px',
        i = 'none',
        x115 = 'engage-animation',
        x177 = 'line_10',
        x144 = 'Social_Media',
        x102 = '-856px',
        x173 = 'Integrated_Stock',
        x158 = 'rgba(0,0,0,0.65098)',
        e209 = '${_Showroom_Sales}',
        e126 = '${_online}',
        x103 = '728px',
        x172 = 'line_13',
        e116 = '${_expand-arrow4}',
        x8 = 'stage',
        x154 = '300px',
        rz = 'rotateZ',
        e195 = '${_Rectangle-counterCopy}',
        x1 = 'lato, sans-serif',
        c = 'color',
        x152 = 'In_Portals',
        x81 = 'convert',
        x65 = 'macbook',
        zx = 'scaleX',
        x227 = 'Rectangle6',
        e17 = '${_animation-350}',
        e210 = '${_line_5}',
        x141 = '-128',
        x178 = 'Online_Fulfilment',
        x164 = 'Integrated_Enquiries',
        x113 = '18px',
        o = 'opacity',
        x45 = '48px',
        e212 = '${_Online_Fulfilment}',
        qq = 'easeInOutQuad',
        e127 = '${_awardCopy}',
        x46 = 'product',
        x167 = 'Online_Credit',
        e214 = '${_Lender_Integration}',
        x3 = '3.0.0.322',
        x50 = 'inPortals',
        x171 = '636px',
        x140 = '89px',
        b = 'block',
        e137 = '${_prospects}',
        e125 = '${_Rectangle-counter}',
        e201 = '${_line_12}',
        e15 = '${_background}',
        x71 = 'prospects',
        e131 = '${_integra_stock}',
        s = 'style',
        x63 = 'rgba(0,0,0,0.35)',
        x91 = 'online_full',
        x181 = 'Lender_Integration',
        e37 = '${_close}',
        x60 = '-104px',
        x159 = 'line_7',
        x68 = '193px',
        x22 = 'auto',
        tp = 'top',
        x142 = 'Payment_Search',
        ov = 'overflow',
        e219 = '${_line_6}',
        qk = 'easeInOutBack',
        e221 = '${_line_10}',
        t = 'transform',
        x4 = 'rgba(0,0,0,0)',
        x150 = 'line',
        r = 'deg',
        e198 = '${_line_7}',
        e135 = '${_integrated}',
        e122 = '${_convert}',
        e199 = '${_learnmore}',
        x157 = 'engage',
        x = 'text',
        e202 = '${_Online_Credit}',
        m = 'rect',
        h = 'height',
        x97 = '218px',
        x110 = 'expand-arrow4',
        x23 = '50%',
        l = 'normal',
        x54 = 'inportals',
        x62 = 'Engage',
        x27 = 'rgba(165,165,165,0.6314)',
        e228 = '${_Rectangle6}',
        x38 = 'rgba(255,255,255,0.63)',
        e217 = '${_line_13}',
        ff = 'font-family',
        e220 = '${_iphone-macbook3}',
        x147 = '-123',
        x174 = 'line_12',
        x66 = '576px',
        x160 = 'Responsive_Forms',
        x170 = '183px',
        x34 = 'close-button',
        e132 = '${_lender}',
        e9 = '${_ivendi_logo}',
        x185 = '244px',
        e205 = '${_line_2}',
        x85 = '166px',
        x73 = 'socialMedia',
        x32 = 'rgba(255,255,255,1)',
        x175 = 'Showroom_Sales',
        x100 = 'transact',
        x89 = 'showroom',
        e16 = '${_Stage}',
        e206 = '${_line_1}',
        x192 = 'rgba(0,0,0,0.38)',
        x155 = '191px',
        x44 = 'italic',
        x161 = 'line_6',
        x49 = '30px',
        qik = 'easeInBack',
        x145 = 'line_1',
        x2 = '3.0.0',
        p = 'px',
        e129 = '${_showroom}',
        x39 = '52px',
        x109 = 'rgba(0,0,0,0.25)',
        x20 = '23px',
        x53 = '13px',
        e211 = '${_line_3}',
        e213 = '${_responsive-showcase-CFC}',
        ql = 'linear',
        x108 = 'Rectangle-counter',
        x24 = 'close',
        x75 = 'integrated',
        x163 = 'line_5',
        x93 = 'lender',
        x231 = 'close-button_1',
        x230 = '83px',
        e229 = '${_Ellipse4}',
        e121 = '${_transact}',
        x95 = 'imac',
        x226 = '1px',
        x225 = '111px',
        a = 'Base State',
        x191 = 'animation-350',
        x224 = '4px',
        x111 = '578px',
        x12 = 'hidden',
        x223 = 'rgba(238,238,238,1)',
        x222 = 'Ellipse4',
        x56 = '-81px',
        fs = 'font-size',
        x11 = 'rgba(154,201,188,1.00)',
        x58 = 'award',
        e117 = '${_responsive-showcase-ivendi-ipad-copy}',
        e118 = '${_product}',
        x138 = 'line_3',
        e216 = '${_Integrated_Enquiries}',
        e215 = '${_line_8}',
        x21 = '26px',
        x156 = '87px',
        x165 = 'line_4',
        x40 = '66px',
        e120 = '${_imac}',
        x112 = '12px',
        x48 = '80px',
        x187 = '50px',
        x183 = 'responsive-showcase-CFC',
        bg = 'background-color',
        e196 = '${_line}',
        e208 = '${_social_media}',
        x107 = 'rgba(223,215,48,1.00)',
        e207 = '${_line_4}',
        x105 = 'rgba(192,192,192,1)',
        x98 = '139px',
        x67 = '-1px',
        lf = 'left',
        x179 = 'line_8',
        x43 = '400',
        x64 = '300',
        e203 = '${_In_Portals}',
        x79 = 'awardCopy',
        x77 = 'online',
        zy = 'scaleY',
        e200 = '${_Integrated_Stock}',
        e119 = '${_socialMedia}',
        x33 = 'bold',
        x61 = '17px',
        x41 = 'payment',
        e35 = '${_Text8}',
        x106 = 'rgba(20,148,51,1.00)',
        x180 = '-128px',
        g = 'image',
        x168 = '269px',
        x57 = '67px',
        e123 = '${_online_full}',
        x28 = '9px',
        x69 = '123px',
        e193 = '${_convertCopy}',
        x29 = '6px',
        e194 = '${_engage}',
        x18 = '8px',
        x30 = 'Text8',
        x146 = '-58',
        e218 = '${_Responsive_Forms}',
        x104 = '3px',
        x188 = 'learnmore',
        qok = 'easeOutBack',
        x19 = '0px',
        x139 = '-58px',
        x10 = 'pointer',
        x169 = '-13px',
        x166 = '-123px',
        e124 = '${_payment}',
        e128 = '${_inportals}',
        e36 = '${symbolSelector}',
        e204 = '${_Social_Media}',
        x162 = 'social_media',
        x153 = 'iphone-macbook3',
        x151 = '155px',
        x6 = 'rgba(255,255,255,1.00)',
        x148 = '54px',
        dt = 'Default Timeline',
        x14 = 'rgba(0,0,0,0.17)',
        e136 = '${_Engage}',
        e13 = '${_ivendi_backg}',
        x87 = 'integra_stock',
        e134 = '${_macbook}',
        e133 = '${_award}',
        e130 = '${_inPortals}',
        x52 = '96px',
        w = 'width',
        x84 = '390px',
        x83 = 'responsive-showcase-ivendi-ipad-copy',
        xc = 'rgba(0,0,0,1)',
        x96 = '346px',
        x143 = 'line_2';
    var im = './images/';
    var g7 = 'ivendi_logo2.png',
        g5 = 'background.jpg',
        g189 = 'cta-12.png',
        g70 = 'iphone-macbook.png',
        g99 = 'responsive-showcase-CFC.png',
        g114 = 'expand-arrow.png',
        g86 = 'responsive-showcase-ivendi-ipad-copy.png';
    var s42 = "Payment Search",
        s51 = "In Portals &amp; Dealer sites",
        s31 = "X",
        s101 = "Transact",
        s76 = "Integrated Enquiries",
        s55 = "Integrated Finance<br>",
        s59 = "…Award Winning",
        s82 = "Convert<br>",
        s176 = "Showroom Sales Tools<br>",
        s80 = "Responsive Forms",
        s92 = "Online Fulfilment",
        s94 = "Lender Integration",
        s72 = "Prospect Analytics",
        s149 = "Integrated Finance",
        s78 = "Online Credit Checking",
        s90 = "Showroom Sales Tools",
        s74 = "Social Media Profiling",
        s47 = "Product Videos",
        s88 = "Integrated Stock";
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
                    r: ['0px', '-223px', '1160px', '456px', 'auto', 'auto'],
                    cu: ['pointer'],
                    f: [x4, im + g5, '0px', '0px']
                }, {
                    id: 'ivendi_backg',
                    t: m,
                    r: ['6px', '-1px', '92px', '50px', 'auto', 'auto'],
                    cu: ['pointer'],
                    f: [x6],
                    s: [0, "rgb(0, 0, 0)", i],
                    boxShadow: ["", 0, 3, 3, 0, "rgba(0,0,0,0.17)"]
                }, {
                    id: 'ivendi_logo',
                    t: g,
                    r: ['13px', '5px', '74px', '36px', 'auto', 'auto'],
                    cu: ['pointer'],
                    f: [x4, im + g7, '0px', '0px']
                }, {
                    id: 'animation-350',
                    v: i,
                    t: m,
                    r: ['200', '49', 'auto', 'auto', 'auto', 'auto'],
                    cu: ['pointer']
                }],
                sI: [{
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
                    d: 23000,
                    a: y,
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
                    r: [x18, x19, x20, x21, x22, x22],
                    br: [x23, x23, x23, x23],
                    id: x24,
                    s: [0, x25, i],
                    t: x26,
                    f: [x27]
                }, {
                    t: x,
                    r: [x28, x29, x22, x22, x22, x22],
                    id: x30,
                    text: s31,
                    align: lf,
                    n: [x1, 12, x32, x33, i, l]
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
                    t: x,
                    r: [x39, x40, x22, x22, x22, x22],
                    id: x41,
                    text: s42,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x40, x45, x22, x22, x22, x22],
                    id: x46,
                    text: s47,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x48, x49, x22, x22, x22, x22],
                    id: x50,
                    text: s51,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x52, x53, x22, x22, x22, x22],
                    id: x54,
                    text: s55,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x56, x57, x22, x22, x22, x22],
                    id: x58,
                    text: s59,
                    align: lf,
                    n: [x1, 12, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x60, x61, x22, x22, x22, x22],
                    id: x62,
                    text: x62,
                    textShadow: [x63, 2, 2, 2],
                    n: [x1, 36, x6, x64, i, x44]
                }, {
                    id: x65,
                    t: g,
                    r: [x66, x67, x68, x69, x22, x22],
                    f: [x4, im + g70, x19, x19]
                }, {
                    t: x,
                    r: [x39, x40, x22, x22, x22, x22],
                    id: x71,
                    text: s72,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x40, x45, x22, x22, x22, x22],
                    id: x73,
                    text: s74,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x48, x49, x22, x22, x22, x22],
                    id: x75,
                    text: s76,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x52, x53, x22, x22, x22, x22],
                    id: x77,
                    text: s78,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x56, x57, x22, x22, x22, x22],
                    id: x79,
                    text: s80,
                    align: lf,
                    n: [x1, 12, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x60, x61, x22, x22, x22, x22],
                    id: x81,
                    text: s82,
                    textShadow: [x63, 2, 2, 2],
                    n: [x1, 36, x6, x64, i, x44]
                }, {
                    id: x83,
                    t: g,
                    r: [x84, x67, x85, x85, x22, x22],
                    f: [x4, im + g86, x19, x19]
                }, {
                    t: x,
                    r: [x39, x40, x22, x22, x22, x22],
                    id: x87,
                    text: s88,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x40, x45, x22, x22, x22, x22],
                    id: x89,
                    text: s90,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x48, x49, x22, x22, x22, x22],
                    id: x91,
                    text: s92,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    t: x,
                    r: [x52, x53, x22, x22, x22, x22],
                    id: x93,
                    text: s94,
                    align: lf,
                    n: [x1, 14, x32, x43, i, x44]
                }, {
                    id: x95,
                    t: g,
                    r: [x96, x19, x97, x98, x22, x22],
                    f: [x4, im + g99, x19, x19]
                }, {
                    t: x,
                    r: [x60, x61, x22, x22, x22, x22],
                    id: x100,
                    text: s101,
                    textShadow: [x63, 2, 2, 2],
                    n: [x1, 36, x6, x64, i, x44]
                }, {
                    r: [x102, x28, x103, x104, x22, x22],
                    f: [x105, [0, [
                        [x106, 0],
                        [x107, 100]
                    ]]],
                    id: x108,
                    s: [0, xc, i],
                    t: m,
                    boxShadow: ['', 2, 2, 2, 0, x109]
                }, {
                    id: x110,
                    t: g,
                    r: [x111, x112, x113, x113, x22, x22],
                    f: [x4, im + g114, x19, x19]
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
                    id: x138,
                    t: m,
                    r: [x139, x140, x22, x22, x22, x22]
                }, {
                    r: [x141, x52, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x142,
                    text: s42,
                    align: lf,
                    t: x
                }, {
                    id: x143,
                    t: m,
                    r: [x139, x140, x22, x22, x22, x22]
                }, {
                    r: [x141, x52, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x144,
                    text: s47,
                    align: lf,
                    t: x
                }, {
                    id: x145,
                    t: m,
                    r: [x146, x140, x22, x22, x22, x22]
                }, {
                    r: [x147, x148, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x75,
                    text: s149,
                    align: lf,
                    t: x
                }, {
                    id: x150,
                    t: m,
                    r: [x147, x151, x22, x22, x22, x22]
                }, {
                    r: [x141, x52, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x152,
                    text: s51,
                    align: lf,
                    t: x
                }, {
                    id: x153,
                    t: g,
                    r: [x19, x19, x154, x155, x22, x22],
                    f: [x4, im + g70, x19, x19]
                }, {
                    r: [x156, x49, x22, x22, x22, x22],
                    align: lf,
                    n: [x1, 40, x32, x64, i, x44],
                    id: x157,
                    text: x62,
                    textShadow: [x158, 3, 3, 3],
                    t: x
                }, {
                    id: x159,
                    t: m,
                    r: [x139, x140, x22, x22, x22, x22]
                }, {
                    r: [x141, x52, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x160,
                    text: s72,
                    align: lf,
                    t: x
                }, {
                    id: x161,
                    t: m,
                    r: [x139, x140, x22, x22, x22, x22]
                }, {
                    r: [x141, x52, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x162,
                    text: s74,
                    align: lf,
                    t: x
                }, {
                    id: x163,
                    t: m,
                    r: [x146, x140, x22, x22, x22, x22]
                }, {
                    r: [x147, x148, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x164,
                    text: s92,
                    align: lf,
                    t: x
                }, {
                    id: x165,
                    t: m,
                    r: [x166, x151, x22, x22, x22, x22]
                }, {
                    r: [x141, x52, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x167,
                    text: s94,
                    align: lf,
                    t: x
                }, {
                    r: [x168, x169, x170, x170, x22, x22],
                    id: x83,
                    o: 1,
                    t: g,
                    f: [x4, im + g86, x19, x19]
                }, {
                    r: [x171, x49, x22, x22, x22, x22],
                    align: lf,
                    n: [x1, 40, x32, x64, i, x44],
                    id: x81,
                    text: s82,
                    textShadow: [x158, 3, 3, 3],
                    t: x
                }, {
                    id: x172,
                    t: m,
                    r: [x139, x140, x22, x22, x22, x22]
                }, {
                    r: [x141, x52, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x173,
                    text: s88,
                    align: lf,
                    t: x
                }, {
                    id: x174,
                    t: m,
                    r: [x139, x140, x22, x22, x22, x22]
                }, {
                    r: [x141, x52, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x175,
                    text: s176,
                    align: lf,
                    t: x
                }, {
                    id: x177,
                    t: m,
                    r: [x146, x140, x22, x22, x22, x22]
                }, {
                    r: [x147, x148, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x178,
                    text: s92,
                    align: lf,
                    t: x
                }, {
                    id: x179,
                    t: m,
                    r: [x166, x151, x22, x22, x22, x22]
                }, {
                    r: [x180, x52, x22, x22, x22, x22],
                    n: [x1, 16, x32, x43, i, l],
                    id: x181,
                    text: s94,
                    align: lf,
                    t: x
                }, {
                    r: [x156, x182, x22, x22, x22, x22],
                    align: lf,
                    n: [x1, 40, x32, x64, i, x44],
                    id: x100,
                    text: s101,
                    textShadow: [x158, 3, 3, 3],
                    t: x
                }, {
                    id: x183,
                    t: g,
                    r: [x19, x49, x154, x155, x22, x22],
                    f: [x4, im + g99, x19, x19]
                }, {
                    r: [x184, x185, x186, x187, x22, x22],
                    id: x188,
                    t: g,
                    cu: [x10],
                    f: [x4, im + g189, x19, x19]
                }, {
                    r: [x102, x28, x103, x104, x22, x22],
                    boxShadow: ['', 2, 2, 2, 0, x109],
                    id: x190,
                    s: [0, xc, i],
                    t: m,
                    f: [x105, [0, [
                        [x106, 0],
                        [x107, 100]
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
                    id: 'line_5',
                    sN: 'line_1',
                    a: {}
                }, {
                    id: 'line_1',
                    sN: 'line_1',
                    a: {}
                }, {
                    id: 'line_4',
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
                    id: 'line',
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
                    d: 23000,
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
                    r: [x19, x19, x18, x18, x22, x22],
                    br: [x23, x23, x23, x23],
                    id: x222,
                    s: [0, x25, i],
                    t: x26,
                    f: [x223]
                }, {
                    r: [x18, x224, x225, x226, x22, x22],
                    id: x227,
                    s: [0, x25, i],
                    t: m,
                    f: [x223]
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
                    r: [x19, x19, x18, x18, x22, x22],
                    br: [x23, x23, x23, x23],
                    id: x222,
                    s: [0, x25, i],
                    t: x26,
                    f: [x223]
                }, {
                    t: m,
                    id: x227,
                    s: [0, x25, i],
                    r: [x18, x224, x230, x226, x22, x22],
                    f: [x223]
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
                    r: [x18, x19, x20, x21, x22, x22],
                    br: [x23, x23, x23, x23],
                    id: x24,
                    s: [0, x25, i],
                    t: x26,
                    f: [x27]
                }, {
                    t: x,
                    r: [x28, x29, x22, x22, x22, x22],
                    id: x30,
                    text: s31,
                    align: lf,
                    n: [x1, 12, x32, x33, i, l]
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
    var S1 = symbols[x8];
    var tl0 = S1.tl[dt].tt,
        st1 = S1.s[a] = {},
        A1 = A(_, tl0, st1);
    A1.A(e9).P(tp, 5).P(h, 36).P("cursor", x10).P(lf, 13).P(w, 74);
    A1.A(e13).P(bg, x6, c).P("boxShadow.color", x14, "subproperty").P(rz, 0, t, _, r).P(lf, 6, _, _, p).P(w, 92).P(tp, -1).P("cursor", x10).P("boxShadow.offsetV", 3, "subproperty").P("boxShadow.spread", 0, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P("boxShadow.blur", 3, "subproperty");
    A1.A(e15).P(tp, -223).P(h, 456).P("cursor", x10).P(lf, 0).P(w, 1160);
    A1.A(e16).P(bg, x11, c).P(ov, x12).P(h, 180).T(0, 180).P(w, 1160).T(0, 1160);
    A1.A(e17).P("cursor", x10).P(d, i).T(0, b).P(lf, 203).T(0, 203).P(tp, 9).T(0, 9);
    var S2 = symbols[x34];
    var tl1 = S2.tl[dt].tt,
        st2 = S2.s[a] = {},
        A2 = A(_, tl1, st2);
    A2.A(e35).P(tp, 6).P(lf, 9);
    A2.A(e36).P(h, 26).P(w, 27);
    A2.A(e37).P(tp, 0).T(0, 0).P(h, 26).T(0, 26).P(bg, x38, c).T(0, x38).P(lf, 0).T(0, 0).P(w, 27).T(0, 27);
    var S3 = symbols[x115];
    var tl2 = S3.tl[dt].tt,
        st3 = S3.s[a] = {},
        A3 = A(_, tl2, st3);
    A3.A(e116).P(h, 18).P(tp, 12).P(lf, 578).P(w, 18);
    A3.A(e36).P(h, 139).P(w, 589);
    A3.A(e117).P(tp, -1).P(h, 166).P(w, 166).P(lf, 582).T(7.25, 390, 1, qok).T(13.75, 582, 1).P(o, 0, _, _, "").T(7.25, 1, 1).T(13.75, 0, 1);
    A3.A(e118).P(tp, 48).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 66).T(1.5, 170, 0.75, qok).T(6, 66, 0.75).P(o, 0, _, _, "").T(1.5, 1, 0.75).T(6, 0, 0.75);
    A3.A(e119).P(tp, 48).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 66).T(8.5, 170, 0.75, qok).T(13, 66, 0.75).P(o, 0, _, _, "").T(8.5, 1, 0.75).T(13, 0, 0.75);
    A3.A(e120).P(tp, 0).P(h, 139).P(w, 218).P(lf, 538).T(14.5, 346, 1, qok).T(20.75, 538, 1).P(o, 0, _, _, "").T(14.5, 1, 1).T(20.75, 0, 1);
    A3.A(e121).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(c, x6, c).P("font-weight", 300, _, _, "").P(fs, 36, _, _, p).P(tp, 17).P("font-style", x44).P(ff, x1).P("textShadow.offsetV", 2, "subproperty").P("textShadow.color", x63, "subproperty").P(lf, -104).T(14.5, 0, 1, qk).T(20.75, -104, 1).P(o, 0, _, _, "").T(14.5, 1, 1, ql).T(20.75, 0, 1);
    A3.A(e122).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(c, x6, c).P("font-weight", 300, _, _, "").P(fs, 36, _, _, p).P(tp, 17).P(ff, x1).P("font-style", x44).P("textShadow.color", x63, "subproperty").P("textShadow.offsetV", 2, "subproperty").P(lf, -104).T(7.25, 0, 1, qk).T(13.75, -104, 1).P(o, 0, _, _, "").T(7.25, 1, 1, ql).T(13.75, 0, 1);
    A3.A(e123).P(tp, 30).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 80).T(15.5, 184, 0.75, qok).T(20.25, 80, 0.75).P(o, 0, _, _, "").T(15.5, 1, 0.75).T(20.25, 0, 0.75);
    A3.A(e124).P(tp, 66).P("font-weight", 400, _, _, "").P(lf, 52, _, _, p).T(1.75, 156, 0.75, qok).T(6, 52, 0.75).P(o, 0, _, _, "").T(1.75, 1, 0.75).T(6, 0, 0.75);
    A3.A(e125).P("boxShadow.inset", '', "subproperty").P("boxShadow.blur", 2, "subproperty").P("background-image", [0, [
        ['rgba(20,148,51,1.00)', 0],
        ['rgba(223,215,48,1.00)', 100]
    ]], "gradient").P(w, 728).P(h, 4).P("boxShadow.offsetV", -2, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P("boxShadow.color", x109, "subproperty").P(tp, 93).T(0, 93).P(lf, -859).T(0, -124, 21.75, ql);
    A3.A(e126).P(tp, 13).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 96).T(8, 200, 0.75, qok).T(13, 96, 0.75).P(o, 0, _, _, "").T(8, 1, 0.75).T(13, 0, 0.75);
    A3.A(e127).P(tp, 67).P("font-weight", 400, _, _, "").P(fs, 12, _, _, p).P(lf, -81).T(7.5, 23, 1, qok).T(13.25, -81, 1).P(o, 0, _, _, "").T(7.5, 1, 1).T(13.25, 0, 1);
    A3.A(e128).P(tp, 13).P("font-weight", 400, _, _, "").P("font-style", x44).P(fs, 14, _, _, p).P(lf, 96).T(1, 200, 0.75, qok).T(6, 96, 0.75).P(o, 0, _, _, "").T(1, 1, 0.75).T(6, 0, 0.75);
    A3.A(e129).P(tp, 48).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 66).T(15.75, 170, 0.75, qok).T(20.25, 66, 0.75).P(o, 0, _, _, "").T(15.75, 1, 0.75).T(20.25, 0, 0.75);
    A3.A(e130).P(tp, 30).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 80).T(1.25, 184, 0.75, qok).T(6, 80, 0.75).P(o, 0, _, _, "").T(1.25, 1, 0.75).T(6, 0, 0.75);
    A3.A(e131).P(tp, 66).P("font-weight", 400, _, _, "").P(lf, 52, _, _, p).T(16, 156, 0.75, qok).T(20.25, 52, 0.75).P(o, 0, _, _, "").T(16, 1, 0.75).T(20.25, 0, 0.75);
    A3.A(e132).P(tp, 13).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 96).T(15.25, 200, 0.75, qok).T(20.25, 96, 0.75).P(o, 0, _, _, "").T(15.25, 1, 0.75).T(20.25, 0, 0.75);
    A3.A(e133).P(tp, 67).P("font-weight", 400, _, _, "").P(fs, 12, _, _, p).P(lf, -81).T(0.5, 23, 1, qok).T(6.25, -81, 1).P(o, 0, _, _, "").T(0.5, 1, 1).T(6.25, 0, 1);
    A3.A(e134).P(tp, -1).P(h, 123).P(w, 193).P(lf, 576).T(0, 384, 0.5, qok).T(6.5, 576, 0.5).P(o, 0, _, _, "").T(0, 1, 0.5).T(6.5, 0, 0.5);
    A3.A(e135).P(tp, 30).P("font-weight", 400, _, _, "").P(fs, 14, _, _, p).P(lf, 80).T(8.25, 184, 0.75, qok).T(13, 80, 0.75).P(o, 0, _, _, "").T(8.25, 1, 0.75).T(13, 0, 0.75);
    A3.A(e136).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(c, x6, c).P("font-weight", 300, _, _, "").P(fs, 36, _, _, p).P(tp, 17).P("font-style", x44).P("textShadow.color", x63, "subproperty").P("textShadow.offsetV", 2, "subproperty").P(ff, x1).P(lf, -104).T(0, 0, 1, qk).T(6.5, -104, 1).P(o, 0, _, _, "").T(0, 1, 1, ql).T(6.5, 0, 1);
    A3.A(e137).P(tp, 66).P("font-weight", 400, _, _, "").P(lf, 52, _, _, p).T(8.75, 156, 0.75, qok).T(13, 52, 0.75).P(o, 0, _, _, "").T(8.75, 1, 0.75).T(13, 0, 0.75);
    var S4 = symbols[x191];
    var tl3 = S4.tl[dt].tt,
        st4 = S4.s[a] = {},
        A4 = A(_, tl3, st4);
    A4.A(e193).P(tp, -24).P(w, 125).P(h, 48).P("font-style", l).P(o, 0, _, _, "").P(lf, 87, _, _, p).P(fs, 40);
    A4.A(e36).P(h, 161).P(w, 770);
    A4.A(e194).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(fs, 36).P(tp, 30).P("textShadow.offsetV", 2, "subproperty").P(h, 48).P("textShadow.color", x192, "subproperty").P(w, 107).P("font-style", x44).P(lf, 736).T(1.75, 645, 0.75, qok).T(6.25, 736, 0.75).P(o, 0, _, _, "").T(1.75, 1, 0.75).T(6.25, 0, 0.75);
    A4.A(e195).P("boxShadow.inset", '', "subproperty").P("boxShadow.blur", 2, "subproperty").P("background-image", [0, [
        ['rgba(20,148,51,1.00)', 0],
        ['rgba(223,215,48,1.00)', 100]
    ]], "gradient").P(h, 4).P("boxShadow.offsetV", -2, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P("boxShadow.color", x109, "subproperty").P(tp, 167).T(0, 167).T(23, 167).P(lf, -975).T(0, -202, 23, ql).P(w, 768).T(0, 1160, 23);
    A4.A(e196).P(lf, 116).P(tp, 78).T(1.25, 121, 0.75, qok).T(6, 78, 0.75).P(o, 0, _, _, "").T(1.25, 1, 0.75).T(6, 0, 0.75);
    A4.A(e197).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 107).T(1.25, 84, 0.75, qok).T(6.75, 107, 0.75).P(o, 0, _, _, "").T(1.25, 1, 0.75).T(6.75, 0, 0.75).P(lf, 493, _, _, p).T(2, 493);
    A4.A(e198).P(rz, 180, t, _, r).P(tp, 94, _, _, p).T(8.741, 113, 0.538, qik).T(12.781, 94, 0.538).P(o, 0, _, _, "").T(8.741, 1, 0.538).T(12.781, 0, 0.538).P(lf, 411, _, _, p).T(8.741, 410, 0.538).T(12.781, 411, 0.538);
    A4.A(e121).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(fs, 40).P("textShadow.offsetV", 2, "subproperty").P("font-style", x44).P("textShadow.color", x192, "subproperty").P(w, 125).P(h, 48).P(tp, 48).T(16.25, 48).P(o, 0, _, _, "").T(15.25, 1, 1, qok).T(21.5, 0, 1).P(lf, 736, _, _, p).T(15.25, 626, 1).T(21.5, 736, 1);
    A4.A(e122).P("textShadow.blur", 2, "subproperty").P("textShadow.offsetH", 2, "subproperty").P(fs, 40).P(tp, 30).P("font-style", x44).P(h, 48).P("textShadow.color", x192, "subproperty").P(w, 125).P("textShadow.offsetV", 2, "subproperty").P(lf, 744).T(9, 636, 0.75, qok).T(14, 744, 0.75).P(o, 0, _, _, "").T(9, 1, 0.75).T(14, 0, 0.75);
    A4.A(e199).P(o, 1, _, _, "").P("cursor", x10).P(lf, 808, _, _, p).T(0, 808).P(tp, 107).T(0, 107);
    A4.A(e17).P(lf, '').T(0, '', _, _, 0);
    A4.A(e200).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 107).T(16.625, 97, 0.75, qok).T(22.125, 107, 0.75).P(o, 0, _, _, "").T(16.625, 1, 0.75).T(22.125, 0, 0.75).P(lf, 455, _, _, p).T(17.375, 455);
    A4.A(e201).P(lf, 430).P(rz, 180, t, _, r).P(tp, 42, _, _, p).T(16.25, 64, 0.75, qok).T(21.75, 42, 0.75).P(o, 0, _, _, "").T(16.25, 1, 0.75).T(21.75, 0, 0.75);
    A4.A(e202).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 45).T(7.5, 68, 0.75, qik).T(13.255, 45, 0.75).P(o, 0, _, _, "").T(7.5, 1, 0.75).T(13.255, 0, 0.75).P(lf, 120, _, _, p).T(8.25, 120).T(13.255, 120);
    A4.A(e203).P("font-weight", 400, _, _, "").P(lf, 43, _, _, p).P(fs, 16).P(tp, 71).T(1.25, 96, 0.75, qok).T(6, 60, 0.75).P(o, 0, _, _, "").T(1.25, 1, 0.75).T(6, 0, 0.75);
    A4.A(e117).P(h, 183).P(lf, 271).P(w, 183).P(tp, -102).T(7.5, -13, 0.75, qik).T(14, 47, 0.75).P(o, 0, _, _, "").T(7.5, 1, 0.75).T(14, 0, 0.75).P(rz, 0, t, _, r).T(14, -17, 0.75);
    A4.A(e204).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 20).T(1, 35, 0.75, qok).T(1.75, 33, 0.25).T(2, 35, 4.5).T(6.5, 20, 0.75).P(o, 0, _, _, "").T(1, 1, 0.75).T(6.5, 0, 0.75).P(lf, 495, _, _, p).T(2, 495);
    A4.A(e205).P(tp, 64).T(1, 61, 0.75, qok).T(1.75, 60, 0.25).T(2, 61, 4.5).T(6.5, 64, 0.75).P(o, 0, _, _, "").T(1, 1, 0.75).T(6.5, 0, 0.75).P(lf, 443, _, _, p).T(2, 443).P(rz, 180, t, _, r).T(1, 180).T(7.25, 180);
    A4.A(e206).P(tp, 30).T(1, 60, 1, qok).T(6.25, 30, 0.75).P(o, 0, _, _, "").T(1, 1, 1).T(6.25, 0, 0.75).P(lf, 175, _, _, p).T(2, 175);
    A4.A(e207).P(tp, 80).T(7.736, 103, 0.764, qik).T(13.255, 80, 0.764).P(o, 0, _, _, "").T(7.736, 1, 0.764).T(13.255, 0, 0.764).P(lf, 175, _, _, p).T(8.5, 175).T(13.255, 175);
    A4.A(e135).P("font-weight", 400, _, _, "").P(tp, 18, _, _, p).T(0.75, 33, 1.25, qok).T(6, 18, 0.75).P(o, 0, _, _, "").T(0.75, 1, 0.75).T(6, 0, 0.75).P(lf, 120, _, _, p).T(2, 120);
    A4.A(e208).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 17).T(8.5, 37, 0.779, qik).T(12.781, 17, 0.779).P(o, 0, _, _, "").T(8.5, 1, 0.779).T(12.781, 0, 0.779).P(lf, 455, _, _, p).T(9.279, 455).T(12.781, 455);
    A4.A(e209).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 20).T(16.25, 36, 0.75, qok).T(21.75, 20, 0.75).P(o, 0, _, _, "").T(16.25, 1, 0.75).T(21.75, 0, 0.75).P(lf, 451, _, _, p).T(17, 451);
    A4.A(e210).P(tp, 20).T(8.25, 46, 0.75, qik).T(12.781, 20, 0.732).P(o, 0, _, _, "").T(8.25, 1, 0.75).T(12.781, 0, 0.732).P(lf, 213, _, _, p).T(9, 213).T(12.781, 213);
    A4.A(e211).P(rz, 180, t, _, r).P(tp, 128, _, _, p).T(1.25, 113, 0.75, qok).T(6.75, 128, 0.75).P(o, 0, _, _, "").T(1.25, 1, 0.75).T(6.75, 0, 0.75).P(lf, 463, _, _, p).T(2, 463);
    A4.A(e212).P("font-weight", 400, _, _, "").P(tp, 18, _, _, p).T(16, 38, 0.75, qok).T(21.5, 18, 0.75).P(o, 0, _, _, "").T(16, 1, 0.75).T(21.5, 0, 0.75).P(lf, 139, _, _, p).T(16.75, 139).T(21.5, 139);
    A4.A(e213).P(zy, 0.74942, t, _, "").P(zx, 0.74942, t).P(tp, -40, _, _, p).T(14.75, -12, 1, qok).T(22, 46, 1).P(o, 0, _, _, "").T(14.75, 1, 1).T(22, 0, 1).P(lf, 210, _, _, p).T(23, 210).P(rz, 0, t, _, r).T(22, -20, 1);
    A4.A(e214).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 52).T(15.75, 88, 0.75, ql).T(21.25, 52, 0.75).P(o, 0, _, _, "").T(15.75, 1, 0.75).T(21.25, 0, 0.75).P(lf, 126, _, _, p).T(21.25, 126);
    A4.A(e215).P(tp, 90).T(15.75, 113, 0.75, qok).T(21.25, 90, 0.75).P(o, 0, _, _, "").T(15.75, 1, 0.75).T(21.25, 0, 0.75).P(lf, 154, _, _, p).T(15.75, 154).T(16.5, 154).T(21.25, 154).T(22, 154);
    A4.A(e216).P("font-weight", 400, _, _, "").P(tp, 0, _, _, p).T(8, 19, 1, qik).T(13, 0, 0.745).P(o, 0, _, _, "").T(8, 1, 1).T(13, 0, 0.745).P(lf, 151, _, _, p).T(9, 151).T(13, 151);
    A4.A(e217).P(rz, 180, t, _, r).P(tp, 98, _, _, p).T(16.625, 124, 0.75, qok).T(22.125, 98, 0.75).P(o, 0, _, _, "").T(16.625, 1, 0.75).T(22.125, 0, 0.75).P(lf, 438, _, _, p).T(16.625, 438).T(22.875, 438);
    A4.A(e218).P("font-weight", 400, _, _, "").P(fs, 16, _, _, p).P(tp, 59).T(8.5, 80, 0.779, qik).T(12.781, 59, 0.779).P(o, 0, _, _, "").T(8.5, 1, 0.779).T(12.781, 0, 0.779).P(lf, 463, _, _, p).T(9.279, 463).T(12.781, 463);
    A4.A(e219).P(rz, 180, t, _, r).P(tp, 40, _, _, p).T(8.741, 64, 0.538, qik).T(12.781, 40, 0.732).P(o, 0, _, _, "").T(8.741, 1, 0.538).T(12.781, 0, 0.732).P(lf, 403, _, _, p).T(9.279, 403).T(12.781, 403);
    A4.A(e220).P(h, 161).P(lf, 231).P(w, 253).P(tp, -36).T(0, 5, 2, qok).T(6.25, 79, 1, qik).P(o, 0, _, _, "").T(0, 1, 1, qq).T(6.25, 0, 1, qik).P(rz, 0, t, _, r).T(6.25, -17, 1);
    A4.A(e221).P(tp, 35).T(16, 65, 0.75, qok).T(21.563, 35, 0.75).P(o, 0, _, _, "").T(16, 1, 0.75).T(21.563, 0, 0.75).P(lf, 163, _, _, p).T(16, 163, 0.813).T(21.5, 163, 0.813);
    var S5 = symbols[x150];
    var tl4 = S5.tl[dt].tt,
        st5 = S5.s[a] = {},
        A5 = A(_, tl4, st5);
    A5.A(e228).P(h, 1);
    A5.A(e36).P(h, 8).P(w, 119);
    A5.A(e229).P(tp, 0).P(lf, 0);
    var S6 = symbols[x145];
    var tl5 = S6.tl[dt].tt,
        st6 = S6.s[a] = {},
        A6 = A(_, tl5, st6);
    A6.A(e229).P(tp, 0).P(lf, 0);
    A6.A(e36).P(h, 8).P(w, 119);
    A6.A(e228).P(h, 1).P(w, 83);
    var S7 = symbols[x231];
    var tl6 = S7.tl[dt].tt,
        st7 = S7.s[a] = {},
        A7 = A(_, tl6, st7);
    A7.A(e35).P(tp, 6).P(lf, 9);
    A7.A(e36).P(h, 26).P(w, 27);
    A7.A(e37).P(bg, x38, c).T(0, x38).P(h, 26).T(0, 26).P(tp, 0).T(0, 0).P(lf, 0).T(0, 0).P(w, 27).T(0, 27);
    Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);
    $(window).ready(function() {
        Edge.launchComposition(compId);
    });
})(jQuery, AdobeEdge, "iVendi-leaderboard-big");