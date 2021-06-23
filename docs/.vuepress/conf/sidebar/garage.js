module.exports = [
    '',
    {
        title: '车辆推荐',
        collapsable: false,
        children: [
            'recommend/scooter',
            'recommend/junior-motorcycle',
            'recommend/intermediate-motorcycle',
            'recommend/advanced-motorcycle',
        ]
    },
    {
        title: '车辆牌照',
        collapsable: false,
        children: [
            'license-plate/a-or-b',
            'license-plate/company-or-personal',
            'license-plate/restrict-policy'
        ]
    },
    {
        title: '车辆登记流程',
        collapsable: true,
        children: [
            ['motor-register/', "概述"],
            ['motor-register/insurance', "1.上交强险"],
            ['motor-register/acquisition-tax', "2.车辆购置税缴纳"],
            ['motor-register/temp-license', "3.办理临牌"],
            ['motor-register/check-motor', "4.验车上牌"],
        ]
    },
    {
        title: '二手车交易转移登记',
        children: [
            ['trade/trade-knowledge', "心得"],
            ['trade/motor-owner-transfer', "过户流程(市内转)"],
            ['trade/motor-owner-transfer-cross-regional', "过户流程(外转京)"]
        ]
    },
    {
        title: '信息变更',
        collapsable: false,
        children: [
            ['information-changes/appearance', "摩托车改色备案"]
        ]
    },
    {
        title: '车险',
        collapsable: false,
        children: [
            'insurance/overview',
            'insurance/tci',
            'insurance/vci',
            'insurance/ti',
            'insurance/vdi',
        ]
    },
];