import OpenSansVariable from '@/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf';
import OpenSansItalicVariable from '@/assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf';
import { globalToken } from '@/config/1byte-react-design';
import { css } from '@emotion/react';

const globalStyles = css`
    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansVariable}) format('truetype');
        font-weight: 100 900;
        font-stretch: 75% 125%;
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansItalicVariable}) format('truetype');
        font-weight: 100 900;
        font-stretch: 75% 125%;
        font-style: italic;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    *:not(.ace_editor):not(.ace_editor *) {
        font-family: ${globalToken.fontFamily};
    }

    // Notification
    .rd-notification-notice-wrapper {
        .rd-notification-notice-error {
            background-color: ${globalToken.colorErrorBg};
            border-left: 4px solid ${globalToken.colorError};
        }

        .rd-notification-notice-success {
            background-color: ${globalToken.colorSuccessBg};
            border-left: 4px solid ${globalToken.colorSuccess};
        }

        .rd-notification-notice-warning {
            background-color: ${globalToken.colorWarningBg};
            border-left: 4px solid ${globalToken.colorWarning};
        }

        .rd-notification-notice-message {
            font-weight: ${globalToken.fontWeightStrong};
        }

        .rd-notification-notice-close {
            color: ${globalToken.colorTextLightSolid};
        }
    }
`;

export default globalStyles;
