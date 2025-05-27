import { config, RdAliasToken, RdThemeConfig, rdTheme } from '1byte-react-design';
import './notification';

const seedToken: Partial<RdAliasToken> = {
    borderRadius: 6,
    colorLink: '#584EC1',
    colorTextDescription: '#868686',

    colorPrimary: '#8C67EA',

    fontFamily: "'Open Sans', sans-serif",
    // fontFamily: "'Aeonik', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif",
    fontSize: 14,
    controlHeight: 28,
};

// #NOTE: Just config seed token because this will generate to MapToken by algorithm in antd.
// Then we will use these MapToken to custom components token.
export const themeConfig: RdThemeConfig = {
    token: seedToken,
    // algorithm: [rdTheme.darkAlgorithm],
};

// Use algorithm in antd to get MapToken.
export const globalToken = rdTheme.getDesignToken(themeConfig);

// Use globalToken (mapped by algorithm in antd) or hard value to custom theme.
themeConfig.components = {
    Badge: {
        indicatorHeight: 16,
        textFontSize: 12,
        textFontSizeSM: 10,
        paddingXS: 6,
        algorithm: true,
    },
    Modal: {
        titleFontSize: globalToken.fontSizeHeading3,
    },
    Input: {
        algorithm: true,
    },
    Select: {
        algorithm: true,
    },
    Menu: {
        // Component Token
        collapsedWidth: 100,
        iconSize: 20,
        collapsedIconSize: 20,
    },
    Table: {
        // Component Token
        // headerBg: globalToken.colorPrimary,
        // headerColor: globalToken.colorTextLightSolid,
        // headerSplitColor: globalToken.colorPrimary,
        cellPaddingBlock: 9,
        cellPaddingInline: 16,
        rowExpandedBg: globalToken.colorPrimaryBg,
        rowHoverBg: globalToken.colorPrimaryBg,
        algorithm: true,
        fontWeightStrong: 600,
    },
    Avatar: {
        colorPrimary: globalToken.colorPrimary,
        containerSizeSM: 24,
        containerSize: 32,
        containerSizeLG: 40,

        borderRadius: 2,

        algorithm: true,
    },
    Card: {
        // headerBg: globalToken.colorPrimary,
        // headerHeight: 32,
        // colorTextHeading: globalToken.colorTextLightSolid,

        algorithm: true,
    },
    Collapse: {
        headerBg: globalToken.colorPrimary,
        borderRadius: 0,
        colorTextHeading: '#fff',
        borderRadiusLG: 0,
    },
    Empty: {
        colorTextDescription: globalToken.colorText,
    },
    Breadcrumb: {
        algorithm: true,
        fontSize: 14,
        // lastItemColor: globalToken.colorText,
    },
    List: {
        itemPadding: '10px',
        algorithm: true,
    },
    Button: {
        algorithm: true,
    },
    // Notification: {
    //     borderRadiusLG: 0, // Border radius of toast wrapper
    //     fontSizeLG: 14, // Font size of message
    //     paddingContentHorizontalLG: 16, // Padding top and bottom in wrapper
    //     paddingMD: 10, // Padding left and right in wrapper
    //     marginXS: 10, // Spacing between message and description

    //     // borderLeft: 10, // Border left width

    //     colorIcon: globalToken.colorText,
    // },
    Layout: {
        colorBgLayout: globalToken.colorBgElevated,

        headerBg: globalToken.colorPrimary,
        headerColor: globalToken.colorBgElevated,
        headerHeight: 56,
        headerPadding: '0 16px',

        lineHeight: globalToken.lineHeight,

        siderBg: globalToken.colorBgElevated,
        zeroTriggerWidth: 100,
        triggerBg: globalToken.colorBgElevated,
        triggerColor: '#000000',

        footerBg: globalToken.colorPrimary,

        algorithm: true,
    },
    Tabs: {
        // cardBg: globalToken.colorSecondary,
    },
    Form: {
        itemMarginBottom: 16,
    },
    Spin: {},
    Typography: {
        fontWeightStrong: 500,
        lineWidthFocus: 0,
        colorPrimaryBorder: '#fff',
    },
    Radio: {
        radioSize: globalToken.controlHeight / 2,
        wrapperMarginInlineEnd: 0,
    },
    Tooltip: {
        fontSize: 12,
    },
    Popover: {},
    CenteredTemplate: {
        paddingContentHorizontalLG: 55,
        paddingContentVerticalLG: 55,

        // Component token
        contentPadding: '36px 36px', // Default '36px 36px'
    },
};

config.designToken = rdTheme.getDesignToken(themeConfig);
config.componentToken = themeConfig.components;
