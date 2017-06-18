(function($, Edge, compId) {
    var _ = null,
        y = true,
        n = false,
        x67 = '303px',
        x162 = 'line_12',
        e15 = '${_Rectangle-white}',
        x201 = 'rgb(0, 0, 0)',
        x158 = 'line_3',
        x124 = '103px',
        x69 = 'Responsive_Forms',
        x125 = '-44px',
        e209 = '${_Ellipse4}',
        e208 = '${_Rectangle6}',
        x207 = 'line',
        x206 = '1px',
        x88 = 'rgba(0,0,0,0.34)',
        i = 'none',
        x6 = 'rgba(192,192,192,1)',
        x205 = '4px',
        x165 = 'line_10',
        e180 = '${_Social_Media_Profiling}',
        x203 = 'rgba(238,238,238,1)',
        x202 = 'ellipse',
        x169 = 'responsive-showcase-CFC2',
        x200 = 'Ellipse4',
        x199 = '50%',
        x73 = 'Social_Media',
        x37 = '-21px',
        e197 = '${_line_10}',
        x160 = 'Integrated_Stock',
        e196 = '${_Integrate}',
        e22 = '${_animation-small}',
        x21 = 'rgba(201,33,33,1.00)',
        e195 = '${_Rectangle-counter}',
        e194 = '${_in_portalsCopy}',
        bt = 'bottom',
        e193 = '${_line_5}',
        x10 = 'pointer',
        x82 = '200px',
        x46 = 'Showroom_Sales',
        x34 = 'transact',
        x157 = 'line_1',
        xc = 'rgba(0,0,0,1)',
        e112 = '${_Rectangle-counterCopy2}',
        x9 = 'stage',
        x28 = '300px',
        e187 = '${_responsive-showcase-CFC2}',
        e19 = '${_hover-expand}',
        e186 = '${_line_6}',
        x1 = 'lato, sans-serif',
        c = 'color',
        e185 = '${_line_4}',
        x128 = 'in_portalsCopy',
        x29 = '191px',
        x121 = 'responsive-showcase-ivendi-ipad-copy',
        x33 = 'italic',
        x146 = 'iphone-macbook2',
        e105 = '${_product_videos}',
        e182 = '${_line_1}',
        x166 = 'line_9',
        x140 = 'line_6',
        x204 = 'Rectangle6',
        e179 = '${_line_2}',
        e178 = '${_line_12}',
        e177 = '${_Integrated_Stock}',
        e117 = '${_Prospect_Analytics}',
        x138 = 'Social_Media_Profiling',
        x38 = '400',
        e175 = '${_Enquiries}',
        e113 = '${_payment_search}',
        e174 = '${_engage}',
        rz = 'rotateZ',
        x77 = 'convert',
        x173 = 'animation-big',
        x2 = '3.0.0',
        x75 = 'Integrated_Enquiries',
        x151 = '130px',
        x123 = '-60px',
        x170 = '11px',
        e101 = '${_responsive-showcase-ivendi-ipad-copy2}',
        p = 'px',
        o = 'opacity',
        e181 = '${_cta-12}',
        x163 = 'line_11',
        e99 = '${symbolSelector}',
        x122 = '52px',
        x96 = 'rgba(0,0,0,0.25)',
        x41 = '38px',
        e107 = '${_Online_Fulfilment}',
        x27 = '13px',
        x44 = '301',
        e120 = '${_convert}',
        e189 = '${_line_3}',
        qok = 'easeOutBack',
        e192 = '${_line_8}',
        ql = 'linear',
        x153 = 'Integrate',
        x172 = 'Rectangle-counter',
        e119 = '${_Lender_Integration}',
        x150 = '151px',
        e116 = '${_in_portals}',
        x4 = 'rgba(0,0,0,0)',
        x48 = '275px',
        x91 = '728px',
        e108 = '${_Showroom_Sales}',
        x59 = 'integrated',
        d = 'display',
        x36 = '309px',
        x143 = '270px',
        x136 = '-43px',
        x142 = 'line_7',
        x141 = '252px',
        b = 'block',
        e106 = '${_transact}',
        x137 = '-17px',
        e103 = '${_Prospect_AnalyticsCopy}',
        x134 = '-123px',
        a = 'Base State',
        x63 = 'product_videos',
        x133 = 'line_5',
        e110 = '${_Integrated_Enquiries}',
        x14 = 'hidden',
        x132 = 'Enquiries',
        x7 = 'rgba(255,255,255,1.00)',
        x16 = 'rgba(0,0,0,0.20)',
        t = 'transform',
        e118 = '${_Engage}',
        e23 = '${_animation-big}',
        e184 = '${_responsive-showcase-ivendi-ipad-copy}',
        x127 = '114px',
        x126 = '88px',
        x171 = '-52px',
        x39 = 'Lender_Integration',
        x50 = 'Prospect_AnalyticsCopy',
        lf = 'left',
        e183 = '${_iphone-macbook2}',
        x159 = 'line_4',
        x149 = '90px',
        x24 = '0.89403',
        x45 = '70px',
        x49 = '96px',
        x80 = '50px',
        e115 = '${_responsive-showcase-CFC3}',
        bg = 'background-color',
        e114 = '${_award}',
        x61 = 'in_portals',
        x65 = 'payment_search',
        e188 = '${_line_9}',
        x90 = '221px',
        x52 = '301px',
        zx = 'scaleX',
        tp = 'top',
        x145 = 'line_8',
        fs = 'font-size',
        x68 = '154px',
        x54 = 'iphone-macbook',
        zy = 'scaleY',
        x97 = 'animation-snall',
        x84 = 'cta-small',
        e104 = '${_iphone-macbook}',
        x135 = '155px',
        x53 = '124px',
        e98 = '${_cta-small}',
        x93 = 'rgba(20,148,51,1.00)',
        e102 = '${_Social_Media}',
        g = 'image',
        r = 'deg',
        x144 = '67px',
        x3 = '3.0.0.322',
        e176 = '${_line_7}',
        e109 = '${_integrated}',
        x42 = 'Online_Fulfilment',
        x26 = '6px',
        x131 = '5px',
        x198 = '8px',
        x94 = 'rgba(223,215,48,1.00)',
        x147 = 'engage',
        x = 'text',
        e111 = '${_Responsive_Forms}',
        x92 = '3px',
        e17 = '${_background}',
        m = 'rect',
        x32 = '300',
        h = 'height',
        dt = 'Default Timeline',
        e11 = '${_ivendi_logo}',
        x87 = '44px',
        x86 = '115px',
        e20 = '${_hover_out}',
        x81 = '-4px',
        x100 = 'rgba(0,0,0,0.247059)',
        rt = 'right',
        x89 = '-803px',
        x130 = '-59px',
        e191 = '${_award_winning}',
        x18 = 'auto',
        ov = 'overflow',
        x95 = 'Rectangle-counterCopy2',
        x79 = 'responsive-showcase-ivendi-ipad-copy2',
        x12 = 'rgba(255,255,255,1)',
        l = 'normal',
        e13 = '${_Stage}',
        x148 = 'cta-12',
        x56 = 'Engage',
        x71 = 'Prospect_Analytics',
        e190 = '${_line_11}',
        w = 'width',
        x155 = 'award_winning',
        x57 = 'award',
        x25 = 'responsive-showcase-CFC3',
        x31 = '0px',
        ff = 'font-family',
        x154 = 'line_2',
        s = 'style';
    var im = './images/';
    var g55 = 'iphone-macbook.png',
        g5 = 'background.jpg',
        g152 = 'cta-12.png',
        g8 = 'ivendi_logo.png',
        g30 = 'responsive-showcase-CFC.png',
        g85 = 'cta-small.png',
        g83 = 'responsive-showcase-ivendi-ipad-copy.png';
    var s58 = "…Award Winning",
        s72 = "Prospect Analytics",
        s66 = "Payment Search",
        s62 = "In Portals &amp; Dealer sites",
        s168 = "Transact<br>",
        s167 = "Lender Integration",
        s78 = "Convert",
        s164 = "Product <br>Videos",
        s161 = "Integrated <br>Stock<br>",
        s51 = "Integrated Stock<br>",
        s156 = "Award Winning",
        s60 = "Integrated Finance",
        s139 = "Social Media Profiling<br>",
        s129 = "Online Credit Checking",
        s70 = "Responsive Forms",
        s43 = "Online Fulfilment",
        s40 = "Lender Integration<br>",
        s74 = "Social Media Profiling",
        s35 = "Transact",
        s76 = "Integrated Enquiries",
        s47 = "Showroom Sales Tools",
        s64 = "Product Videos";
    var fonts = {};
    fonts[x1] = '<script src=\"http://use.edgefonts.net/lato:n9,i4,n1,i7,i9,n7,i1,i3,n4,n3:all.js\"></script>';
    var P = Edge.P,
        T = Edge.T,
        A = Edge.A;
    var opts = {};
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
                    r: ['-199px', '-75px', '728px', '350px', 'auto', 'auto'],
                    f: [x4, im + g5, '0px', '0px']
                }, {
                    id: 'animation-small',
                    v: b,
                    t: m,
                    r: ['-125', '44', 'auto', 'auto', 'auto', 'auto']
                }, {
                    id: 'animation-big',
                    v: i,
                    t: m,
                    r: ['-7', '106', 'auto', 'auto', 'auto', 'auto']
                }, {
                    id: 'hover-expand',
                    v: b,
                    t: m,
                    r: ['1px', '0px', '300px', '250px', 'auto', 'auto'],
                    cu: ['pointer'],
                    f: [x6],
                    s: [0, xc, i]
                }, {
                    id: 'hover_out',
                    v: i,
                    t: m,
                    r: ['-150px', '0px', '450px', '350px', 'auto', 'auto'],
                    cu: ['pointer'],
                    f: [x6],
                    s: [0, "rgb(0, 0, 0)", i]
                }, {
                    id: 'Rectangle-white',
                    t: m,
                    r: ['8px', '-2px', '86px', '50px', 'auto', 'auto'],
                    f: [x7],
                    s: [0, "rgb(0, 0, 0)", i],
                    boxShadow: ["", 2, 2, 2, 1, "rgba(0,0,0,0.20)"]
                }, {
                    id: 'ivendi_logo',
                    t: g,
                    r: ['14px', '4px', '76px', '37px', 'auto', 'auto'],
                    f: [x4, im + g8, '0px', '0px']
                }],
                sI: [{
                    id: 'animation-big',
                    sN: 'animation-big',
                    a: {}
                }, {
                    id: 'animation-small',
                    sN: 'animation-snall',
                    a: {}
                }]
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 17002,
                    a: n,
                    tt: []
                }
            }
        },
        "animation-snall": {
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
                    tf: [
                        [0, 0],
                        [],
                        [],
                        [x24, x24]
                    ],
                    id: x25,
                    t: g,
                    r: [x26, x27, x28, x29, x18, x18],
                    f: [x4, im + g30, x31, x31]
                }, {
                    n: [x1, 34, x7, x32, i, x33],
                    id: x34,
                    text: s35,
                    t: x,
                    r: [x36, x37, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x39,
                    text: s40,
                    align: lf,
                    r: [x28, x41, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x42,
                    text: s43,
                    align: lf,
                    r: [x44, x45, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x46,
                    text: s47,
                    align: lf,
                    r: [x48, x49, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x50,
                    text: s51,
                    align: lf,
                    r: [x52, x53, x18, x18, x18, x18]
                }, {
                    id: x54,
                    t: g,
                    r: [x31, x31, x28, x29, x18, x18],
                    f: [x4, im + g55, x31, x31]
                }, {
                    n: [x1, 34, x7, x32, i, x33],
                    id: x56,
                    text: x56,
                    t: x,
                    r: [x36, x37, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x32, i, l],
                    t: x,
                    id: x57,
                    text: s58,
                    align: lf,
                    r: [x28, x41, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x59,
                    text: s60,
                    align: lf,
                    r: [x44, x45, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x61,
                    text: s62,
                    align: lf,
                    r: [x48, x49, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x63,
                    text: s64,
                    align: lf,
                    r: [x44, x53, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x65,
                    text: s66,
                    align: lf,
                    r: [x67, x68, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x69,
                    text: s70,
                    align: lf,
                    r: [x67, x68, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x71,
                    text: s72,
                    align: lf,
                    r: [x52, x53, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x73,
                    text: s74,
                    align: lf,
                    r: [x48, x49, x18, x18, x18, x18]
                }, {
                    n: [x1, 14, x12, x38, i, l],
                    t: x,
                    id: x75,
                    text: s76,
                    align: lf,
                    r: [x44, x45, x18, x18, x18, x18]
                }, {
                    n: [x1, 34, x7, x32, i, x33],
                    id: x77,
                    text: s78,
                    t: x,
                    r: [x36, x37, x18, x18, x18, x18]
                }, {
                    id: x79,
                    t: g,
                    r: [x80, x81, x82, x82, x18, x18],
                    f: [x4, im + g83, x31, x31]
                }, {
                    t: g,
                    id: x84,
                    f: [x4, im + g85, x31, x31],
                    r: [x67, x68, x86, x87, x18, x18],
                    boxShadow: ['', 0, 3, 3, 0, x88]
                }, {
                    r: [x89, x90, x91, x92, x18, x18],
                    f: [x6, [0, [
                        [x93, 0],
                        [x94, 100]
                    ]]],
                    id: x95,
                    s: [0, xc, i],
                    t: m,
                    boxShadow: ['', 2, 2, 2, 0, x96]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 14593,
                    a: y,
                    tt: []
                }
            }
        },
        "animation-big": {
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
                    id: x121,
                    t: g,
                    r: [x122, x123, x82, x82, x18, x18],
                    f: [x4, im + g83, x31, x31]
                }, {
                    t: x,
                    r: [x124, x125, x18, x18, x18, x18],
                    id: x77,
                    text: s78,
                    align: lf,
                    n: [x1, 36, x12, x32, i, x33]
                }, {
                    t: x,
                    r: [x126, x127, x18, x18, x18, x18],
                    id: x128,
                    text: s129,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    t: x,
                    r: [x130, x131, x18, x18, x18, x18],
                    id: x132,
                    text: s76,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x133,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    t: x,
                    r: [x136, x137, x18, x18, x18, x18],
                    id: x138,
                    text: s139,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x140,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    t: x,
                    r: [x141, x31, x18, x18, x18, x18],
                    id: x71,
                    text: s72,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x142,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    t: x,
                    r: [x143, x144, x18, x18, x18, x18],
                    id: x69,
                    text: s70,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x145,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    id: x146,
                    t: g,
                    r: [x31, x31, x28, x29, x18, x18],
                    f: [x4, im + g55, x31, x31]
                }, {
                    t: x,
                    r: [x124, x125, x18, x18, x18, x18],
                    id: x147,
                    text: x56,
                    align: lf,
                    n: [x1, 36, x12, x32, i, x33]
                }, {
                    id: x148,
                    t: g,
                    r: [x149, x150, x151, x80, x18, x18],
                    f: [x4, im + g152, x31, x31]
                }, {
                    t: x,
                    r: [x126, x127, x18, x18, x18, x18],
                    id: x61,
                    text: s62,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    t: x,
                    r: [x130, x131, x18, x18, x18, x18],
                    id: x153,
                    text: s60,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x154,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    t: x,
                    r: [x136, x137, x18, x18, x18, x18],
                    id: x155,
                    text: s156,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x157,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    t: x,
                    r: [x141, x31, x18, x18, x18, x18],
                    id: x63,
                    text: s64,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x158,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    t: x,
                    r: [x143, x144, x18, x18, x18, x18],
                    id: x65,
                    text: s66,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x159,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    t: x,
                    r: [x143, x144, x18, x18, x18, x18],
                    id: x160,
                    text: s161,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x162,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    id: x163,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    t: x,
                    r: [x141, x31, x18, x18, x18, x18],
                    id: x46,
                    text: s164,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x165,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    t: x,
                    r: [x136, x137, x18, x18, x18, x18],
                    id: x42,
                    text: s43,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    id: x166,
                    t: m,
                    r: [x134, x135, x18, x18, x18, x18]
                }, {
                    t: x,
                    r: [x130, x131, x18, x18, x18, x18],
                    id: x39,
                    text: s167,
                    align: lf,
                    n: [x1, 14, x12, x32, i, x33]
                }, {
                    t: x,
                    r: [x124, x125, x18, x18, x18, x18],
                    id: x34,
                    text: s168,
                    align: lf,
                    n: [x1, 36, x12, x32, i, x33]
                }, {
                    id: x169,
                    t: g,
                    r: [x170, x171, x28, x29, x18, x18],
                    f: [x4, im + g30, x31, x31]
                }, {
                    r: [x89, x90, x91, x92, x18, x18],
                    boxShadow: ['', 2, 2, 2, 0, x96],
                    id: x172,
                    s: [0, xc, i],
                    t: m,
                    f: [x6, [0, [
                        [x93, 0],
                        [x94, 100]
                    ]]]
                }],
                sI: [{
                    id: 'line_11',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_12',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_9',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_5',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_1',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_4',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_10',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_3',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_8',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_2',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_6',
                    sN: 'line',
                    a: {}
                }, {
                    id: 'line_7',
                    sN: 'line',
                    a: {}
                }]
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 17002,
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
                    r: [x31, x31, x198, x198, x18, x18],
                    br: [x199, x199, x199, x199],
                    id: x200,
                    s: [0, x201, i],
                    t: x202,
                    f: [x203]
                }, {
                    t: m,
                    id: x204,
                    s: [0, x201, i],
                    r: [x198, x205, x122, x206, x18, x18],
                    f: [x203]
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
    var S1 = symbols[x9];
    var tl0 = S1.tl[dt].tt,
        st1 = S1.s[a] = {},
        A1 = A(_, tl0, st1);
    A1.A(e11).P(tp, 4).P(h, 37).P(lf, 14).P(w, 76);
    A1.A(e13).P(bg, x12, c).P(w, 300).P(h, 250).P(ov, x14);
    A1.A(e15).P("boxShadow.inset", '', "subproperty").P("boxShadow.color", x16, "subproperty").P(lf, 8).P(w, 86).P(tp, -2).P("boxShadow.spread", 1, "subproperty").P(h, 50).P("boxShadow.offsetV", 2, "subproperty").P("boxShadow.offsetH", 2, "subproperty").P("boxShadow.blur", 2, "subproperty");
    A1.A(e17).P(tp, -75).P(rt, x18).P(lf, -199).P(bt, x18);
    A1.A(e19).P(o, 0, _, _, "").P("cursor", x10).P(d, b).T(5, i);
    A1.A(e20).P(tp, 0).P("cursor", x10).P(h, 350).P(w, 450).P(d, i).T(0, i).T(5, b).P(o, 0, _, _, "").T(5, 0).P(lf, 0, _, _, p).T(5, 0).P(bg, x21, c).T(5, x21);
    A1.A(e22).P(d, b).T(0, b).T(5, i);
    A1.A(e23).P(d, i).T(0, i).T(5, b).P(lf, 75).T(5, 75).P(tp, 125).T(5, 125);
    var S2 = symbols[x97];
    var tl1 = S2.tl[dt].tt,
        st2 = S2.s[a] = {},
        A2 = A(_, tl1, st2);
    A2.A(e98).P(tp, 154).P("boxShadow.color", x88, "subproperty").P("boxShadow.blur", 3, "subproperty").P(lf, 303).P(h, 44).P("boxShadow.offsetV", 3, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P(w, 115);
    A2.A(e99).P(h, 252).P(w, 300);
    A2.A(e101).P(tp, -51).T(4.94, -4, 0.462, qok).T(9.589, -51, 0.462).P(o, 0, _, _, "").T(4.94, 1, 0.462).T(9.589, 0, 0.462).P(lf, 90, _, _, p).T(4.94, 90);
    A2.A(e102).P("font-weight", 400, _, _, "").P(tp, 66, _, _, p).T(5.584, 61, 0.198, qok).T(9.249, 66, 0.198).P(o, 0, _, _, "").T(5.584, 1, 0.198).T(9.249, 0, 0.198).P(lf, 264, _, _, p).T(5.584, 274);
    A2.A(e103).P("font-weight", 400, _, _, "").P(tp, 99, _, _, p).T(10.549, 112, 0.208, qok).T(13.75, 99, 0.208).P(o, 0, _, _, "").T(10.549, 1, 0.208).T(13.75, 0, 0.208).P(lf, 311, _, _, p).T(10.549, 311);
    A2.A(e104).P(lf, -37).P(tp, -68).T(0, 0, 0.5, qok).T(4.44, -68, 0.5).P(o, 0, _, _, "").T(0, 1, 0.5).T(4.44, 0, 0.5);
    A2.A(e105).P(lf, 314).P("font-weight", 400, _, _, "").P(tp, 99, _, _, p).T(0.701, 92, 0.208, qok).T(3.884, 99, 0.208).P(o, 0, _, _, "").T(0.701, 1, 0.208).T(3.884, 0, 0.208);
    A2.A(e106).P(c, x7, c).P(ff, x1).P("font-style", x33).P("font-weight", 300, _, _, "").P(tp, -54, _, _, p).T(10.012, -29, 0.336, qok).T(14.073, -54, 0.25).P(o, 0, _, _, "").T(10.012, 1, 0.336).T(14.073, 0, 0.25).P(lf, 280, _, _, p).T(10.012, 280).P(fs, 38).T(10.012, 38);
    A2.A(e107).P("font-weight", 400, _, _, "").P(tp, 39, _, _, p).T(10.348, 62, 0.201, qok).T(13.958, 39, 0.201).P(o, 0, _, _, "").T(10.348, 1, 0.201).T(13.958, 0, 0.201).P(lf, 304, _, _, p).T(10.348, 304);
    A2.A(e108).P("font-weight", 400, _, _, "").P(tp, 66, _, _, p).T(10.415, 86, 0.198, qok).T(13.836, 66, 0.198).P(o, 0, _, _, "").T(10.415, 1, 0.198).T(13.836, 0, 0.198).P(lf, 278, _, _, p).T(10.415, 274, 0.198);
    A2.A(e109).P(lf, 293).P("font-weight", 400, _, _, "").P(tp, 39, _, _, p).T(0.5, 43, 0.201, qok).T(4.092, 39, 0.201).P(o, 0, _, _, "").T(0.5, 1, 0.201).T(4.092, 0, 0.201);
    A2.A(e110).P("font-weight", 400, _, _, "").P(tp, 39, _, _, p).T(5.457, 36, 0.201, qok).T(9.311, 39, 0.201).P(o, 0, _, _, "").T(5.457, 1, 0.201).T(9.311, 0, 0.201).P(lf, 285, _, _, p).T(5.457, 285);
    A2.A(e111).P("font-weight", 400, _, _, "").P(tp, 111, _, _, p).T(5.782, 113, 0.249, qok).T(9, 126, 0.249).P(o, 0, _, _, "").T(5.782, 1, 0.249).T(9, 0, 0.249).P(lf, 309, _, _, p).T(5.782, 299);
    A2.A(e112).P("boxShadow.inset", '', "subproperty").P("boxShadow.blur", 2, "subproperty").P("background-image", [0, [
        ['rgba(20,148,51,1.00)', 0],
        ['rgba(223,215,48,1.00)', 100]
    ]], "gradient").P(w, 728).P(h, 4).P("boxShadow.offsetV", -2, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P("boxShadow.color", x100, "subproperty").P(tp, 202).T(0, 202).P(lf, -603).T(0, -302, 14.593, ql);
    A2.A(e113).P("font-weight", 400, _, _, "").P(tp, 111, _, _, p).T(0.794, 119, 0.249, qok).T(3.75, 126, 0.249).P(o, 0, _, _, "").T(0.794, 1, 0.249).T(3.75, 0, 0.249).P(lf, 309, _, _, p).T(0.794, 309);
    A2.A(e114).P(tp, 10).P(lf, 288).P(fs, 17).T(0, 17).P(o, 0, _, _, "").T(0.414, 1, 0.182, qok).T(4.197, 0, 0.182);
    A2.A(e115).P(zy, 0.89403, t, _, "").P(zx, 0.89403, t).P(tp, -12, _, _, p).T(9.828, 13, 0.434, qok).T(14.159, -12, 0.434).P(o, 0, _, _, "").T(9.828, 1, 0.434).T(14.159, 0, 0.434).P(lf, 6, _, _, p).T(9.828, 6).T(10.262, 6).T(14.159, 6).T(14.593, 6);
    A2.A(e116).P("font-weight", 400, _, _, "").P(tp, 66, _, _, p).T(0.596, 67, 0.198, qok).T(3.999, 66, 0.198).P(o, 0, _, _, "").T(0.596, 1, 0.198).T(3.999, 0, 0.198).P(lf, 264, _, _, p).T(0.596, 264).T(4.197, 264);
    A2.A(e117).P("font-weight", 400, _, _, "").P(tp, 99, _, _, p).T(5.658, 87, 0.208, qok).T(9.103, 99, 0.208).P(o, 0, _, _, "").T(5.658, 1, 0.208).T(9.103, 0, 0.208).P(lf, 295, _, _, p).T(5.658, 295);
    A2.A(e118).P(c, x7, c).P(ff, x1).P("font-style", x33).P("font-weight", 300, _, _, "").P(tp, -54, _, _, p).T(0.25, -39, 0.25, qok).T(4.293, -54, 0.25).P(o, 0, _, _, "").T(0.25, 1, 0.25).T(4.293, 0, 0.25).P(lf, 309, _, _, p).T(0.25, 309).T(0.5, 309).T(4.293, 309).T(4.543, 309).P(fs, 36).T(0.25, 36).T(4.543, 36);
    A2.A(e119).P("font-weight", 400, _, _, "").P(tp, 26, _, _, p).T(10.233, 35, 0.182, qok).T(14.034, 10, 0.182).P(o, 0, _, _, "").T(10.233, 1, 0.182).T(14.034, 0, 0.182).P(lf, 297, _, _, p).T(10.233, 297);
    A2.A(e120).P("font-style", x33).P("font-weight", 300, _, _, "").P(c, x7, c).P(ff, x1).P(tp, -54, _, _, p).T(5.207, -28, 0.25, qok).T(9.512, -54, 0.25).P(o, 0, _, _, "").T(5.207, 1, 0.25).T(9.512, 0, 0.25).P(lf, 289, _, _, p).T(5.207, 289).P(fs, 38).T(5.207, 38);
    var S3 = symbols[x173];
    var tl2 = S3.tl[dt].tt,
        st3 = S3.s[a] = {},
        A3 = A(_, tl2, st3);
    A3.A(e99).P(h, 191).P(w, 300);
    A3.A(e174).P(tp, -110).T(0.25, -76, 0.25, qok).T(5.007, -110, 0.25).P(o, 0, _, _, "").T(0.25, 1, 0.25).T(5.007, 0, 0.25).P(lf, 103, _, _, p).T(0.25, 103).T(0.5, 103).T(5.007, 103).T(5.257, 103);
    A3.A(e175).P(lf, -59).P(fs, 14).P(tp, 15).T(6, 50, 0.25, qok).T(10.369, 15, 0.25).P(o, 0, _, _, "").T(6, 1, 0.25).T(10.369, 0, 0.25);
    A3.A(e105).P(tp, -21).T(1, 0, 0.257, qok).T(4.362, -21, 0.257).P(o, 0, _, _, "").T(1, 1, 0.257).T(4.362, 0, 0.257).P(lf, 252, _, _, p).T(1, 252).T(1.257, 252).T(4.362, 252).T(4.619, 252);
    A3.A(e176).P(tp, 7).T(6.653, 23, 0.236, qok).T(9.749, 7, 0.236).P(o, 0, _, _, "").T(6.653, 1, 0.236).T(9.749, 0, 0.236).P(lf, 171, _, _, p).T(6.653, 186).P(rz, 180, t, _, r).T(6.889, 180).T(9.749, 180);
    A3.A(e106).P(tp, -110).T(11.5, -96, 0.369, qok).T(16.25, -110, 0.25).P(o, 0, _, _, "").T(11.5, 1, 0.369).T(16.25, 0, 0.25).P(lf, 103, _, _, p).T(11.5, 103).T(11.869, 103).T(16.25, 103).T(16.5, 103);
    A3.A(e120).P(tp, -110).T(5.631, -96, 0.369, qok).T(10.619, -110, 0.25).P(o, 0, _, _, "").T(5.631, 1, 0.369).T(10.619, 0, 0.25).P(lf, 103, _, _, p).T(5.631, 103).T(6, 103).T(10.619, 103).T(10.869, 103);
    A3.A(e117).P(tp, -21).T(6.5, 0, 0.257, qok).T(9.862, -21, 0.257).P(o, 0, _, _, "").T(6.5, 1, 0.257).T(9.862, 0, 0.257).P(lf, 252, _, _, p).T(6.5, 252).T(6.757, 252).T(9.862, 252).T(10.119, 252);
    A3.A(e177).P(tp, 29).T(12.507, 49, 0.243, qok).T(15.369, 44, 0.243).P(o, 0, _, _, "").T(12.507, 1, 0.243).T(15.369, 0, 0.243).P(lf, 285, _, _, p).T(12.507, 285);
    A3.A(e178).P(lf, 211).P(tp, 60).T(1.126, 94, 0.236, qok).T(4.222, 60, 0.236).P(o, 0, _, _, "").T(1.126, 1, 0.236).T(4.222, 0, 0.236).P(rz, 180, t, _, r).T(1.362, 180).T(4.222, 180);
    A3.A(e111).P(tp, 44).T(6.757, 67, 0.243, qok).T(9.619, 44, 0.243).P(o, 0, _, _, "").T(6.757, 1, 0.243).T(9.619, 0, 0.243).P(lf, 249, _, _, p).T(7, 249);
    A3.A(e113).P(tp, 44).T(1.257, 67, 0.243, qok).T(4.119, 44, 0.243).P(o, 0, _, _, "").T(1.257, 1, 0.243).T(4.119, 0, 0.243).P(lf, 270, _, _, p).T(1.257, 270).T(1.5, 270).T(4.119, 270).T(4.362, 270);
    A3.A(e116).P(tp, 140).T(0.5, 114, 0.25, qok).T(4.869, 140, 0.25).P(o, 0, _, _, "").T(0.5, 1, 0.25).T(4.869, 0, 0.25).P(lf, 88, _, _, p).T(0.5, 88).T(0.75, 88).T(4.869, 88).T(5.119, 88);
    A3.A(e179).P(lf, -8).P(tp, 59).T(0.619, 72, 0.257, qok).T(4.75, 59, 0.257).P(o, 0, _, _, "").T(0.619, 1, 0.257).T(4.75, 0, 0.257);
    A3.A(e180).P(tp, -34).T(6.25, -17, 0.25, qok).T(10.119, -34, 0.25).P(o, 0, _, _, "").T(6.25, 1, 0.25).T(10.119, 0, 0.25).P(lf, -43, _, _, p).T(6.25, -43).T(6.5, -43).T(10.119, -43).T(10.369, -43);
    A3.A(e181).P(tp, 183).T(1.5, 151, 0.23, qok).T(16.75, 183, 0.252).P(o, 0, _, _, "").T(1.5, 1, 0.23).T(16.75, 0, 0.252).P(lf, 90, _, _, p).T(1.5, 90).T(1.73, 90).T(16.75, 90).T(17.002, 90);
    A3.A(e182).P(tp, -16).T(0.876, 5, 0.25, qok).T(4.458, -16, 0.25).P(o, 0, _, _, "").T(0.876, 1, 0.25).T(4.458, 0, 0.25).P(lf, 0, _, _, p).T(0.876, 0).T(1.126, 0).T(4.458, 0).T(4.708, 0);
    A3.A(e183).P(h, 139).P(lf, 40).P(w, 220).P(tp, -91).T(0, -26, 0.389, qok).T(5.119, -91, 0.389).P(o, 0, _, _, "").T(0, 1, 0.389).T(5.119, 0, 0.389);
    A3.A(e184).P(tp, -112).T(5.322, -62, 0.436, qok).T(10.75, -112, 0.436).P(o, 0, _, _, "").T(5.322, 1, 0.428).T(10.758, 0, 0.428).P(lf, 52, _, _, p).T(5.322, 52).T(5.758, 52).T(10.75, 52).T(11.186, 52);
    A3.A(e185).P(lf, 218).P(rz, 180, t, _, r).P(tp, 72, _, _, p).T(12.613, 92, 0.221, qok).T(15.202, 72, 0.221).P(o, 0, _, _, "").T(12.612, 1, 0.222).T(15.201, 0, 0.222);
    A3.A(e186).P(tp, -16).T(6.403, 5, 0.25, qok).T(9.985, -16, 0.25).P(o, 0, _, _, "").T(6.403, 1, 0.25).T(9.985, 0, 0.25).P(lf, 0, _, _, p).T(6.403, 13, 0.017).T(6.42, 13);
    A3.A(e187).P(zy, 1, t, _, "").P(zx, 1, t).P(lf, 11, _, _, p).P(tp, -109).T(11.186, -52, 0.633, qok).T(16.369, -109, 0.633).P(o, 0, _, _, "").T(11.186, 1, 0.633).T(16.369, 0, 0.633);
    A3.A(e108).P(tp, -21).T(12.25, -24, 0.126, qok).T(12.376, -24, 0.131).T(15.612, -21, 0.257).P(o, 0, _, _, "").T(12.25, 1, 0.257).T(15.612, 0, 0.257).P(lf, 294, _, _, p).T(12.25, 302);
    A3.A(e188).P(lf, -17).P(tp, 59).T(11.869, 72, 0.257, qok).T(16, 59, 0.257).P(o, 0, _, _, "").T(11.869, 1, 0.257).T(16, 0, 0.257);
    A3.A(e189).P(tp, 7).T(1.126, 23, 0.236, qok).T(4.222, 7, 0.236).P(o, 0, _, _, "").T(1.126, 1, 0.236).T(4.222, 0, 0.236).P(lf, 186, _, _, p).T(1.126, 186).T(1.362, 186).T(4.222, 186).T(4.458, 186).P(rz, 180, t, _, r).T(1.362, 180).T(4.222, 180);
    A3.A(e190).P(tp, 7).T(12.377, 17, 0.236, qok).T(15.473, 7, 0.236).P(o, 0, _, _, "").T(12.377, 1, 0.236).T(15.473, 0, 0.236).P(lf, 214, _, _, p).T(12.376, 214).P(rz, 180, t, _, r).T(12.612, 180).T(15.473, 180);
    A3.A(e191).P(tp, -34).T(0.75, -17, 0.25, qok).T(4.619, -34, 0.25).P(o, 0, _, _, "").T(0.75, 1, 0.25).T(4.619, 0, 0.25).P(lf, -43, _, _, p).T(0.75, -43).T(1, -43).T(4.619, -43).T(4.869, -43);
    A3.A(e107).P(tp, -34).T(12, -17, 0.25, qok).T(15.869, -34, 0.25).P(o, 0, _, _, "").T(12, 1, 0.25).T(15.869, 0, 0.25).P(lf, -43, _, _, p).T(12, -43).T(12.25, -43).T(15.869, -43).T(16.119, -43);
    A3.A(e192).P(rz, 180, t, _, r).P(tp, 72, _, _, p).T(6.889, 92, 0.221, qok).T(9.478, 72, 0.221).P(o, 0, _, _, "").T(6.889, 1, 0.222).T(9.478, 0, 0.222).P(lf, 173, _, _, p).T(6.889, 178);
    A3.A(e193).P(tp, 59).T(6.146, 72, 0.257, qok).T(10.277, 59, 0.257).P(o, 0, _, _, "").T(6.146, 1, 0.257).T(10.277, 0, 0.257).P(lf, 12, _, _, p).T(6.146, 12);
    A3.A(e194).P(tp, 140).T(5.896, 125, 0.25, qok).T(10.515, 140, 0.25).P(o, 0, _, _, "").T(5.896, 1, 0.25).T(10.515, 0, 0.25).P(lf, 88, _, _, p).T(5.896, 88).T(6.146, 88).T(10.515, 88).T(10.765, 88);
    A3.A(e195).P("boxShadow.inset", '', "subproperty").P("boxShadow.blur", 2, "subproperty").P("background-image", [0, [
        ['rgba(20,148,51,1.00)', 0],
        ['rgba(223,215,48,1.00)', 100]
    ]], "gradient").P(w, 728).P(h, 4).P("boxShadow.offsetV", -2, "subproperty").P("boxShadow.offsetH", 0, "subproperty").P("boxShadow.color", x100, "subproperty").P(lf, -803).T(0, -428, 17.002, ql).P(tp, 221).T(0, 221);
    A3.A(e196).P(lf, -59).P(fs, 14).P(tp, 15).T(0.5, 50, 0.25, qok).T(4.869, 15, 0.25).P(o, 0, _, _, "").T(0.5, 1, 0.25).T(4.869, 0, 0.25);
    A3.A(e119).P(lf, -59).P(fs, 14).P(tp, 15).T(11.75, 50, 0.25, qok).T(16.119, 15, 0.25).P(o, 0, _, _, "").T(11.75, 1, 0.25).T(16.119, 0, 0.25);
    A3.A(e197).P(tp, -16).T(12.126, 5, 0.25, qok).T(15.708, -16, 0.25).P(o, 0, _, _, "").T(12.126, 1, 0.25).T(15.708, 0, 0.25).P(lf, -18, _, _, p).T(12.126, -18);
    var S4 = symbols[x207];
    var tl3 = S4.tl[dt].tt,
        st4 = S4.s[a] = {},
        A4 = A(_, tl3, st4);
    A4.A(e208).P(h, 1).P(w, 52);
    A4.A(e209).P(tp, 0).P(lf, 0);
    A4.A(e99).P(h, 8).P(w, 119);
    Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);
    $(window).ready(function() {
        Edge.launchComposition(compId);
    });
})(jQuery, AdobeEdge, "mpu-ivendi");