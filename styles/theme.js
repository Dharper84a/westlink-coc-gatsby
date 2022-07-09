const colors = {
    white: "#FFFFFF",

    black: "#000000",
    darkBlack: "#333333",
    matteBlack: "#28282B",

    gray: "#DDDDDD",
    veryLightGray: "#F2F2F2",
    lightGray: "#EFEFEF",

    // greens
    pastelGreen: "#C1E1C1",
    blue: "#197ddf",
    darkBlue: "#3019df",
    purple: "#5f0e70",

    // reds
    pink: '#e91967',

    darkText: "#333333",
    lightText: "#EFEFEF",
};
const gradients = {
    background:
        "linear-gradient(315deg, rgba(95,14,112,1) 0%, rgba(25,125,223,1) 100%)",
};
const layout = {
    maxSiteWidth: "1920px",
    maxContentWidth: "1666px",
    maxHeaderWidth: "1800px",
    maxFooterWidth: "1800px",
    horizontalEdgePadding: "6%",
    verticalEdgePadding: "1.5%",
    staticSmallEdgePaddingTD: "1rem",
    staticMediumEdgePaddingTD: "1.75rem",
    contentContainerPadding: "1rem",
};

const getClamp = (min, max) => {
    const slope = (max - min) / (1920 - 390);
    const yIntersection = -390 * slope + min;

    const preferredValue = `${yIntersection.toFixed(2)}px + ${(
        slope * 100
    ).toFixed(2)}vw`;

    return `clamp(${min}px, ${preferredValue}, ${max}px)`;
};
const typography = {
    family: {
        primary: "poppins, sans-serif",
        secondary: "poppins, sans-serif",
    },
    sizes: {
        small: {
            min: 12,
            max: 14,
            clamp: getClamp(12,14),
        },
        normal: {
            min: 16,
            max: 20,
            clamp: getClamp(12,14),
        },
        large: {
            min: 20,
            max: 24,
            clamp: getClamp(12,14),
        },
    },
};

const layers = {
    base: 1,
    content: 10,
    overlay: 100,
    modal: 110,
};
const device = {
    iphones: "(max-width: 768px)",
    ipads: "(max-width: 1024px)",
    smallMacs: "(max-width: 1336px)",
    mediumMacs: "(max-width: 1666px)",
    largeMacs: "(max-width: 1800px)",
};

const theme = {
    colors,
    gradients,
    layout,
    typography,
    layers,
    device,
    container: {
        width: "100%",
        maxWidth: layout.maxSiteWidth,
        minHeight: "100vh",
        margin: "0 auto",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: layout.maxHeaderWidth,
        margin: "0 auto",
        paddingLeft: layout.horizontalEdgePadding,
        paddingRight: layout.horizontalEdgePadding,
        paddingTop: layout.staticSmallEdgePaddingTD,
        paddingBottom: layout.staticSmallEdgePaddingTD,
    },
    footer: {
        display: "grid",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        maxWidth: layout.maxHeaderWidth,
        margin: "0 auto",
        paddingLeft: layout.horizontalEdgePadding,
        paddingRight: layout.horizontalEdgePadding,
        paddingTop: layout.staticSmallEdgePaddingTD,
        paddingBottom: layout.staticSmallEdgePaddingTD,
    },
    content: {
        width: "100%",
        maxWidth: layout.maxContentWidth,
        margin: "0 auto",
        paddingLeft: layout.horizontalEdgePadding,
        paddingRight: layout.horizontalEdgePadding,
    },
    getClamp,
};

export default theme;
