export interface Theme {
    name: string;
    properties: any;
    theme: any
}

export const defaultTheme: Theme = {
    name: "defaultTheme",
    theme: 'default',
    properties: {

        "--primaryApp": "#1e2334",
        "--surface": "#2c3049",
        "--font": "#cfd8dc",
        "--nav-elements": "#fff",
        "--nav-highLight": "#ffffff1a",
        "--highLight": "#ff7a18",
        "--title-section": "#fff",
    }
};

export const lightTheme: Theme = {
    name: "lightTheme",
    theme: 'light',
    properties: {

        "--primaryApp": "#fff",
        "--surface": "#f3f0f0",
        "--font": "#1e2021",
        "--nav-elements": "#1e2021",
        "--nav-highLight": "var(--surface)",
        "--highLight": "#ff7a18",
        "--title-section": "var(--font)",
    }
};
export const themeList = {
    default: defaultTheme,
    light: lightTheme,
}
