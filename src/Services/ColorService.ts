class ColorService {
    public TRANSPARENT = 'transparent';
    public WHITE = '#FFFFFF';
    public BLACK = '#000000';
    public PRIMARY = '#8026de';
    public PRIMARY2 = '#a165e0';
    public SECONDARY = '#9a969e';
    public GRAY = '#d1cbd6';
    public RED = '#FC857F';

    public getHexOpacity(value: number) {
        try {
            if (value > 1) value /= 100;
            let alpha16 = value.toString(16).split('.')[1].substr(0, 2);
            while (alpha16.length < 2) alpha16 += '0';
            return alpha16;
        } catch (error) {
            return 'FF';
        }
    }

    public hexToRGB(hex: string, alpha?: number) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
        return `rgb(${r}, ${g}, ${b})`;
    }
}

export const Colors = new ColorService();